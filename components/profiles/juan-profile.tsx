import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Laptop } from "lucide-react"

// Lista de habilidades para Juan
const skills = ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Git", "Redux", "Jest"]

// Tecnologías principales
const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Next.js", icon: "▲" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Git", icon: "📝" },
]

// Proyectos
const projects = [
  {
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico desarrollada con React y Node.js",
    tech: ["React", "Node.js", "MongoDB"],
    status: "Completado",
    link: "#",
  },
  {
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con funcionalidades colaborativas",
    tech: ["React", "TypeScript", "Firebase"],
    status: "En desarrollo",
    link: "#",
  },
  {
    title: "Portfolio Personal",
    description: "Sitio web personal con blog integrado y sistema de contacto",
    tech: ["Next.js", "Tailwind", "MDX"],
    status: "Completado",
    link: "#",
  },
]

export default function JuanProfile() {
  // Estilo minimalista y profesional con énfasis en código
  return (
    <div className="space-y-8 bg-slate-50 p-8 rounded-xl">
      {/* Header - Estilo minimalista con código */}
      <div className="flex flex-col items-center text-center space-y-4 mb-8">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
          <Code className="w-16 h-16 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Juan Pérez</h1>
          <p className="text-xl text-blue-600 font-mono">Frontend Developer & Coordinador</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600">
            Desarrollador frontend con 3 años de experiencia en React y tecnologías modernas. Apasionado por crear
            interfaces de usuario intuitivas y accesibles. Lidera equipos de desarrollo y coordina proyectos desde la
            concepción hasta el deployment.
          </p>
        </div>
        <div className="flex gap-3 mt-4">
          <Button variant="outline" size="sm" className="rounded-full">
            <Github className="w-4 h-4 mr-1" />
            GitHub
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Linkedin className="w-4 h-4 mr-1" />
            LinkedIn
          </Button>
          <Button variant="outline" size="sm" className="rounded-full">
            <Mail className="w-4 h-4 mr-1" />
            Email
          </Button>
        </div>
      </div>

      {/* Información personal - Estilo de código */}
      <div className="bg-slate-900 text-white p-6 rounded-lg font-mono text-sm">
        <div className="mb-4">
          <span className="text-blue-400">const</span> <span className="text-yellow-300">developer</span>{" "}
          <span className="text-blue-400">=</span> {"{"}
        </div>
        <div className="ml-6">
          <div>
            <span className="text-green-400">name:</span> <span className="text-orange-300">"Juan Pérez"</span>,
          </div>
          <div>
            <span className="text-green-400">location:</span>{" "}
            <span className="text-orange-300">"Buenos Aires, Argentina"</span>,
          </div>
          <div>
            <span className="text-green-400">experience:</span> <span className="text-orange-300">"3 años"</span>,
          </div>
          <div>
            <span className="text-green-400">role:</span>{" "}
            <span className="text-orange-300">"Frontend Developer & Coordinador"</span>,
          </div>
          <div>
            <span className="text-green-400">interests:</span> [<span className="text-orange-300">"UI/UX"</span>,{" "}
            <span className="text-orange-300">"Optimización"</span>,{" "}
            <span className="text-orange-300">"Accesibilidad"</span>],
          </div>
        </div>
        <div>{"};"}</div>
      </div>

      {/* Tecnologías - Estilo de tarjetas con sombras */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Terminal className="mr-2" /> Tecnologías Principales
        </h2>
        <div className="grid grid-cols-5 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl mb-2">{tech.icon}</div>
              <div className="font-medium">{tech.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades - Estilo de código */}
      <div>
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Laptop className="mr-2" /> Habilidades
        </h2>
        <div className="bg-slate-900 p-4 rounded-lg">
          <code className="text-green-400 font-mono">
            const skills = [
            <div className="ml-4 flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span key={skill} className="text-orange-300">
                  "{skill}"{index < skills.length - 1 ? "," : ""}
                </span>
              ))}
            </div>
            ];
          </code>
        </div>
      </div>

      {/* Proyectos - Estilo de tarjetas con bordes */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 border-blue-200 hover:border-blue-500 transition-colors">
              <CardHeader className="bg-blue-50">
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
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <p className="text-gray-600 text-sm">{project.description}</p>
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

      {/* Footer con estilo de código */}
      <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-sm text-center">
        <code>// Desarrollado con React y Next.js por Juan Pérez - {new Date().getFullYear()}</code>
      </div>
    </div>
  )
}
