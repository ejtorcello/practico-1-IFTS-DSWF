import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    id: "juan",
    name: "Juan Pérez",
    role: "Frontend Developer & Coordinador",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["React", "TypeScript", "CSS", "Figma"],
    description:
      "Lidera el desarrollo frontend y coordina las tareas del equipo. Especialista en React y experiencia de usuario.",
    responsibilities: ["Coordinación del equipo", "Desarrollo de componentes React", "Diseño de interfaces"],
  },
  {
    id: "maria",
    name: "María García",
    role: "Backend Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Node.js", "Express", "MongoDB", "API REST"],
    description: "Experta en desarrollo backend y arquitectura de APIs. Maneja la integración con servicios externos.",
    responsibilities: ["Desarrollo de APIs", "Integración con servicios externos", "Gestión de datos"],
  },
  {
    id: "carlos",
    name: "Carlos López",
    role: "Full Stack Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["React", "Node.js", "PostgreSQL", "Git"],
    description:
      "Desarrollador full stack con experiencia en múltiples tecnologías. Especialista en integración frontend-backend.",
    responsibilities: ["Desarrollo full stack", "Integración de sistemas", "Control de versiones"],
  },
  {
    id: "ana",
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
    image: "/placeholder.svg?height=200&width=200",
    skills: ["Figma", "React", "Tailwind", "Responsive Design"],
    description:
      "Diseñadora y desarrolladora enfocada en experiencia de usuario. Crea interfaces intuitivas y atractivas.",
    responsibilities: ["Diseño UI/UX", "Prototipado", "Documentación del proyecto"],
  },
]

export default function EquipoPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nuestro Equipo</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Somos un equipo de 4 desarrolladores apasionados por crear aplicaciones web modernas y funcionales. Cada
          integrante aporta sus habilidades únicas para lograr un proyecto exitoso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-base font-medium text-blue-600">{member.role}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{member.description}</p>

              <div>
                <h4 className="font-semibold mb-2">Responsabilidades:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {member.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Habilidades:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/integrante/${member.id}`}>Ver Perfil Completo</Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle>Metodología de Trabajo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Organización:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Reuniones diarias de seguimiento</li>
                <li>División de tareas por especialidad</li>
                <li>Revisión de código en equipo</li>
                <li>Documentación continua del progreso</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Herramientas:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>GitHub para control de versiones</li>
                <li>Vercel para deployment</li>
                <li>Discord para comunicación</li>
                <li>Figma para diseño colaborativo</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
