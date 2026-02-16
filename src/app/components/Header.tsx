import Image from "next/image";

export default function Header() {
  return (
    <header className="py-16 px-4 relative z-10">
      <div className="max-w-5xl mx-auto text-center">
        <div className="glass rounded-3xl p-8 inline-block mb-6 animate-float">
          <div className="relative w-24 h-24 mx-auto">
            <Image
              src="/ApplicationHub.png"
              alt="ApplicationHub"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          <span className="gradient-text">ApplicationHub</span>
        </h1>
        
        <p className="text-xl text-zinc-300 max-w-xl mx-auto">
          Mis aplicaciones, juegos y desarrollos
        </p>
        
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow" />
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse-glow" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </header>
  );
}
