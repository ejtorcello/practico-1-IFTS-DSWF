import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, GitBranch, MessageSquare, CheckCircle, Clock, Target } from "lucide-react"

export default function BitacoraPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bitácora del Proyecto</h1>
        <p className="text-xl text-gray-600">Documentación del proceso de trabajo en equipo y metodología utilizada</p>
      </div>

      {/* Información del proyecto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Información del Proyecto
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Detalles Generales:</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Nombre:</strong> TP Grupal - Aplicación React SPA
                </li>
                <li>
                  <strong>Duración:</strong> 21 días (5 mayo - 26 mayo)
                </li>
                <li>
                  <strong>Tecnología Principal:</strong> React + Next.js
                </li>
                <li>
                  <strong>Deployment:</strong> Vercel
                </li>
                <li>
                  <strong>Control de Versiones:</strong> GitHub
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Objetivos Cumplidos:</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">SPA con React Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Diseño responsive (3 breakpoints)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Componentización efectiva</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Consumo de datos JSON y API</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Deploy exitoso en Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Roles del equipo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            Roles y Responsabilidades
          </CardTitle>
          <CardDescription>Distribución de tareas y especialidades de cada integrante</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold">Juan Pérez - Coordinador & Frontend</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>• Coordinación general del proyecto</li>
                  <li>• Desarrollo de componentes React principales</li>
                  <li>• Configuración inicial del proyecto</li>
                  <li>• Revisión de código y merge de PRs</li>
                  <li>• Documentación técnica</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold">María García - Backend & APIs</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>• Integración con APIs externas</li>
                  <li>• Manejo de datos JSON locales</li>
                  <li>• Configuración de servicios externos</li>
                  <li>• Optimización de peticiones HTTP</li>
                  <li>• Testing de funcionalidades backend</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold">Carlos López - Full Stack & DevOps</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>• Configuración de GitHub y workflows</li>
                  <li>• Setup de deployment en Vercel</li>
                  <li>• Integración frontend-backend</li>
                  <li>• Optimización de performance</li>
                  <li>• Resolución de conflictos técnicos</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold">Ana Martínez - UI/UX & Documentación</h4>
                <ul className="text-sm text-gray-600 mt-1 space-y-1">
                  <li>• Diseño de interfaces y experiencia usuario</li>
                  <li>• Implementación de diseño responsive</li>
                  <li>• Creación de componentes UI reutilizables</li>
                  <li>• Documentación del proyecto</li>
                  <li>• Testing de usabilidad</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metodología de trabajo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="w-5 h-5" />
            Metodología de Trabajo
          </CardTitle>
          <CardDescription>Proceso y herramientas utilizadas para la colaboración efectiva</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Proceso de Desarrollo:</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Planificación Inicial</h5>
                    <p className="text-sm text-gray-600">Definición de arquitectura, división de tareas y cronograma</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Desarrollo en Paralelo</h5>
                    <p className="text-sm text-gray-600">
                      Trabajo simultáneo en diferentes features usando ramas de Git
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-purple-600">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Revisión y Testing</h5>
                    <p className="text-sm text-gray-600">Code review, testing manual y corrección de bugs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-orange-600">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Integración y Deploy</h5>
                    <p className="text-sm text-gray-600">Merge a main branch y deployment automático en Vercel</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Herramientas y Comunicación:</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span className="font-medium">Comunicación</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• Discord para reuniones diarias (15 min)</li>
                    <li>• WhatsApp para comunicación rápida</li>
                    <li>• GitHub Issues para tracking de bugs</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <GitBranch className="w-4 h-4" />
                    <span className="font-medium">Control de Versiones</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• Git Flow con ramas por feature</li>
                    <li>• Pull Requests obligatorios</li>
                    <li>• Code review antes de merge</li>
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">Organización</span>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 ml-6">
                    <li>• Sprints de 1 semana</li>
                    <li>• Reuniones de seguimiento cada 2 días</li>
                    <li>• Retrospectiva semanal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Timeline del proyecto */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Timeline del Proyecto
          </CardTitle>
          <CardDescription>Cronograma de desarrollo y principales hitos alcanzados</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Semana 1 (5-12 Mayo)</h4>
                  <Badge variant="secondary">Completado</Badge>
                </div>
                <p className="text-sm text-gray-600">Setup inicial, arquitectura, y desarrollo de componentes base</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Semana 2 (13-19 Mayo)</h4>
                  <Badge variant="secondary">Completado</Badge>
                </div>
                <p className="text-sm text-gray-600">Desarrollo de secciones principales y integración de datos</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">Semana 3 (20-26 Mayo)</h4>
                  <Badge variant="secondary">Completado</Badge>
                </div>
                <p className="text-sm text-gray-600">Testing, optimización, documentación y deployment final</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lecciones aprendidas */}
      <Card className="bg-blue-50">
        <CardHeader>
          <CardTitle>Lecciones Aprendidas y Reflexiones</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-green-700">Aspectos Positivos:</h4>
              <ul className="space-y-2 text-sm">
                <li>✅ Excelente comunicación y coordinación del equipo</li>
                <li>✅ División efectiva de responsabilidades por especialidad</li>
                <li>✅ Uso exitoso de herramientas de colaboración modernas</li>
                <li>✅ Implementación completa de todos los requisitos</li>
                <li>✅ Código limpio y bien documentado</li>
                <li>✅ Deploy exitoso sin problemas técnicos</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 text-orange-700">Áreas de Mejora:</h4>
              <ul className="space-y-2 text-sm">
                <li>🔄 Implementar testing automatizado desde el inicio</li>
                <li>🔄 Definir estándares de código más estrictos</li>
                <li>🔄 Usar herramientas de project management más robustas</li>
                <li>🔄 Planificar mejor los tiempos de integración</li>
                <li>🔄 Documentar decisiones arquitectónicas en tiempo real</li>
                <li>🔄 Implementar CI/CD más temprano en el proceso</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white rounded-lg">
            <h4 className="font-semibold mb-2">Conclusión:</h4>
            <p className="text-sm text-gray-700">
              El proyecto fue completado exitosamente cumpliendo todos los objetivos planteados. La metodología de
              trabajo colaborativo y la división clara de responsabilidades permitieron un desarrollo eficiente y de
              calidad. El equipo demostró capacidad para trabajar con tecnologías modernas y entregar un producto
              funcional y bien diseñado.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
