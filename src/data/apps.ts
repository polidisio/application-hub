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
  screenshots?: string[];
  screenshotsEn?: string[];
  category: Category;
  icon: string;
  iconImage?: string;
  website?: string;
  appStore?: string;
  privacyUrl?: string;
}

export const apps: App[] = [
  {
    id: "markdown-notes",
    name: "Markdown Notes",
    description: "Bloc de notas Markdown con editor con resaltado de sintaxis, vista dividida con previsualización, carpetas, etiquetas y sincronización con iCloud. Exporta a PDF, HTML, Markdown y texto.",
    descriptionEn: "Markdown notepad with a syntax-highlighting editor, split live preview, folders, tags and iCloud sync. Exports to PDF, HTML, Markdown and text.",
    features: [
      "Editor Markdown con syntax highlighting",
      "Vista dividida con previsualización",
      "Carpetas, etiquetas y búsqueda",
      "Exportación a PDF, HTML, Markdown y texto",
      "Importar archivos .md y .txt",
      "Tema claro/oscuro y 8 colores de acento",
      "Sincronización con iCloud",
      "iPhone y iPad"
    ],
    featuresEn: [
      "Markdown editor with syntax highlighting",
      "Split view with preview",
      "Folders, tags and search",
      "Export to PDF, HTML, Markdown and text",
      "Import .md and .txt files",
      "Light/dark theme and 8 accent colours",
      "iCloud sync",
      "iPhone and iPad"
    ],
    howItWorks: "1. Crea una nueva nota o selecciona una existente\n2. Escribe en Markdown con syntax highlighting\n3. Usa el panel de preview para ver el resultado en tiempo real\n4. Organiza tus notas en carpetas y etiquetas\n5. Exporta tus notas a PDF, HTML o DOCX\n6. Activa iCloud para sincronizar entre dispositivos",
    howItWorksEn: "1. Create a new note or select an existing one\n2. Write in Markdown with syntax highlighting\n3. Use the preview panel to see real-time results\n4. Organize your notes into folders and tags\n5. Export your notes to PDF, HTML, or DOCX\n6. Enable iCloud to sync across devices",
    category: "ios",
    icon: "📝",
    iconImage: "/icons/MarkdownNotes.jpg",
  },
  {
    id: "flashcard-study",
    name: "ThinkDeck Study",
    description: "App iOS para estudiar flashcards con sistema de repetición espaciada, diseño glassmorphism y soporte multilingüe.",
    descriptionEn: "iOS app for studying flashcards with spaced repetition system, glassmorphism design, and multilingual support.",
    features: [
      "Sistema de Repetición Espaciada (SRS) para optimizar el aprendizaje",
      "Crear, editar y organizar mazos de tarjetas",
      "Diseño Glassmorphism con colores personalizables",
      "Importar mazos desde archivos CSV y Excel",
      "Estadísticas de progreso (nivel, precisión, correctas/incorrectas)",
      "Modos de estudio: Todas las tarjetas y Para hoy (pendientes primero)",
      "Multilingüe: inglés, español, francés y alemán",
      "Compatible con iPhone y iPad"
    ],
    featuresEn: [
      "Spaced Repetition System (SRS) to optimize learning",
      "Create, edit and organize flashcard decks",
      "Glassmorphism design with customizable colors",
      "Import decks from CSV and Excel files",
      "Progress statistics (level, precision, correct/incorrect)",
      "Study modes: All cards and Due Today (due cards first)",
      "Multilingual: English, Spanish, French and German",
      "Compatible with iPhone and iPad"
    ],
    howItWorks: "1. Crea un mazo con nombre y color personalizado\n2. Añade tarjetas con pregunta (anverso) y respuesta (reverso)\n3. Inicia una sesión de estudio y gira la tarjeta para ver la respuesta\n4. Marca cada tarjeta como correcta o incorrecta\n5. El sistema SRS programa las tarjetas para revisión óptima\n6. Importa tus propios mazos desde Excel o CSV\n7. Consulta las estadísticas para ver tu progreso",
    howItWorksEn: "1. Create a deck with name and custom color\n2. Add cards with question (front) and answer (back)\n3. Start a study session and flip the card to reveal the answer\n4. Mark each card as correct or incorrect\n5. The SRS system schedules cards for optimal review\n6. Import your own decks from Excel or CSV\n7. Check statistics to track your progress",
    category: "ios",
    icon: "🧠",
    iconImage: "/icons/flashcard-study.png",
    website: "https://github.com/polidisio/flashcard-study",
  },
  {
    id: "drinktrack",
    name: "MyBarTrack",
    description: "Contador de bebidas con control de gasto: apunta lo que tomas con un toque, consulta el historial y vigila tu presupuesto. Con widget y Apple Watch.",
    descriptionEn: "Drink counter with spending control: log what you have with one tap, check your history and keep an eye on your budget. With widget and Apple Watch.",
    features: [
      "Registro rápido de bebidas con un toque",
      "Gasto acumulado y presupuesto semanal o mensual",
      "Historial con gráficas de 7, 30 o 90 días",
      "Bebidas personalizables (nombre, emoji, precio, categoría)",
      "Widget de pantalla de inicio y app para Apple Watch",
      "Exportación a CSV e importación de bebidas",
      "Datos solo en tu dispositivo; analítica anónima opcional"
    ],
    featuresEn: [
      "Quick drink logging with one tap",
      "Running spending and a weekly or monthly budget",
      "History with 7, 30 or 90-day charts",
      "Customisable drinks (name, emoji, price, category)",
      "Home Screen widget and Apple Watch app",
      "CSV export and drink import",
      "Data stays on your device; optional anonymous analytics"
    ],
    howItWorks: "1. Toca + en una bebida para apuntarla, o usa Añadir Consumición para indicar cantidad, precio y notas\n2. Consulta el contador y el coste en la pantalla principal\n3. Define un presupuesto en Ajustes y sigue su barra de progreso\n4. Revisa el historial y las gráficas\n5. Exporta tu historial a CSV cuando lo necesites",
    howItWorksEn: "1. Tap + on a drink to log it, or use Add Drink to set quantity, price and notes\n2. Check the counter and cost on the main screen\n3. Set a budget in Settings and follow its progress bar\n4. Review the history and charts\n5. Export your history to CSV when needed",
    screenshots: [
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.32.34.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.33.05.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.33.20.png",
      "/images/drinktrack/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-16 at 11.36.00.png"
    ],
    category: "ios",
    icon: "🍹",
    iconImage: "/icons/DrinkTrack.jpg",
    appStore: "https://apps.apple.com/es/app/mybartrack/id6759322912",
    privacyUrl: "/privacy/mybartrack",
  },
  {
    id: "magicmousebattery",
    name: "MyMouseBattery",
    description: "App de barra de menú para vigilar la batería de tu Magic Mouse, Magic Keyboard y Magic Trackpad en macOS.",
    descriptionEn: "Menu bar app to monitor your Magic Mouse, Magic Keyboard and Magic Trackpad battery on macOS.",
    features: [
      "Monitoreo de la batería del Magic Mouse, Magic Keyboard y Magic Trackpad (se actualiza cada 1-5 minutos)",
      "Historial de batería de los últimos 7 días por dispositivo",
      "Menú bar con indicador visual del nivel de batería",
      "Notificaciones cuando la batería baja del umbral configurado",
      "Configuración editable del umbral de notificación (5-50%)",
      "Diseño minimalista y eficiente"
    ],
    featuresEn: [
      "Battery monitoring for Magic Mouse, Magic Keyboard and Magic Trackpad (refreshes every 1-5 minutes)",
      "7-day battery history per device",
      "Menu bar with visual battery level indicator",
      "Notifications when battery drops below configured threshold",
      "Editable notification threshold setting (5-50%)",
      "Minimalist and efficient design"
    ],
    howItWorks: "1. Descarga e instala la app en tu Mac\n2. La app aparece como un icono en la barra de menú\n3. Haz clic para ver los niveles de batería de los dispositivos conectados\n4. Configura el umbral de notificación en Configuración > Notificación de batería baja",
    howItWorksEn: "1. Download and install the app on your Mac\n2. The app appears as an icon in the menu bar\n3. Click to see battery levels of connected devices\n4. Configure the notification threshold in Settings > Low battery notification",
    screenshots: [
      "/images/mymousebattery/image1.png",
      "/images/mymousebattery/image2.png",
      "/images/mymousebattery/image3.png"
    ],
    category: "mac",
    icon: "🖱️",
    iconImage: "/icons/MyMouseBattery.png",
    appStore: "https://apps.apple.com/es/app/mymousebattery/id6759709827?mt=12",
  },
  {
    id: "daily-quotes",
    name: "Daily Quotes",
    description: "Web con una cita del día dentro de una ventana estilo WordPad de Windows 95/98. La cita cambia cada día según la fecha y se guarda en Notion.",
    descriptionEn: "Website showing a daily quote in a Windows 95/98 WordPad-style window. The quote changes each day based on the date and is saved to Notion.",
    features: [
      "Diseño retro Windows 95/98 / WordPad",
      "Cita diaria según la fecha (sin azar)",
      "Español o inglés según tu navegador",
      "Guarda la cita del día en Notion",
      "HTML, CSS y JavaScript simples"
    ],
    featuresEn: [
      "Retro Windows 95/98 WordPad design",
      "Daily quote based on the date (no randomness)",
      "Spanish or English from your browser language",
      "Saves the quote of the day to Notion",
      "Plain HTML, CSS and JavaScript"
    ],
    howItWorks: "1. Abre la web en tu navegador\n2. La cita del día se muestra automáticamente\n3. Disfruta de una nueva cita cada día\n4. Siéntete libre de añadir más citas al código fuente",
    howItWorksEn: "1. Open the website in your browser\n2. The quote of the day is displayed automatically\n3. Enjoy a new quote every day\n4. Feel free to add more quotes to the source code",
    website: "https://daily-quotes.saraiba.eu/",
    category: "desarrollo",
    icon: "📝",
  },
  {
    id: "apple-music-cli",
    name: "Apple Music CLI",
    description: "OpenClaw skill para controlar Apple Music en macOS usando AppleScript.",
    descriptionEn: "OpenClaw skill to control Apple Music on macOS using AppleScript.",
    features: [
      "Reproducir, pausar y alternar (play/pause/toggle)",
      "Siguiente y anterior",
      "Información de la pista actual (título, artista, álbum, duración)",
      "Volumen del sistema (subir, bajar, fijar 0-100)",
      "Reproducir playlists de usuario por nombre",
      "Búsqueda y reproducción por texto (experimental)"
    ],
    featuresEn: [
      "Play, pause and toggle",
      "Next and previous track",
      "Current track info (title, artist, album, duration)",
      "System volume (up, down, set 0-100)",
      "Play user playlists by name",
      "Search and play by text (experimental)"
    ],
    howItWorks: "1. Instala el skill via OpenClaw: openclaw skills add https://github.com/polidisio/apple-music-cli\n2. Usa los comandos: apple-music play, pause, next, status, volume up, etc.",
    howItWorksEn: "1. Install the skill via OpenClaw: openclaw skills add https://github.com/polidisio/apple-music-cli\n2. Use commands: apple-music play, pause, next, status, volume up, etc.",
    website: "https://github.com/polidisio/apple-music-cli",
    category: "desarrollo",
    icon: "🎵",
  },
  {
    id: "synctracers",
    name: "SyncTrackers",
    description: "App local-first que extrae datos de entrenamiento de Apple Health y los sincroniza entre tus dispositivos.",
    descriptionEn: "Local-first app that extracts Apple Health workout data and syncs across your devices.",
    features: [
      "Lee workouts de Apple Health / HealthKit",
      "Guarda en SQLite local (SwiftData)",
      "Sincronización privada entre dispositivos",
      "Exportación a JSON con un tap",
      "Sincronización automática al abrir, con botón y en background"
    ],
    featuresEn: [
      "Reads workouts from Apple Health / HealthKit",
      "Stores in local SQLite (SwiftData)",
      "Private sync between devices",
      "Export to JSON with one tap",
      "Auto sync on open, button sync and background"
    ],
    howItWorks: "1. Abre la app y concede permisos de HealthKit\n2. La app lee automáticamente tus workouts de Apple Health\n3. Los datos se guardan en SQLite local\n4. Sincroniza entre dispositivos usando iCloud privado\n5. Exporta tus datos a JSON cuando lo necesites",
    howItWorksEn: "1. Open the app and grant HealthKit permissions\n2. The app automatically reads your workouts from Apple Health\n3. Data is stored in local SQLite\n4. Sync between devices using private iCloud\n5. Export your data to JSON when needed",
    category: "ios",
    icon: "💪",
    iconImage: "/icons/SyncTrackers.jpg",
    website: "https://github.com/polidisio/syncsalud",
    privacyUrl: "/privacy/synctracers",
  },
  {
    id: "trackhobbies",
    name: "TrackHobbies",
    description: "Tu diario personal de ocio: apunta los libros que lees, las series que ves y los juegos que juegas, y sigue tu progreso. Sin cuentas.",
    descriptionEn: "Your personal leisure journal: log the books you read, the series you watch and the games you play, and track your progress. No accounts.",
    features: [
      "Libros, series y videojuegos en tres pestañas",
      "Estados: pendiente, sin empezar, en progreso, completado y archivado",
      "Búsqueda con portadas y descripciones automáticas, o alta manual",
      "Progreso por páginas, temporadas/episodios u horas jugadas",
      "Nota de 0 a 5 con cuartos de estrella y reseña personal",
      "Estadísticas de tu colección",
      "Sincronización con iCloud entre iPhone y iPad",
      "Importa de Goodreads (CSV), exporta a CSV y copia de seguridad JSON"
    ],
    featuresEn: [
      "Books, series and games in three tabs",
      "Statuses: wishlist, not started, in progress, completed and archived",
      "Search with automatic covers and descriptions, or manual entry",
      "Progress by pages, seasons/episodes or hours played",
      "0 to 5 rating in quarter-star steps and personal review",
      "Collection statistics",
      "iCloud sync between iPhone and iPad",
      "Import from Goodreads (CSV), export to CSV and JSON backup"
    ],
    howItWorks: "1. Abre la app: no hay registro ni cuentas\n2. Busca un título y la app rellena portada y datos, o añádelo a mano\n3. Actualiza tu progreso, fechas, nota y reseña\n4. Consulta tus estadísticas y filtra tu biblioteca\n5. Tus datos se guardan en el dispositivo y se sincronizan con tu iCloud privado",
    howItWorksEn: "1. Open the app: no sign-up or accounts\n2. Search a title and the app fills in cover and details, or add it manually\n3. Update your progress, dates, rating and review\n4. Check your statistics and filter your library\n5. Data is stored on your device and synced via your private iCloud",
    screenshots: [
      "/images/trackhobbies/01_library.png",
      "/images/trackhobbies/02_search.png",
      "/images/trackhobbies/03_detail_progress.png",
      "/images/trackhobbies/05_completed_ratings.png",
      "/images/trackhobbies/08_stats.png",
    ],
    category: "ios",
    icon: "📚",
    iconImage: "/icons/TrackHobbies.png",
    website: "https://github.com/polidisio/TrackHobbies",
    privacyUrl: "/privacy/trackhobbies",
  },
  {
    id: "streamaura",
    name: "StreamAura",
    description: "Reproductor para tus propias fuentes: listas IPTV (M3U/M3U8), cuentas Xtream y la biblioteca de tu NAS o servidor de medios. Para iPhone, iPad y Apple TV. Sin cuentas ni analíticas.",
    descriptionEn: "A player for your own sources: IPTV playlists (M3U/M3U8), Xtream accounts and the library on your NAS or media server. For iPhone, iPad and Apple TV. No accounts, no analytics.",
    features: [
      "Listas M3U y M3U8 por dirección web o archivo (en Apple TV, solo por dirección), y cuentas Xtream Codes",
      "Canales por grupos, búsqueda y favoritos",
      "Películas y series de Xtream con categorías, temporadas y continuar viendo",
      "Biblioteca propia por DLNA, SMB, NFS o WebDAV, o con tu servidor Jellyfin o Plex",
      "Series agrupadas por temporada a partir de los nombres de archivos y carpetas",
      "Carátulas generadas automáticamente, sin depender de servicios externos",
      "Selección de audio y subtítulos con el motor VLC, con soporte para MKV y muchos formatos",
      "Contraseñas en el llavero de Apple; sin cuentas, publicidad ni analíticas"
    ],
    featuresEn: [
      "M3U and M3U8 playlists by web address or file (on Apple TV, web address only), and Xtream Codes accounts",
      "Channels by group, search and favorites",
      "Xtream movies and series with categories, seasons and continue watching",
      "Your own library over DLNA, SMB, NFS or WebDAV, or with your Jellyfin or Plex server",
      "Series grouped by season from file and folder names",
      "Automatically generated artwork, with no reliance on external services",
      "Audio and subtitle selection with the VLC engine, with MKV and many other formats supported",
      "Passwords in the Apple Keychain; no accounts, ads or analytics"
    ],
    howItWorks: "1. Abre la app: no hay registro ni cuentas\n2. Añade una fuente: una lista IPTV o un servidor de medios de tu red\n3. En SMB, NFS o WebDAV, elige las carpetas de tu NAS que quieres explorar\n4. Navega por canales, películas y series y pulsa para reproducir\n5. Tus datos se quedan en tu dispositivo",
    howItWorksEn: "1. Open the app: no sign-up or accounts\n2. Add a source: an IPTV playlist or a media server on your network\n3. For SMB, NFS or WebDAV, choose the folders on your NAS you want to browse\n4. Browse channels, movies and series and tap to play\n5. Your data stays on your device",
    screenshots: [
      "/images/streamaura/es-1.jpg",
      "/images/streamaura/es-2.jpg",
      "/images/streamaura/es-3.jpg",
      "/images/streamaura/es-4.jpg",
    ],
    screenshotsEn: [
      "/images/streamaura/en-1.jpg",
      "/images/streamaura/en-2.jpg",
      "/images/streamaura/en-3.jpg",
      "/images/streamaura/en-4.jpg",
    ],
    category: "ios",
    icon: "📺",
    iconImage: "/icons/StreamAura.png",
    privacyUrl: "/privacy/streamaura",
  },
  {
    id: "noduscli",
    name: "NodusCli",
    description: "Cliente SSH para iPhone y iPad con terminal real (xterm-256color), pestañas, búsqueda en el historial y claves en el llavero de Apple. Sin cuentas ni analíticas.",
    descriptionEn: "An SSH client for iPhone and iPad with a real terminal (xterm-256color), tabs, scrollback search and keys kept in the Apple Keychain. No accounts, no analytics.",
    features: [
      "Terminal interactiva real (xterm-256color): vim, htop, tmux y apps ncurses funcionan como en el escritorio",
      "Barra de teclas extra con Esc, Ctrl, Tab, flechas y F1-F12",
      "Varias pestañas: mantén varios servidores abiertos a la vez",
      "Búsqueda en el historial (scrollback) de la terminal",
      "Servidores guardados: conecta con un toque",
      "Acceso con contraseña o clave privada (ed25519 OpenSSH o ECDSA PEM, sin passphrase)",
      "Verificación de la clave del servidor como PuTTY: confianza en el primer uso y aviso si cambia",
      "Contraseñas y claves solo en el llavero de Apple; sin cuentas, publicidad ni analíticas"
    ],
    featuresEn: [
      "A real interactive terminal (xterm-256color): vim, htop, tmux and ncurses apps work like on the desktop",
      "Extra key bar with Esc, Ctrl, Tab, arrows and F1-F12",
      "Multiple tabs: keep several servers open at once",
      "Search the terminal scrollback",
      "Saved servers: connect with one tap",
      "Sign in with a password or a private key (OpenSSH ed25519 or PEM ECDSA, no passphrase)",
      "Host key verification like PuTTY: trust on first use, with a warning if it changes",
      "Passwords and keys only in the Apple Keychain; no accounts, ads or analytics"
    ],
    howItWorks: "1. Abre la app: no hay registro ni cuentas\n2. Pulsa + y añade un servidor: host, puerto, usuario y contraseña (opcional con clave)\n3. Opcional: importa tu clave privada SSH\n4. Toca el servidor para conectar y confirma la huella la primera vez\n5. Usa la terminal; abre más pestañas con +\n6. Tus datos se quedan en tu dispositivo",
    howItWorksEn: "1. Open the app: no sign-up or accounts\n2. Tap + and add a server: host, port, user and password (optional with a key)\n3. Optional: import your SSH private key\n4. Tap the server to connect and confirm the fingerprint the first time\n5. Use the terminal; open more tabs with +\n6. Your data stays on your device",
    category: "ios",
    icon: "💻",
    iconImage: "/icons/NodusCli.png",
    privacyUrl: "/privacy/noduscli",
  },
  {
    id: "filesizer",
    name: "FileSizer",
    description: "App nativa macOS para encontrar los archivos más grandes de una carpeta o volumen. Escaneo en segundo plano con filtros de tamaño y extensión, historial de ajustes y exportación a CSV o JSON. Interfaz solo en inglés.",
    descriptionEn: "Native macOS app to find the largest files in a folder or volume. Background scanning with size and extension filters, saved scan settings, and export to CSV or JSON. English-only interface.",
    features: [
      "Interfaz SwiftUI con tres columnas: configuración, resultados y detalle",
      "Escaneo en segundo plano con tamaño mínimo, extensiones y límite de resultados",
      "Búsqueda instantánea y ordenación por nombre, tamaño o fecha",
      "Mover a la Papelera, revelar en Finder y vista previa QuickLook",
      "Historial de ajustes de escaneo para repetir búsquedas",
      "Exportación a CSV o JSON",
      "Exclusión automática de carpetas de caché y desarrollo",
      "Sin red ni analíticas"
    ],
    featuresEn: [
      "Three-column SwiftUI interface: configuration, results and detail",
      "Background scanning with minimum size, extensions and result limit",
      "Instant search and sorting by name, size or date",
      "Move to Trash, reveal in Finder and QuickLook preview",
      "Scan settings history to repeat searches",
      "Export to CSV or JSON",
      "Automatic exclusion of cache and developer folders",
      "No network or analytics"
    ],
    howItWorks: "1. Selecciona una carpeta o volumen para escanear\n2. El escaneo analiza todos los archivos de forma async\n3. Ve los resultados ordenados por tamaño\n4. Gestiona archivos: mover a papelera, revelar en Finder\n5. Guarda el historial para repetir búsquedas\n6. Exporta los resultados a CSV o JSON",
    howItWorksEn: "1. Select a folder or volume to scan\n2. The scan analyzes all files asynchronously\n3. View results sorted by size\n4. Manage files: move to trash, reveal in Finder\n5. Save history to repeat searches\n6. Export results to CSV or JSON",
    category: "mac",
    icon: "📁",
    iconImage: "/icons/FileSizer.jpg",
    website: "https://github.com/polidisio/filesizer",
    screenshots: [
      "/images/filesizer/filesizer-1.png",
      "/images/filesizer/filesizer-2.png",
      "/images/filesizer/filesizer-3.png",
      "/images/filesizer/filesizer-4.png",
    ],
  },
  {
    id: "llmbox",
    name: "LLMBox",
    description: "Cliente de chat para tu servidor Ollama. Elige modelo, conversa y guarda el historial de tus conversaciones en el Mac. Solo habla con la URL que configures.",
    descriptionEn: "Chat client for your Ollama server. Pick a model, chat, and keep your conversation history on your Mac. It only talks to the URL you configure.",
    features: [
      "Conecta con tu servidor Ollama (red local o este Mac)",
      "Selector de modelos leídos del servidor",
      "Historial de conversaciones guardado en tu Mac",
      "Renombrar, eliminar y exportar chats a JSON",
      "Icono en la barra de menús con chats recientes",
      "Sin cuentas ni analítica"
    ],
    featuresEn: [
      "Connect to your Ollama server (local network or this Mac)",
      "Model picker populated from the server",
      "Conversation history stored on your Mac",
      "Rename, delete and export chats to JSON",
      "Menu bar icon with recent chats",
      "No accounts, no analytics"
    ],
    howItWorks: "1. En Settings escribe la URL de Ollama y pulsa Reconnect\n2. Elige el modelo\n3. Escribe y espera la respuesta\n4. Renombra, elimina o exporta tus chats",
    howItWorksEn: "1. In Settings type your Ollama URL and tap Reconnect\n2. Pick the model\n3. Type and wait for the reply\n4. Rename, delete or export your chats",
    category: "mac",
    icon: "🤖",
    iconImage: "/icons/LLMBox.png",
    website: "https://github.com/polidisio/LocalAIChat",
    screenshots: [
      "/images/llmbox/llmbox-1.png",
      "/images/llmbox/llmbox-2.png",
      "/images/llmbox/llmbox-3.png",
    ],
  },
  {
    id: "qiresizer",
    name: "QIResizer",
    description: "Redimensiona imágenes por lotes en macOS con presets de ancho y conversión a JPEG, PNG o HEIC. Interfaz solo en inglés.",
    descriptionEn: "Batch image resizer for macOS with width presets and conversion to JPEG, PNG or HEIC. English-only interface.",
    features: [
      "Arrastra y suelta o Browse Files, varias imágenes a la vez",
      "11 presets de ancho (480p a 4K, smartphone, tablet, escritorio) y ancho personalizado",
      "Bloqueo de proporción (Lock Aspect Ratio)",
      "Salida JPEG, PNG o HEIC",
      "Calidad ajustable (10-100%) para JPEG/HEIC",
      "Nombre personalizado y carpeta de destino a elegir",
      "Cancelar el lote y estadísticas de ahorro",
      "Tema Sistema, Claro u Oscuro"
    ],
    featuresEn: [
      "Drag & drop or Browse Files, multiple images at once",
      "11 width presets (480p to 4K, smartphone, tablet, desktop) plus custom width",
      "Aspect ratio lock (Lock Aspect Ratio)",
      "JPEG, PNG or HEIC output",
      "Adjustable quality (10-100%) for JPEG/HEIC",
      "Custom file name and destination folder of your choice",
      "Cancel a batch, and space-saving statistics",
      "System, Light or Dark theme"
    ],
    howItWorks: "1. Arrastra imágenes al área de drop o usa Browse Files\n2. Selecciona un preset o introduce un ancho personalizado\n3. Elige el formato de salida (JPEG, PNG, HEIC)\n4. Ajusta la calidad si usas JPEG o HEIC\n5. Haz clic en Resize Now y elige la carpeta de destino\n6. Ve las estadísticas de ahorro de espacio",
    howItWorksEn: "1. Drag images to the drop area or use Browse Files\n2. Select a preset or enter a custom width\n3. Choose the output format (JPEG, PNG, HEIC)\n4. Adjust quality if using JPEG or HEIC\n5. Click Resize Now and choose the destination folder\n6. View space saving statistics",
    category: "mac",
    icon: "🖼️",
    iconImage: "/icons/QIResizer.png",
    website: "https://github.com/polidisio/QIResizer",
    screenshots: [
      "/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.20.09.png",
      "/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.20.36.png",
      "/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.21.00.png",
      "/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.21.18.png",
      "/images/qiresizer/Captura de pantalla 2026-05-20 a las 13.21.29.png",
    ],
  },
  {
    id: "exiftool-cli",
    name: "exiftool-cli",
    description: "Herramienta de línea de comandos para ver, exportar (JSON o CSV) y eliminar metadatos EXIF de fotos JPEG y TIFF. Los PNG se aceptan para eliminar, pero no se leen. Todo en local.",
    descriptionEn: "Command-line tool to view, export (JSON or CSV) and remove EXIF metadata from JPEG and TIFF photos. PNG is accepted for removal but not read. Everything runs locally.",
    features: [
      "Menú interactivo (exiftool-cli interactive)",
      "Ver metadatos EXIF en tabla (cámara, fecha, GPS, exposición)",
      "Exportar a JSON o CSV",
      "Crear copias sin EXIF, con opción de conservar el GPS",
      "Procesamiento por lotes de carpetas",
      "Subcarpetas con --recursive"
    ],
    featuresEn: [
      "Interactive menu (exiftool-cli interactive)",
      "View EXIF metadata as a table (camera, date, GPS, exposure)",
      "Export to JSON or CSV",
      "Create copies without EXIF, with an option to keep GPS",
      "Batch processing of folders",
      "Subfolders with --recursive"
    ],
    howItWorks: "1. Ejecuta exiftool-cli interactive para el menú interactivo\n2. Usa extract para ver metadatos en formato tabla\n3. Usa export para guardar en JSON o CSV\n4. Usa remove para crear una copia sin metadatos\n5. Usa batch para procesar carpetas completas",
    howItWorksEn: "1. Run exiftool-cli interactive for the interactive menu\n2. Use extract to view metadata in table format\n3. Use export to save to JSON or CSV\n4. Use remove to create a copy without metadata\n5. Use batch to process entire folders",
    category: "desarrollo",
    icon: "🛠️",
    website: "https://github.com/polidisio/exiftool-cli",
  },
];

export const categoryLabels: Record<Category, string> = {
  ios: "iOS",
  mac: "Mac",
  juego: "Juego",
  desarrollo: "Desarrollo",
};
