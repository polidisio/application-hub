export default function Header() {
  return (
    <header className="py-12 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="text-4xl">🚀</span>
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            ApplicationHub
          </h1>
        </div>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Mis aplicaciones, juegos y desarrollos
        </p>
      </div>
    </header>
  );
}
