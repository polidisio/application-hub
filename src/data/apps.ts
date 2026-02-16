export type Category = "ios" | "mac" | "juego" | "desarrollo";

export interface App {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  howItWorks: string;
  howItWorksEn: string;
  howToUse?: string;
  howToUseEn?: string;
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
    descriptionEn: "Application to track your daily beverage consumption. Control your hydration or alcohol intake with ease.",
    features: [
      "Registro rápido de bebidas consumidas",
      "Historial de consumiciones",
      "Personalización de bebidas (nombre, emoji, precio)",
      "Datos almacenados exclusivamente en tu dispositivo",
      "Sin recopilación de datos personales",
      "Exportación e importación de datos"
    ],
    featuresEn: [
      "Quick logging of consumed beverages",
      "Consumption history",
      "Beverage customization (name, emoji, price)",
      "Data stored exclusively on your device",
      "No personal data collection",
      "Data export and import"
    ],
    howItWorks: "1. Añade las bebidas que consumes desde el botón +\n2. Cada entrada guarda: nombre, emoji, precio y fecha/hora\n3. Consulta el historial para ver tu consumo\n4. Configura tus preferencias en Ajustes\n5. Exporta tus datos cuando lo necesites",
    howItWorksEn: "1. Add the beverages you consume from the + button\n2. Each entry saves: name, emoji, price and date/time\n3. Check the history to see your consumption\n4. Configure your preferences in Settings\n5. Export your data when needed",
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
    howToUseEn: `🎯 What is DrinkTrack?
DrinkTrack is an app to track your daily beverage consumption (beers, soft drinks, water, etc.) and control how much you spend.

📱 Main Screen
- Beverage list: Shows all available beverages with their emoji
- Counter: Each beverage has + and - buttons to add or remove units
- Top totals: Shows total beverages consumed today and total cost
- "+" Button: Add a custom consumption

🔄 Each Beverage Functions
- + : Add one unit
- - : Remove one unit  
- Reset: Clear all consumptions of that beverage today

📊 History
Accessible from the history button in the top bar:
- Today's view: Consumptions for the current day
- Yesterday: Consumptions from the previous day
- Last 7 days: Weekly summary
- Charts: Visualization of consumption and spending per day

⚙️ Manage Beverages
From history you can access:
- Add new custom beverages
- Edit name, emoji, price and category
- Delete custom beverages`,
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
    descriptionEn: "Widget to monitor your Magic Mouse battery quickly and easily.",
    features: [
      "Monitoreo en tiempo real de la batería",
      "Widget para la pantalla de inicio",
      "Notificaciones de batería baja",
      "Diseño minimalista y eficiente",
      "Sin consumo excesivo de batería",
      "Compatible con todos los modelos de Magic Mouse"
    ],
    featuresEn: [
      "Real-time battery monitoring",
      "Home screen widget",
      "Low battery notifications",
      "Minimalist and efficient design",
      "Low battery consumption",
      "Compatible with all Magic Mouse models"
    ],
    howItWorks: "1. Instala la app en tu dispositivo iOS\n2. Añade el widget a tu pantalla de inicio\n3. El widget muestra automáticamente el nivel de batería\n4. Recibe notificaciones cuando la batería está baja\n5. Toca el widget para ver detalles adicionales",
    howItWorksEn: "1. Install the app on your iOS device\n2. Add the widget to your home screen\n3. The widget automatically shows the battery level\n4. Receive notifications when battery is low\n5. Tap the widget to see additional details",
    category: "ios",
    icon: "🪄",
    iconImage: "/icons/MagicMouseBattery.png",
  },
];

export const categoryLabels: Record<Category, string> = {
  ios: "iOS",
  mac: "Mac",
  juego: "Juego",
  desarrollo: "Desarrollo",
};
