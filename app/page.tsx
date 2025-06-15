import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Laptop, Smartphone } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: "juan",
    name: "Juan Pérez",
    role: "Frontend Developer",
    image: "/placeholder.svg?height=150&width=150",
    skills: ["React", "TypeScript", "CSS"],
    description: "Especialista en desarrollo frontend y experiencia de usuario",
  },
  {
    id: "maria",
    name: "María García",
    role: "Backend Developer",
    image: "/placeholder.svg?height=150&width=150",
    skills: ["Node.js", "Express", "MongoDB"],
    description: "Experta en desarrollo backend y arquitectura de APIs",
  },
  {
    id: "carlos",
    name: "Carlos López",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=150&width=150",
    skills: ["React", "Node.js", "PostgreSQL"],
    description: "Desarrollador full stack con experiencia en múltiples tecnologías",
  },
  {
    id: "ana",
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
    image: "/placeholder.svg?height=150&width=150",
    skills: ["Figma", "React", "Tailwind"],
    description: "Diseñadora y desarrolladora enfocada en experiencia de usuario",
  },
]

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Equipo React
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">Trabajo Práctico Grupal - Desarrollo Web con React</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Code className="w-4 h-4 mr-1" />
              React
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Laptop className="w-4 h-4 mr-1" />
              Responsive Design
            </Badge>
            <Badge variant="secondary" className="text-sm px-3 py-1">
              <Smartphone className="w-4 h-4 mr-1" />
              SPA
            </Badge>
          </div>
          <Button asChild size="lg">
            <Link href="/equipo">Conoce al Equipo</Link>
          </Button>
        </div>
      </section>

      {/* Team Preview */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <CardDescription>{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="w-full">
                  <Link href={`/integrante/${member.id}`}>Ver Perfil</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Overview */}
      <section className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre el Proyecto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Tecnologías
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Desarrollado con React, React Router, y tecnologías modernas de frontend.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Laptop className="w-5 h-5" />
                Responsive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Diseño adaptable para móvil, tablet y escritorio con 3 puntos de quiebre.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                SPA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Single Page Application con navegación fluida sin recargas de página.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
