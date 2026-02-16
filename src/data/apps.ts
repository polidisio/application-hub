export type Category = "ios" | "mac" | "juego" | "desarrollo";

export interface App {
  id: string;
  name: string;
  description: string;
  instructions: string;
  category: Category;
  icon: string;
  downloadUrl?: string;
  repoUrl?: string;
}

export const apps: App[] = [
  {
    id: "app-1",
    name: "Mi Primera App",
    description: "Una aplicación iOS innovadora",
    instructions: "Para usar esta aplicación, descárgala desde la App Store y sigue los pasos de configuración inicial.",
    category: "ios",
    icon: "📱",
    downloadUrl: "https://apps.apple.com",
  },
  {
    id: "app-2",
    name: "Productividad Pro",
    description: "App de productividad para Mac",
    instructions: "Descarga desde Mac App Store, instala y configura tus preferencias de trabajo.",
    category: "mac",
    icon: "💻",
    downloadUrl: "https://apps.apple.com",
  },
  {
    id: "app-3",
    name: "Aventura Espacial",
    description: "Juego de aventura espacial",
    instructions: "Instalar, crear perfil y comenzar a jugar. Controles: flechas para mover, espacio para acción.",
    category: "juego",
    icon: "🚀",
    downloadUrl: "https://apps.apple.com",
  },
  {
    id: "app-4",
    name: "API Manager",
    description: "Herramienta de desarrollo",
    instructions: "Clona el repositorio, ejecuta npm install y npm run dev. Documentación en el README.",
    category: "desarrollo",
    icon: "⚙️",
    repoUrl: "https://github.com",
  },
];

export const categoryLabels: Record<Category, string> = {
  ios: "iOS",
  mac: "Mac",
  juego: "Juego",
  desarrollo: "Desarrollo",
};
