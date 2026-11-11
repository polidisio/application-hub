import Image from "next/image";
import { App } from "@/data/apps";

export default function AppIcon({ app, size = 56 }: { app: App; size?: number }) {
  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-[22%] bg-surface-2 flex items-center justify-center border border-line"
      style={{ width: size, height: size, fontSize: size * 0.5 }}
    >
      {app.iconImage ? (
        <Image src={app.iconImage} alt="" fill sizes={`${size}px`} className="object-contain" />
      ) : (
        <span aria-hidden>{app.icon}</span>
      )}
    </div>
  );
}
