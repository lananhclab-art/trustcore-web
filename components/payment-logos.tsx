import React from 'react';
import Image from 'next/image';

const LOGOS = [
  { name: 'Mastercard', src: '/images/what-we-build/Mastercard.svg' },
  { name: 'Apple Pay', src: '/images/what-we-build/apple-pay.svg' },
  { name: 'Google Pay', src: '/images/what-we-build/google-pay.svg' },
  { name: 'Visa', src: '/images/what-we-build/visa.svg' },
  { name: 'Bitcoin', src: '/images/what-we-build/bitcoin.svg' }, 
  { name: 'Shop Pay', src: '/images/what-we-build/shop-pay.svg' },
  { name: 'American Express', src: '/images/what-we-build/american-express.svg' },
  { name: 'PayPal', src: '/images/what-we-build/paypal.svg' },
];

export const PaymentLogos = () => {
  return (
    <div className="w-full pb-2">
      <div className="grid grid-cols-4 gap-[4px] w-full">
        {LOGOS.map((logo) => (
          <div 
            key={logo.name} 
            className="relative w-full aspect-square bg-[#FFF] rounded-[14.5px] flex items-center justify-center shadow-[1.212px_1.212px_4.847px_rgba(71,85,105,0.10)] transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-[60%] h-[60%]">
              <Image 
                src={logo.src} 
                alt={logo.name} 
                fill 
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
