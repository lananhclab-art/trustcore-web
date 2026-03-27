"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { Button } from './ui/button';

interface FeatureCardProps {
  title: string;
  description: string;
  variant?: 'white' | 'dark' | 'image';
  imageSrc?: string;
  imageAlt?: string;
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary';
  buttonAtBottom?: boolean;
  className?: string;
  children?: React.ReactNode;
  isFullWidth?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  variant = 'white',
  imageSrc,
  imageAlt = 'Feature visual',
  buttonText,
  buttonVariant = 'secondary',
  buttonAtBottom = false,
  className,
  children,
  isFullWidth = false,
}) => {
  const isDark = variant === 'dark' || variant === 'image';

  return (
    <div
      className={cn(
        'relative rounded-3xl overflow-hidden flex flex-col border transition-all duration-500 ease-out group',
        // Hover State: Deep shadow + uplift
        'hover:shadow-lg hover:-translate-y-1',
        // Variant Styles
        variant === 'white' && 'bg-white border-border-default hover:border-text-brand/20',
        variant === 'dark'  && 'bg-bg-inverse text-white border-transparent',
        variant === 'image' && 'bg-bg-inverse text-white border-transparent',
        isFullWidth ? 'min-h-[460px]' : 'min-h-[440px]',
        className,
      )}
    >
      {/* Background image (image variant) */}
      {variant === 'image' && imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          {/* Subtle Dark Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </>
      )}

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col h-full p-10 md:p-12">
        {/* Top block */}
        <div className="flex-none">
          <h3
            className={cn(
              'font-bold leading-tight mb-3 tracking-[-0.5px]',
              isFullWidth ? 'text-[28px] md:text-[36px]' : 'text-[20px] md:text-[24px]',
            )}
          >
            {title}
          </h3>
          <p
            className={cn(
              'text-[15px] md:text-[16px] leading-relaxed max-w-[380px]',
              isDark ? 'text-white/70' : 'text-[#64748B]',
            )}
          >
            {description}
          </p>

          {/* Button if not pinned at bottom */}
          {buttonText && !buttonAtBottom && (
            <div className="mt-8">
              <Button 
                variant={buttonVariant} 
                size="md" 
                className="rounded-full px-7"
              >
                {buttonText}
              </Button>
            </div>
          )}
        </div>

        {/* Middle: Graphics / Children */}
        <div className="flex-1 relative w-full min-h-[40px] mt-4">
          {children}
        </div>

        {/* Button if pinned at bottom */}
        {buttonText && buttonAtBottom && (
          <div className="flex-none mt-auto pt-8">
            <Button 
              variant={buttonVariant} 
              size="md" 
              className="rounded-full px-7"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeatureCard;
