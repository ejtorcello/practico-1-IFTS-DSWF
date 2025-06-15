"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, ExternalLink, Code, Server, Globe } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Lista de habilidades para Carlos con niveles
const skills = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Docker", level: 70 },
  { name: "GraphQL", level: 65 },
  { name: "AWS", level: 60 },
  { name: "CI/CD", level: 75 },
]

// Tecnologías principales
const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "🔗" },
  { name: "Docker", icon: "🐳" },
]

// Proyectos
const projects = [
  {
    title: "Plataforma de Cursos Online",
    description: "Sistema completo de educación online con videos y evaluaciones",
    tech: ["React", "Node.js", "PostgreSQL"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Panel de control con métricas en tiempo real y visualizaciones",
    tech: ["React", "GraphQL", "D3.js"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Chat Application",
    description: "Aplicación de chat en tiempo real con salas y notificaciones",
    tech: ["React", "Socket.io", "Redis"],
    status: "Completado",
    link: "#",
  },
]

export default function CarlosProfile() {
  // Estilo corpo
  return (
    <div className="space-y-8">
      {/* Header - Estilo  con gradiente */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-700 text-white p-8 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
         <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/30">
  <img src="/path/to/foto-perfil.jpg" alt="Foto de Carlos López" className="w-full h-full object-cover" />
</div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Carlos López</h1>
            <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
            <p className="text-blue-100 max-w-2xl">
              Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración
              frontend-backend y optimización de aplicaciones web. Apasionado por las mejores prácticas de desarrollo.
            </p>
            <div className="flex gap-3 mt-4 justify-center md:justify-start">
              <Button variant="secondary" size="sm">
                <Github className="w-4 h-4 mr-1" />
                GitHub
              </Button>
              <Button variant="secondary" size="sm">
                <Linkedin className="w-4 h-4 mr-1" />
                LinkedIn
              </Button>
              <Button variant="secondary" size="sm">
                <Mail className="w-4 h-4 mr-1" />
                Contacto
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Información personal - Estilo de tarjeta con columnas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Globe className="w-5 h-5 mr-2" />
              Ubicación
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>Rosario, Argentina</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Code className="w-5 h-5 mr-2" />
              Experiencia
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>5 años</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="bg-gray-50">
            <CardTitle className="flex items-center text-lg">
              <Server className="w-5 h-5 mr-2" />
              Especialidad
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-center">
            <p>Desarrollo Full Stack</p>
          </CardContent>
        </Card>
      </div>

      {/* Habilidades con barras de progreso */}
      <Card>
        <CardHeader>
          <CardTitle>Habilidades Técnicas</CardTitle>
          <CardDescription>Nivel de experiencia en diferentes tecnologías</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-1.5">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tecnologías - Estilo de hexágonos */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Tecnologías Principales</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="text-center">
              <div className="w-20 h-20 mx-auto bg-blue-100 text-blue-800 flex items-center justify-center clip-hex">
                <span className="text-3xl">{tech.icon}</span>
              </div>
              <p className="mt-2 font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Proyectos - Estilo de tarjetas con sombras */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div
                className={`h-1 ${
                  project.status === "Completado"
                    ? "bg-green-500"
                    : project.status === "En desarrollo"
                      ? "bg-blue-500"
                      : "bg-gray-300"
                }`}
              ></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Completado"
                        ? "default"
                        : project.status === "En desarrollo"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Ver Proyecto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer con estilo corporativo */}
      <div className="bg-gray-100 p-4 rounded-lg text-center text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} Carlos López - Full Stack Developer</p>
        <p className="text-xs mt-1">Desarrollado con React, Next.js y Tailwind CSS</p>
      </div>

      {/* Estilos adicionales para el clip-path hexagonal */}
      <style jsx global>{`
        .clip-hex {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
  )
}
