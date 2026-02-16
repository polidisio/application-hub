import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad - ApplicationHub",
  description: "Política de privacidad de las aplicaciones de Polidisio",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 mb-8 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
          Volver
        </Link>

        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-8 shadow-lg">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            Política de Privacidad
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8">
            Última actualización: 16 de febrero de 2026
          </p>

          <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300">
            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                1. Introducción
              </h2>
              <p>
                Las aplicaciones desarrolladas por Polidisio respetan tu privacidad. 
                Esta política describe cómo recopilamos, usamos y protegemos tu información.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                2. Datos que recopilamos
              </h2>
              <p className="font-medium text-green-600 dark:text-green-400 mb-2">
                Nuestras aplicaciones NO recopilan ningún dato personal del usuario.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>No recopilamos información de identificación personal</li>
                <li>No usamos cookies</li>
                <li>No usamos analytics</li>
                <li>No accedemos a tu ubicación</li>
                <li>No compartimos datos con terceros</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                3. Datos que almacenamos
              </h2>
              <p>
                Todos los datos se almacenan <strong>exclusivamente en tu dispositivo</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Configuración de la app</li>
                <li>Contenido que tú decides guardar</li>
                <li>Preferencias personales</li>
              </ul>
              <p className="mt-2">
                Estos datos se eliminan si desinstalas la aplicación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                4. Permisos
              </h2>
              <p>
                Nuestras aplicaciones no requieren permisos especiales más allá del acceso 
                básico necesario para su funcionamiento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                5. Niños
              </h2>
              <p>
                Nuestras aplicaciones son aptas para todas las edades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                6. Cambios
              </h2>
              <p>
                Esta política puede actualizarse en futuras versiones de las aplicaciones.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                7. Contacto
              </h2>
              <p>Para preguntas sobre privacidad:</p>
              <ul className="list-disc list-inside space-y-1 mt-2">
                <li>Email: info@saraiba.eu</li>
                <li>Web: <a href="https://saraiba.eu" className="text-blue-600 hover:underline">https://saraiba.eu</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
