import { notFound } from "next/navigation"
import JuanProfile from "@/components/profiles/juan-profile"
import MariaProfile from "@/components/profiles/maria-profile"
import CarlosProfile from "@/components/profiles/carlos-profile"
import AnaProfile from "@/components/profiles/ana-profile"

// Datos básicos de los miembros (mantenemos esto para referencia)
const membersData = {
  juan: {
    name: "Juan Pérez",
    role: "Frontend Developer & Coordinador",
  },
  maria: {
    name: "María García",
    role: "Backend Developer",
  },
  carlos: {
    name: "Carlos López",
    role: "Full Stack Developer",
  },
  ana: {
    name: "Ana Martínez",
    role: "UI/UX Designer & Developer",
  },
}

export default function IntegrantePage({ params }: { params: { id: string } }) {
  // Verificar que el ID es válido
  if (!membersData[params.id as keyof typeof membersData]) {
    notFound()
  }

  // Renderizar el componente específico según el ID
  switch (params.id) {
    case "juan":
      return <JuanProfile />
    case "maria":
      return <MariaProfile />
    case "carlos":
      return <CarlosProfile />
    case "ana":
      return <AnaProfile />
    default:
      return notFound()
  }
}
