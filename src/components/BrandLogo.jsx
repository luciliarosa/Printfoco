import React from 'react';

/**
 * Símbolo Oficial Printfoco:
 * O "Foco de Memórias" + Faísca Festiva
 * 4 cantoneiras minimalistas (foco/enquadramento de tela) com a estrela radiante no centro.
 */
export function BrandSymbol({ className = "w-5 h-5 sm:w-6 sm:h-6", color = "currentColor", starColor = "#c5a880" }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* 4 Cantoneiras de Enquadramento */}
      <path 
        d="M 8 14 V 10 C 8 8.895 8.895 8 10 8 H 14" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 26 8 H 30 C 31.105 8 32 8.895 32 10 V 14" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 8 26 V 30 C 8 31.105 8.895 32 10 32 H 14" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 26 32 H 30 C 31.105 32 32 31.105 32 30 V 26" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />

      {/* Faísca / Estrela Radiante de 4 pontas */}
      <path 
        d="M 20 11.5 C 20 16 16 20 11.5 20 C 16 20 20 24 20 28.5 C 20 24 24 20 28.5 20 C 24 20 20 16 20 11.5 Z" 
        fill={starColor} 
      />

      {/* Pontos de luz */}
      <circle cx="27" cy="13" r="1.2" fill={starColor} opacity="0.8" />
      <circle cx="13" cy="27" r="1.2" fill={starColor} opacity="0.8" />
    </svg>
  );
}

/**
 * Logotipo Completo Responsivo
 */
export default function BrandLogo({ 
  className = "", 
  variant = "dark", 
  size = "md",
  showSubtitle = true 
}) {
  const isLight = variant === "light";
  
  const textColor = isLight ? "text-white" : "text-[#1c1b1a]";
  const goldColor = "#c5a880";
  const subColor = isLight ? "text-[#ebe6dc]/80" : "text-[#9f825b]";
  const boxBg = isLight ? "bg-[#ffffff]/10 border-[#ffffff]/20" : "bg-[#ffffff] border-[#ebe6dc]";

  const symbolSizes = {
    sm: "w-4 h-4 sm:w-5 sm:h-5",
    md: "w-5 h-5 sm:w-6 sm:h-6",
    lg: "w-6 h-6 sm:w-8 sm:h-8"
  };

  const titleSizes = {
    sm: "text-base sm:text-lg",
    md: "text-lg sm:text-xl md:text-2xl",
    lg: "text-xl sm:text-2xl md:text-3xl"
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* Box do Ícone com tamanho fluido */}
      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 shadow-xs group-hover:scale-105 group-hover:border-[#c5a880] ${boxBg}`}>
        <BrandSymbol 
          className={symbolSizes[size] || "w-5 h-5 sm:w-6 sm:h-6"} 
          color={isLight ? "#ffffff" : "#1c1b1a"} 
          starColor={goldColor} 
        />
      </div>

      {/* Tipografia */}
      <div className="flex flex-col min-w-0">
        <span className={`font-brand tracking-widest font-bold leading-none truncate ${titleSizes[size]} ${textColor}`}>
          PRINT<span className="text-[#c5a880]">FOCO</span>
        </span>
        {showSubtitle && (
          <span className={`text-[8.5px] sm:text-[9.5px] tracking-[0.18em] sm:tracking-[0.24em] uppercase -mt-0.5 font-semibold truncate ${subColor}`}>
            Design Digital & Memórias
          </span>
        )}
      </div>
    </div>
  );
}
