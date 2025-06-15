import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Home, Users, User, Database, Globe, BookOpen, Code } from "lucide-react"
import Link from "next/link"

const menuItems = [
  {
    title: "Presentación",
    url: "/",
    icon: Home,
  },
  {
    title: "Equipo",
    url: "/equipo",
    icon: Users,
  },
  {
    title: "Integrantes",
    icon: User,
    submenu: [
      { title: "Juan Pérez", url: "/integrante/juan" },
      { title: "María García", url: "/integrante/maria" },
      { title: "Carlos López", url: "/integrante/carlos" },
      { title: "Ana Martínez", url: "/integrante/ana" },
    ],
  },
  {
    title: "Datos JSON",
    url: "/datos-json",
    icon: Database,
  },
  {
    title: "API Espacial",
    url: "/api-externa",
    icon: Globe,
  },
  {
    title: "Bitácora",
    url: "/bitacora",
    icon: BookOpen,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          {/* Logo generado con IA - Esto es un placeholder, el equipo debería reemplazarlo con su propio logo */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-lg">Equipo React</h2>
            <p className="text-sm text-muted-foreground">TP Grupal 2024</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navegación</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  {item.submenu ? (
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium text-sidebar-foreground/70">
                        <item.icon className="w-4 h-4" />
                        {item.title}
                      </div>
                      <div className="ml-6 space-y-1">
                        {item.submenu.map((subitem) => (
                          <SidebarMenuButton key={subitem.title} asChild size="sm">
                            <Link href={subitem.url}>
                              <span>{subitem.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
