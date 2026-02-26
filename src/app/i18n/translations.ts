export const translations = {
  es: {
    header: {
      subtitle: "Mis aplicaciones, juegos y desarrollos",
    },
    common: {
      features: "Características",
      howItWorks: "Cómo funciona",
      userManual: "Manual de Usuario",
      screenshots: "Capturas de Pantalla",
      privacyPolicy: "Política de Privacidad",
      viewMore: "Ver más →",
      close: "Cerrar",
      website: "Visitar Web",
      appStore: "App Store",
    },
    privacy: {
      title: "Política de Privacidad",
      lastUpdate: "Última actualización",
      introduction: "Introducción",
      introductionText: "Las aplicaciones desarrolladas por Polidisio respetan tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información.",
      dataCollected: "Datos que recopilamos",
      dataCollectedText: "Nuestras aplicaciones NO recopilan ningún dato personal del usuario.",
      dataCollectedList: [
        "No recopilamos información de identificación personal",
        "No usamos cookies",
        "No usamos analytics",
        "No accedemos a tu ubicación",
        "No compartimos datos con terceros"
      ],
      storedData: "Datos que almacenamos",
      storedDataText: "Todos los datos se almacenan exclusivamente en tu dispositivo:",
      storedDataList: [
        "Configuración de la app",
        "Contenido que tú decides guardar",
        "Preferencias personales"
      ],
      storedDataNote: "Estos datos se eliminan si desinstalas la aplicación.",
      permissions: "Permisos",
      permissionsText: "Nuestras aplicaciones no requieren permisos especiales más allá del acceso básico necesario para su funcionamiento.",
      children: "Niños",
      childrenText: "Nuestras aplicaciones son aptas para todas las edades.",
      changes: "Cambios",
      changesText: "Esta política puede actualizarse en futuras versiones de las aplicaciones.",
      contact: "Contacto",
      contactText: "Para preguntas sobre privacidad:",
      contactEmail: "Email",
      contactWeb: "Web",
      back: "Volver",
    },
  },
  en: {
    header: {
      subtitle: "My apps, games and developments",
    },
    common: {
      features: "Features",
      howItWorks: "How it works",
      userManual: "User Manual",
      screenshots: "Screenshots",
      privacyPolicy: "Privacy Policy",
      viewMore: "View more →",
      close: "Close",
      website: "Visit Website",
      appStore: "App Store",
    },
    privacy: {
      title: "Privacy Policy",
      lastUpdate: "Last updated",
      introduction: "Introduction",
      introductionText: "Apps developed by Polidisio respect your privacy. This policy describes how we collect, use, and protect your information.",
      dataCollected: "Data We Collect",
      dataCollectedText: "Our apps do NOT collect any personal user data.",
      dataCollectedList: [
        "We do not collect personally identifiable information",
        "We do not use cookies",
        "We do not use analytics",
        "We do not access your location",
        "We do not share data with third parties"
      ],
      storedData: "Data We Store",
      storedDataText: "All data is stored exclusively on your device:",
      storedDataList: [
        "App configuration",
        "Content you choose to save",
        "Personal preferences"
      ],
      storedDataNote: "This data is deleted if you uninstall the app.",
      permissions: "Permissions",
      permissionsText: "Our apps do not require special permissions beyond basic access needed for functionality.",
      children: "Children",
      childrenText: "Our apps are suitable for all ages.",
      changes: "Changes",
      changesText: "This policy may be updated in future versions of the apps.",
      contact: "Contact",
      contactText: "For privacy questions:",
      contactEmail: "Email",
      contactWeb: "Web",
      back: "Back",
    },
  },
};

export type Locale = "es" | "en";
export type TranslationKeys = typeof translations.es;
