"use client";

import Image from "next/image";
import { useState } from "react";

export default function AnimatedImage({
  src,
  alt,
  delay,
  priority
}: {
  src: string;
  alt: string;
  delay: number;
  priority: boolean;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div 
      className={`relative w-full max-w-5xl ${isLoaded ? "animate-slide-down" : "opacity-0"}`}
      style={isLoaded ? { animationDelay: `${delay}s` } : {}}
    >
      <Image 
        src={src} 
        alt={alt}
        width={1600}
        height={1200}
        className="w-full h-auto object-contain shadow-sm bg-gray-50"
        priority={priority}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
}
