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
  website?: string;
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
    name: "MyMouseBattery",
    description: "Menu bar app para monitorear la batería del Magic Mouse y Magic Keyboard en macOS.",
    descriptionEn: "Menu bar app to monitor your Magic Mouse and Magic Keyboard battery on macOS.",
    features: [
      "Monitoreo en tiempo real de la batería del Magic Mouse y Magic Keyboard",
      "Menú bar con indicador visual del nivel de batería",
      "Notificaciones cuando la batería baja del umbral configurado",
      "Configuración editable del umbral de notificación (5-50%)",
      "Diseño minimalista y eficiente"
    ],
    featuresEn: [
      "Real-time battery monitoring for Magic Mouse and Magic Keyboard",
      "Menu bar with visual battery level indicator",
      "Notifications when battery drops below configured threshold",
      "Editable notification threshold setting (5-50%)",
      "Minimalist and efficient design"
    ],
    howItWorks: "1. Descarga e instala la app en tu Mac\n2. La app aparece como un icono en la barra de menú\n3. Haz clic para ver los niveles de batería de los dispositivos conectados\n4. Configura el umbral de notificación en Configuración > Notificación de batería baja",
    howItWorksEn: "1. Download and install the app on your Mac\n2. The app appears as an icon in the menu bar\n3. Click to see battery levels of connected devices\n4. Configure the notification threshold in Settings > Low battery notification",
    howToUse: "- La app aparece como un icono en la barra de menú\n- Haz clic para ver los niveles de batería de los dispositivos conectados\n- Configura el umbral de notificación en Configuración > Notificación de batería baja\n- El umbral de notificación se puede ajustar entre 5% y 50%",
    howToUseEn: "- The app appears as an icon in the menu bar\n- Click to see battery levels of connected devices\n- Configure the notification threshold in Settings > Low battery notification\n- The notification threshold can be adjusted between 5% and 50%",
    screenshots: [
      "/images/mymousebattery/image1.png",
      "/images/mymousebattery/image2.png",
      "/images/mymousebattery/image3.png"
    ],
    category: "mac",
    icon: "🖱️",
    iconImage: "/icons/MyMouseBattery.png",
  },
  {
    id: "daily-quotes",
    name: "Daily Quotes",
    description: "Página web con citas diarias del día con estética retro de Windows 95/98 WordPad.",
    descriptionEn: "Daily quotes website with Windows 95/98 WordPad retro aesthetic.",
    features: [
      "Diseño retro estilo Windows 95/98",
      "Citas diarias automáticas",
      "Estética WordPad de los 90s",
      "Despliegue automático en Vercel",
      "Tecnología web simple (HTML, CSS, JS)"
    ],
    featuresEn: [
      "Retro Windows 95/98 design",
      "Automatic daily quotes",
      "90s WordPad aesthetic",
      "Automatic deployment on Vercel",
      "Simple web technology (HTML, CSS, JS)"
    ],
    howItWorks: "1. Abre la web en tu navegador\n2. La cita del día se muestra automáticamente\n3. Disfruta de una nueva cita cada día\n4. Siéntete libre de añadir más citas al código fuente",
    howItWorksEn: "1. Open the website in your browser\n2. The quote of the day is displayed automatically\n3. Enjoy a new quote every day\n4. Feel free to add more quotes to the source code",
    website: "https://daily-quotes.saraiba.eu/",
    category: "desarrollo",
    icon: "📝",
  },
];

export const categoryLabels: Record<Category, string> = {
  ios: "iOS",
  mac: "Mac",
  juego: "Juego",
  desarrollo: "Desarrollo",
};
