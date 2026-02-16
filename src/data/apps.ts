export type Category = "ios" | "mac" | "juego" | "desarrollo";

export interface App {
  id: string;
  name: string;
  description: string;
  features: string[];
  howItWorks: string;
  howToUse?: string;
  screenshots?: string[];
  category: Category;
  icon: string;
  iconImage?: string;
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
    howToUse: `🎯 ¿Qué es DrinkTrack?
DrinkTrack es una aplicación para rastrear tu consumo de bebidas diarias (cervezas, refrescos, agua, etc.) y controlar cuánto gastas.

📱 Pantalla Principal
- Lista de bebidas: Muestra todas las bebidas disponibles con su emoji
- Contador: Cada bebida tiene botones + y - para añadir o quitar unidades
- Totales superiores: Muestra el total de bebidas consumidas hoy y el coste total
- Botón "+": Añadir una consumición personalizada

🔄 Funciones de cada bebida
- + : Añadir una unidad
- - : Quitar una unidad  
- Reset : Borrar todas las consumiciones de esa bebida hoy

📊 Historial
Accesible desde el botón de historial en la barra superior:
- Vista de hoy: Consumiciones del día actual
- Ayer: Consumiciones del día anterior
- Últimos 7 días: Resumen semanal
- Gráficos: Visualización de consumo y gasto por día

⚙️ Gestionar Bebidas
Desde el historial puedes acceder a:
- Añadir nuevas bebidas personalizadas
- Editar nombre, emoji, precio y categoría
- Eliminar bebidas personalizadas`,
    screenshots: [
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.32.34.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.33.05.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.33.20.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.36.00.png"
    ],
    category: "ios",
    icon: "🍹",
    iconImage: "/icons/DrinkTrack.jpg",
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
