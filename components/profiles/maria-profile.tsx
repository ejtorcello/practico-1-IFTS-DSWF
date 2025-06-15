import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Github, Linkedin, Mail, Database, Server, Code, Terminal } from "lucide-react"

// Lista de habilidades para María
const skills = ["Node.js", "Express", "MongoDB", "PostgreSQL", "API REST", "Docker", "AWS", "Python", "SQL", "Redis"]

// Tecnologías principales
const technologies = [
  { name: "Node.js", icon: "🟢" },
  { name: "Express", icon: "🚀" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Docker", icon: "🐳" },
]

// Proyectos
const projects = [
  {
    title: "API de Gestión de Usuarios",
    description: "API RESTful para manejo de autenticación y perfiles de usuario",
    tech: ["Node.js", "Express", "JWT"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Sistema de Inventario",
    description: "Backend para sistema de gestión de inventario en tiempo real",
    tech: ["Node.js", "MongoDB", "Socket.io"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Microservicios de Pagos",
    description: "Arquitectura de microservicios para procesamiento de pagos",
    tech: ["Node.js", "Docker", "Redis"],
    status: "Planificado",
    link: "#",
  },
]

export default function MariaProfile() {
  // Estilo técnico con enfoque en backend y datos
  return (
    <div className="space-y-8">
      {/* Header - Estilo técnico con terminal */}
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="ml-4 text-xs text-gray-400">bash ~ terminal</div>
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-blue-400">$</span> whoami
          </div>
          <div>María García</div>
          <div>
            <span className="text-blue-400">$</span> cat role.txt
          </div>
          <div>Backend Developer</div>
          <div>
            <span className="text-blue-400">$</span> cat location.txt
          </div>
          <div>Córdoba, Argentina</div>
          <div>
            <span className="text-blue-400">$</span> cat experience.txt
          </div>
          <div>4 años</div>
          <div className="animate-pulse">
            <span className="text-blue-400">$</span> _
          </div>
        </div>
      </div>

      {/* Bio - Estilo de tarjeta con borde verde */}
      <Card className="border-l-4 border-green-500">
        <CardHeader>
          <CardTitle>Sobre mí</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">
            Desarrolladora backend especializada en Node.js y arquitectura de APIs. Con experiencia en bases de datos
            relacionales y no relacionales. Enfocada en crear sistemas escalables y seguros.
          </p>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" size="sm">
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </Button>
          <Button variant="outline" size="sm">
            <Linkedin className="w-4 h-4 mr-1" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm">
            <Mail className="w-4 h-4 mr-1" />
            Email
          </Button>
        </CardFooter>
      </Card>

      {/* Tabs para organizar contenido */}
      <Tabs defaultValue="technologies" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="technologies">Tecnologías</TabsTrigger>
          <TabsTrigger value="skills">Habilidades</TabsTrigger>
          <TabsTrigger value="projects">Proyectos</TabsTrigger>
        </TabsList>

        {/* Tecnologías */}
        <TabsContent value="technologies" className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Server className="mr-2" /> Tecnologías Principales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg border border-green-200 text-center"
              >
                <div className="text-4xl mb-2">{tech.icon}</div>
                <div className="font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Habilidades */}
        <TabsContent value="skills">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Terminal className="mr-2" /> Habilidades Técnicas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-black text-green-400 p-3 rounded-md font-mono text-center flex items-center justify-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Proyectos */}
        <TabsContent value="projects">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Database className="mr-2" /> Proyectos Destacados
          </h2>
          <div className="space-y-4">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-400 to-teal-500"></div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{project.title}</CardTitle>
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
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Diagrama de arquitectura - Estilo técnico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Code className="mr-2" /> Arquitectura Preferida
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 p-4 rounded-lg font-mono text-sm overflow-auto">
            <pre className="text-xs md:text-sm">
              {`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│             │     │             │     │             │
│  Frontend   │────▶│   API       │────▶│  Database   │
│  (React)    │     │  (Node.js)  │     │ (MongoDB)   │
│             │     │             │     │             │
└─────────────┘     └─────────────┘     └─────────────┘
                           │
                           ▼
                    ┌─────────────┐
                    │             │
                    │  Services   │
                    │ (Microserv.)│
                    │             │
                    └─────────────┘
              `}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Footer con estilo de terminal */}
      <div className="bg-black text-green-400 p-3 rounded-lg font-mono text-xs text-center">
        <code>/* María García - Backend Developer - {new Date().getFullYear()} */</code>
      </div>
    </div>
  )
}
