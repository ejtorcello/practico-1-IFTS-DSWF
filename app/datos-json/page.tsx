"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Star, Filter } from "lucide-react"

// Datos JSON locales - 20+ objetos
const moviesData = [
  {
    id: 1,
    title: "El Padrino",
    year: 1972,
    genre: "Drama",
    director: "Francis Ford Coppola",
    rating: 9.2,
    duration: 175,
    description: "La historia de una familia de la mafia italiana en Nueva York.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 2,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crimen",
    director: "Quentin Tarantino",
    rating: 8.9,
    duration: 154,
    description: "Historias entrelazadas de crimen en Los Ángeles.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 3,
    title: "El Señor de los Anillos: El Retorno del Rey",
    year: 2003,
    genre: "Fantasía",
    director: "Peter Jackson",
    rating: 8.9,
    duration: 201,
    description: "La batalla final por la Tierra Media.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 4,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    director: "Robert Zemeckis",
    rating: 8.8,
    duration: 142,
    description: "La extraordinaria vida de un hombre simple.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 5,
    title: "Inception",
    year: 2010,
    genre: "Ciencia Ficción",
    director: "Christopher Nolan",
    rating: 8.8,
    duration: 148,
    description: "Un ladrón que roba secretos del subconsciente.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 6,
    title: "Matrix",
    year: 1999,
    genre: "Ciencia Ficción",
    director: "Lana Wachowski",
    rating: 8.7,
    duration: 136,
    description: "Un programador descubre la realidad de su mundo.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 7,
    title: "Goodfellas",
    year: 1990,
    genre: "Crimen",
    director: "Martin Scorsese",
    rating: 8.7,
    duration: 146,
    description: "La vida en la mafia desde adentro.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 8,
    title: "Interstellar",
    year: 2014,
    genre: "Ciencia Ficción",
    director: "Christopher Nolan",
    rating: 8.6,
    duration: 169,
    description: "Un viaje a través del espacio y el tiempo.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 9,
    title: "El Club de la Pelea",
    year: 1999,
    genre: "Drama",
    director: "David Fincher",
    rating: 8.8,
    duration: 139,
    description: "Un empleado insomne forma un club de pelea clandestino.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 10,
    title: "El Silencio de los Corderos",
    year: 1991,
    genre: "Thriller",
    director: "Jonathan Demme",
    rating: 8.6,
    duration: 118,
    description: "Una agente del FBI busca ayuda de un asesino en serie.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 11,
    title: "Schindler's List",
    year: 1993,
    genre: "Drama",
    director: "Steven Spielberg",
    rating: 8.9,
    duration: 195,
    description: "La historia real de Oskar Schindler durante el Holocausto.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 12,
    title: "Casablanca",
    year: 1942,
    genre: "Romance",
    director: "Michael Curtiz",
    rating: 8.5,
    duration: 102,
    description: "Romance en tiempos de guerra en Marruecos.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 13,
    title: "Ciudadano Kane",
    year: 1941,
    genre: "Drama",
    director: "Orson Welles",
    rating: 8.4,
    duration: 119,
    description: "La vida y muerte de un magnate de los medios.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 14,
    title: "Apocalypse Now",
    year: 1979,
    genre: "Guerra",
    director: "Francis Ford Coppola",
    rating: 8.4,
    duration: 147,
    description: "Un viaje al corazón de las tinieblas en Vietnam.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 15,
    title: "Taxi Driver",
    year: 1976,
    genre: "Drama",
    director: "Martin Scorsese",
    rating: 8.3,
    duration: 114,
    description: "Un taxista solitario en las calles de Nueva York.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 16,
    title: "Vertigo",
    year: 1958,
    genre: "Thriller",
    director: "Alfred Hitchcock",
    rating: 8.3,
    duration: 128,
    description: "Un detective con acrofobia investiga a una mujer misteriosa.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 17,
    title: "Psycho",
    year: 1960,
    genre: "Horror",
    director: "Alfred Hitchcock",
    rating: 8.5,
    duration: 109,
    description: "Una secretaria roba dinero y se hospeda en un motel siniestro.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 18,
    title: "Singin' in the Rain",
    year: 1952,
    genre: "Musical",
    director: "Gene Kelly",
    rating: 8.3,
    duration: 103,
    description: "La transición del cine mudo al sonoro en Hollywood.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 19,
    title: "Lawrence de Arabia",
    year: 1962,
    genre: "Aventura",
    director: "David Lean",
    rating: 8.3,
    duration: 228,
    description: "La historia épica de T.E. Lawrence en el desierto árabe.",
    poster: "/placeholder.svg?height=300&width=200",
  },
  {
    id: 20,
    title: "2001: Una Odisea del Espacio",
    year: 1968,
    genre: "Ciencia Ficción",
    director: "Stanley Kubrick",
    rating: 8.3,
    duration: 149,
    description: "Un viaje épico a través del espacio y la evolución humana.",
    poster: "/placeholder.svg?height=300&width=200",
  },
]

export default function DatosJsonPage() {
  const [movies, setMovies] = useState(moviesData)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedGenre, setSelectedGenre] = useState("all")
  const [sortBy, setSortBy] = useState("title")

  const genres = [...new Set(moviesData.map((movie) => movie.genre))]

  useEffect(() => {
    let filteredMovies = moviesData

    // Filtrar por búsqueda
    if (searchTerm) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          movie.director.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filtrar por género
    if (selectedGenre !== "all") {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre)
    }

    // Ordenar
    filteredMovies.sort((a, b) => {
      switch (sortBy) {
        case "year":
          return b.year - a.year
        case "rating":
          return b.rating - a.rating
        case "title":
        default:
          return a.title.localeCompare(b.title)
      }
    })

    setMovies(filteredMovies)
  }, [searchTerm, selectedGenre, sortBy])

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Catálogo de Películas</h1>
        <p className="text-xl text-gray-600">
          Datos cargados desde archivo JSON local - {moviesData.length} películas clásicas
        </p>
      </div>

      {/* Filtros y búsqueda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filtros y Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Buscar por título o director..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedGenre} onValueChange={setSelectedGenre}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por género" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los géneros</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="title">Título</SelectItem>
                <SelectItem value="year">Año</SelectItem>
                <SelectItem value="rating">Calificación</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{movies.length}</div>
            <p className="text-sm text-gray-600">Películas mostradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">{genres.length}</div>
            <p className="text-sm text-gray-600">Géneros disponibles</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">
              {Math.round((movies.reduce((acc, movie) => acc + movie.rating, 0) / movies.length) * 10) / 10}
            </div>
            <p className="text-sm text-gray-600">Calificación promedio</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold">
              {Math.round(movies.reduce((acc, movie) => acc + movie.duration, 0) / movies.length)}
            </div>
            <p className="text-sm text-gray-600">Duración promedio (min)</p>
          </CardContent>
        </Card>
      </div>

      {/* Grid de películas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Card key={movie.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="p-0">
              <div className="aspect-[2/3] bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              <div>
                <CardTitle className="text-lg line-clamp-2">{movie.title}</CardTitle>
                <CardDescription>
                  {movie.year} • {movie.director}
                </CardDescription>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary">{movie.genre}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{movie.rating}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-3">{movie.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{movie.duration} min</span>
                <Button variant="outline" size="sm">
                  Ver detalles
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {movies.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No se encontraron películas que coincidan con los filtros seleccionados.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
