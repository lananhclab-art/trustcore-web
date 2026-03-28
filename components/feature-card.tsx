"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { Text } from './ui/text';
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
        'hover:shadow-lg hover:-translate-y-1',
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
            sizes="(max-width: 768px) 100vw, (max-width: 1240px) 50vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </>
      )}

      {/* ── Content wrapper ── */}
      <div className="relative z-10 flex flex-col h-full p-10 md:p-12">
        {/* Top block */}
        <div className="flex-none">
          <Text
            variant={isFullWidth ? "heading-h3" : "heading-h5"}
            as="h3"
            color={isDark ? "inverse" : "primary"}
            className="mb-sm"
          >
            {title}
          </Text>

          <Text
            variant="body-sm"
            color={isDark ? "inverse" : "secondary"}
            className={cn("max-w-[380px]", isDark && "opacity-70")}
          >
            {description}
          </Text>

          {buttonText && !buttonAtBottom && (
            <div className="mt-xl">
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
        <div className="flex-1 relative w-full min-h-[40px] mt-md">
          {children}
        </div>

        {/* Button if pinned at bottom */}
        {buttonText && buttonAtBottom && (
          <div className="flex-none mt-auto pt-xl">
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
