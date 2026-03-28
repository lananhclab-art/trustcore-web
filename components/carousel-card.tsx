import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';

interface CarouselCardProps {
  imageSrc: string;
  className?: string;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({
  imageSrc,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative flex-shrink-0 w-[280px] md:w-[320px] lg:w-[400px] aspect-[3/4.2] group",
        "rounded-3xl md:rounded-[36px] overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="TrustCore Lifestyle and technology usage scene"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 400px"
      />
      
      {/* Subtle Shadow Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
    </div>
  );
};
