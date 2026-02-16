export type Category = "ios" | "mac" | "juego" | "desarrollo";

export interface App {
  id: string;
  name: string;
  description: string;
  features: string[];
  howItWorks: string;
  category: Category;
  icon: string;
}

export const apps: App[] = [
  {
    id: "drinktrack",
    name: "DrinkTrack",
    description: "Aplicación para seguimiento de consumo de bebidas. Controla tu hidratación o consumo de alcohol con facilidad.",
    features: [
      "Registro rápido de bebidas consumidas",
      "Historial de consumiciones",
      "Personalización de bebidas (nombre, emoji, precio)",
      "Datos almacenados exclusivamente en tu dispositivo",
      "Sin recopilación de datos personales",
      "Exportación e importación de datos"
    ],
    howItWorks: "1. Añade las bebidas que consumes desde el botón +\n2. Cada entrada guarda: nombre, emoji, precio y fecha/hora\n3. Consulta el historial para ver tu consumo\n4. Configura tus preferencias en Ajustes\n5. Exporta tus datos cuando lo necesites",
    category: "ios",
    icon: "🍹",
  },
  {
    id: "magicmousebattery",
    name: "MagicMouseBattery",
    description: "Widget para monitorear la batería de tu Magic Mouse de forma rápida y sencilla.",
    features: [
      "Monitoreo en tiempo real de la batería",
      "Widget para la pantalla de inicio",
      "Notificaciones de batería baja",
      "Diseño minimalista y eficiente",
      "Sin consumo excesivo de batería",
      "Compatible con todos los modelos de Magic Mouse"
    ],
    howItWorks: "1. Instala la app en tu dispositivo iOS\n2. Añade el widget a tu pantalla de inicio\n3. El widget muestra automáticamente el nivel de batería\n4. Recibe notificaciones cuando la batería está baja\n5. Toca el widget para ver detalles adicionales",
    category: "ios",
    icon: "🪄",
  },
];

export const categoryLabels: Record<Category, string> = {
  ios: "iOS",
  mac: "Mac",
  juego: "Juego",
  desarrollo: "Desarrollo",
};
