"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RefreshCw, Rocket, Users, User, Globe, Info, AlertTriangle } from "lucide-react"

// Definir la estructura de datos que esperamos de la API
interface Person {
  name: string
  craft: string
}

interface AstrosResponse {
  number: number
  people: Person[]
  message: string
}

export default function ApiExternaPage() {
  const [data, setData] = useState<AstrosResponse | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())
  const [isUsingFallback, setIsUsingFallback] = useState(false)

  // Función para obtener los datos de la API
  const fetchAstronauts = async () => {
    setLoading(true)
    setError(null)
    setIsUsingFallback(false)

    try {
      // Usar nuestra ruta de API proxy
      const response = await fetch("/api/astros")

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      const result = await response.json()
      setData(result)

      // Verificar si estamos usando datos de respaldo (esto es una heurística simple)
      // En un caso real, podríamos añadir un campo en la respuesta para indicar esto
      if (result.people && result.people.length === 7 && result.people[0].name === "Jasmin Moghbeli") {
        setIsUsingFallback(true)
      }

      setLastUpdated(new Date())
    } catch (err) {
      setError("No se pudieron cargar los datos. Usando información de respaldo.")
      console.error("Error fetching data:", err)
      setIsUsingFallback(true)
    } finally {
      setLoading(false)
    }
  }

  // Cargar datos al montar el componente
  useEffect(() => {
    fetchAstronauts()
  }, [])

  // Agrupar astronautas por nave espacial
  const astronautsBySpacecraft =
    data?.people.reduce(
      (acc, person) => {
        if (!acc[person.craft]) {
          acc[person.craft] = []
        }
        acc[person.craft].push(person)
        return acc
      },
      {} as Record<string, Person[]>,
    ) || {}

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Personas en el Espacio</h1>
        <p className="text-xl text-gray-600">Datos de astronautas actualmente en el espacio</p>
      </div>

      {/* Controles */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Última actualización: {lastUpdated.toLocaleString()}</p>
        <Button onClick={fetchAstronauts} disabled={loading} variant="outline" className="flex items-center gap-2">
          <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Actualizar datos
        </Button>
      </div>

      {/* Notificación de datos de respaldo */}
      {isUsingFallback && (
        <Alert variant="warning" className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            Usando datos de respaldo. La API externa podría no estar disponible en este momento.
          </AlertDescription>
        </Alert>
      )}

      {/* Error */}
      {error && !isUsingFallback && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Resumen */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Resumen
          </CardTitle>
          <CardDescription>Información general sobre personas en el espacio</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-4">
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <span className="text-3xl font-bold">{data?.number || 0}</span>
                <span className="text-sm text-gray-600">Personas en el espacio</span>
              </div>

              <div className="flex flex-col items-center p-6 bg-purple-50 rounded-lg">
                <Rocket className="h-8 w-8 text-purple-600 mb-2" />
                <span className="text-3xl font-bold">{Object.keys(astronautsBySpacecraft).length}</span>
                <span className="text-sm text-gray-600">Naves espaciales</span>
              </div>

              <div className="flex flex-col items-center p-6 bg-green-50 rounded-lg">
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <span className="text-3xl font-bold">{data?.message === "success" ? "Activo" : "Desconocido"}</span>
                <span className="text-sm text-gray-600">Estado del servicio</span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Lista de astronautas por nave */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Astronautas por Nave Espacial</h2>

        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-48 w-full" />
          </div>
        ) : data?.people && data.people.length > 0 ? (
          Object.entries(astronautsBySpacecraft).map(([craft, people]) => (
            <Card key={craft}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5" />
                  {craft}
                </CardTitle>
                <CardDescription>{people.length} astronautas a bordo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {people.map((person, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <User className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium">{person.name}</p>
                        <p className="text-sm text-gray-500">Astronauta</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-gray-500">No hay datos disponibles en este momento.</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Información sobre la API */}
      <Card className="bg-gray-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Sobre esta API
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Open Notify - "People In Space"</h4>
              <p className="text-sm text-gray-600">
                Esta API proporciona información en tiempo real sobre el número de personas que actualmente están en el
                espacio, sus nombres y en qué nave espacial se encuentran. Es una API pública que no requiere
                autenticación.
              </p>
              <div className="mt-4">
                <h5 className="font-medium mb-1">Endpoint utilizado:</h5>
                <Badge variant="outline" className="font-mono text-xs">
                  http://api.open-notify.org/astros.json
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Implementación</h4>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                <li>Fetch API para realizar la petición HTTP</li>
                <li>Proxy de API para evitar problemas de CORS y contenido mixto</li>
                <li>Sistema de datos de respaldo para garantizar la disponibilidad</li>
                <li>React Hooks (useState, useEffect) para gestionar el estado</li>
                <li>Manejo de estados de carga y error</li>
                <li>Agrupación de datos por nave espacial</li>
                <li>Actualización manual de datos</li>
                <li>Visualización responsiva de la información</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
