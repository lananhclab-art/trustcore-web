import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

interface CarouselCardProps {
  imageSrc: string;
  quote: string;
  className?: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  imageSrc,
  quote,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] aspect-[3/4] group",
        "rounded-3xl overflow-hidden cursor-pointer",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="TrustCore user"
        fill
        unoptimized
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
      />
      
      {/* Gradient Overlay — only visible on hover */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        style={{ 
          background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 60%)' 
        }}
      />

      {/* Quote — slides up on hover, normal text (not italic) */}
      <div className="absolute bottom-0 left-0 right-0 p-lg md:p-xl z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        <p className="text-white/90 text-body-sm leading-snug">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </div>
  );
};
