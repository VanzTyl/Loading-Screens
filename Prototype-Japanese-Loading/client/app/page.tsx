"use client";

import React, { useState, useEffect, useRef } from 'react';

/**
 * Interface for the life perspective theme.
 * Highly extendable for future customization.
 */
interface PerspectiveTheme {
  id: string;
  name: string;
  chapterLabel: string;
  textColor: string;
  subTextColor: string;
  backgroundGradient: string; // CSS gradient string
  glitchColor1: string; // Primary chromatic aberration
  glitchColor2: string; // Secondary chromatic aberration
  accentColor: string; // UI elements
  description: string; // Content text
  meaning: string; // The "Behind the Scenes" of the color choice
}

export default function App() {
  // Theme definitions - Expanded with new suggestions and specific "Meaning" data
  const themes: PerspectiveTheme[] = [
    {
      id: 'dark',
      name: 'Void',
      chapterLabel: 'CHAPTER_01: THE_VOID',
      textColor: '#ffffff',
      subTextColor: 'rgba(255, 255, 255, 0.4)',
      backgroundGradient: 'radial-gradient(circle at center, #1a1a1a 0%, #000000 100%)',
      glitchColor1: '#ff0000',
      glitchColor2: '#555555',
      accentColor: 'rgba(255, 255, 255, 0.3)',
      description: "Navigating through the silent years. The architecture of a void.",
      meaning: "Monochromatic tones represent a period of isolation and minimal sensory input, where focus was internal and quiet."
    },
    {
      id: 'melancholy',
      name: 'Rain',
      chapterLabel: 'CHAPTER_03: BLUE_HOUR',
      textColor: '#93c5fd', 
      subTextColor: 'rgba(147, 197, 253, 0.5)', 
      backgroundGradient: 'radial-gradient(circle at center, #1e3a8a 0%, #020617 100%)',
      glitchColor1: '#ffffff',
      glitchColor2: '#60a5fa',
      accentColor: '#3b82f6',
      description: "Finding beauty in the sadness. A quiet reflection on what was lost.",
      meaning: "Deep blues and cyan glitches simulate the atmosphere of a rainy twilight, reflecting emotional depth and processing."
    },
    {
      id: 'chaos',
      name: 'Static',
      chapterLabel: 'CHAPTER_04: DISRUPTION',
      textColor: '#facc15', 
      subTextColor: 'rgba(250, 204, 21, 0.5)', 
      backgroundGradient: 'radial-gradient(circle at center, #7f1d1d 0%, #000000 100%)',
      glitchColor1: '#f87171',
      glitchColor2: '#ffffff',
      accentColor: '#ef4444',
      description: "The noise became the music. Breaking down to build something new.",
      meaning: "Aggressive reds and high-contrast yellows mimic a system failure, representing a period of necessary but painful change."
    },
    {
      id: 'prosperous',
      name: 'Gold',
      chapterLabel: 'CHAPTER_05: ABUNDANCE',
      textColor: '#fef3c7', 
      subTextColor: 'rgba(251, 191, 36, 0.6)', 
      backgroundGradient: 'radial-gradient(circle at center, #451a03 0%, #000000 100%)',
      glitchColor1: '#fbbf24',
      glitchColor2: '#ffffff',
      accentColor: '#d97706',
      description: "Harvesting the fruits of persistence. Light through the golden gate.",
      meaning: "Amber and gold tones signify warmth, wealth, and the successful outcome of long-term efforts."
    },
    {
      id: 'growth',
      name: 'Root',
      chapterLabel: 'CHAPTER_07: ORGANIC_SYNC',
      textColor: '#ecfdf5', 
      subTextColor: 'rgba(52, 211, 153, 0.6)', 
      backgroundGradient: 'radial-gradient(circle at center, #064e3b 0%, #020617 100%)',
      glitchColor1: '#34d399',
      glitchColor2: '#ffffff',
      accentColor: '#10b981',
      description: "Returning to nature. The slow, steady pulse of personal evolution.",
      meaning: "Verdant greens represent healing, stability, and the re-establishment of a healthy personal foundation."
    },
    {
      id: 'awakening',
      name: 'Neon',
      chapterLabel: 'CHAPTER_09: AWAKENING',
      textColor: '#f0f9ff',
      subTextColor: 'rgba(56, 189, 248, 0.6)',
      backgroundGradient: 'radial-gradient(circle at center, #082f49 0%, #000000 100%)',
      glitchColor1: '#22d3ee',
      glitchColor2: '#818cf8',
      accentColor: '#0ea5e9',
      description: "The signal clarity is peak. Transitioning into the new paradigm.",
      meaning: "High-energy electric blues represent mental clarity, rapid learning, and the 'Aha!' moments of life."
    },
    {
      id: 'rebirth',
      name: 'Ash',
      chapterLabel: 'CHAPTER_10: REBIRTH',
      textColor: '#ffedd5', // Orange-50
      subTextColor: 'rgba(251, 146, 60, 0.6)', // Orange-400
      backgroundGradient: 'radial-gradient(circle at center, #431407 0%, #000000 100%)',
      glitchColor1: '#ea580c',
      glitchColor2: '#ffffff',
      accentColor: '#f97316',
      description: "Rising from the embers. The heat of a new beginning.",
      meaning: "Burnt oranges and charcoal backgrounds symbolize the process of transformation and emerging stronger from difficulty."
    },
    {
      id: 'ethereal',
      name: 'Dream',
      chapterLabel: 'CHAPTER_11: TRANSCENDENCE',
      textColor: '#f5f3ff', 
      subTextColor: 'rgba(196, 181, 253, 0.6)', 
      backgroundGradient: 'radial-gradient(circle at center, #4c1d95 0%, #000000 100%)',
      glitchColor1: '#c084fc',
      glitchColor2: '#ffffff',
      accentColor: '#8b5cf6',
      description: "Beyond the physical. Existing in the space between thoughts.",
      meaning: "Soft purples and deep violets signify the subconscious mind and the expansion of creative or spiritual horizons."
    },
    {
      id: 'digital',
      name: 'Code',
      chapterLabel: 'CHAPTER_12: VIRTUAL_SELF',
      textColor: '#dcfce7', // Green-100
      subTextColor: 'rgba(34, 197, 94, 0.7)', // Green-500
      backgroundGradient: 'radial-gradient(circle at center, #052e16 0%, #000000 100%)',
      glitchColor1: '#22c55e',
      glitchColor2: '#16a34a',
      accentColor: '#15803d',
      description: "Merging with the machine. Logic as a secondary heartbeat.",
      meaning: "Classic 'Matrix' greens represent technical mastery and the period where career and passion for technology aligned."
    }
  ];

  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [isGlitching, setIsGlitching] = useState(true);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [showMeaning, setShowMeaning] = useState(false);
  const frameRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentTheme = themes[currentThemeIndex];

  const createNoise = () => {
    if (!frameRef.current || !isGlitching) return;

    const block = document.createElement('div');
    block.className = 'noise-block';
    
    const w = Math.random() * 150 + 100;
    const h = Math.random() * 8 + 2;
    
    Object.assign(block.style, {
      position: 'absolute',
      background: currentTheme.textColor,
      opacity: '0.15',
      pointerEvents: 'none',
      zIndex: '50',
      width: `${w}px`,
      height: `${h}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
    });

    frameRef.current.appendChild(block);
    setTimeout(() => block.remove(), 80);
  };

  const startAnimation = () => {
    setIsGlitching(true);
    setIsThemeMenuOpen(false);
    setShowMeaning(false); // Reset meaning view on transition
    
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setIsGlitching(false);
    }, 2500);
  };

  const changeTheme = (index: number) => {
    setCurrentThemeIndex(index);
    startAnimation();
  };

  useEffect(() => {
    let noiseInterval: NodeJS.Timeout;
    if (isGlitching) {
      noiseInterval = setInterval(createNoise, 40);
    }
    return () => {
      if (noiseInterval) clearInterval(noiseInterval);
    };
  }, [isGlitching, currentThemeIndex]);

  useEffect(() => {
    startAnimation();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <main 
      ref={frameRef}
      style={{ background: '#000', backgroundImage: currentTheme.backgroundGradient }}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden font-sans text-white scanlines transition-all duration-1000"
    >
      <style>{`
        @keyframes glitch-anim {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }

        @keyframes main-glitch {
          0% { transform: skew(0deg); }
          5% { transform: skew(4deg); filter: blur(0px); }
          10% { transform: skew(-5deg); }
          15% { transform: skew(0deg); }
          95% { transform: skew(0deg); }
          98% { transform: skew(15deg) scaleY(1.3); filter: blur(3px); }
          100% { transform: skew(0deg); }
        }

        .glitch-text-layer::before,
        .glitch-text-layer::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .glitch-text-layer::before {
          color: ${currentTheme.glitchColor1};
          z-index: -1;
          animation: glitch-anim 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) both infinite;
        }

        .glitch-text-layer::after {
          color: ${currentTheme.glitchColor2};
          z-index: -2;
          animation: glitch-anim 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both infinite;
        }

        .scanlines::before {
          content: " ";
          display: block;
          position: absolute;
          top: 0; left: 0; bottom: 0; right: 0;
          background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.2) 50%), 
                      linear-gradient(90deg, rgba(255, 0, 0, 0.04), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.04));
          z-index: 40;
          background-size: 100% 3px, 4px 100%;
          pointer-events: none;
        }

        .noise-block {
          mix-blend-mode: overlay;
        }
      `}</style>

      {/* Top Interface Buttons */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-[60] flex flex-col items-center w-full px-4">
        <div className="flex gap-4">
          <button 
            onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md hover:border-white/60 transition-all active:scale-95"
            style={{ color: currentTheme.textColor }}
          >
            {isThemeMenuOpen ? 'CLOSE INTERFACE' : 'SELECT PERSPECTIVE'}
          </button>

          {!isGlitching && (
            <button 
              onClick={() => setShowMeaning(!showMeaning)}
              className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] bg-black/40 backdrop-blur-md hover:border-white/60 transition-all active:scale-95"
              style={{ 
                color: showMeaning ? '#000' : currentTheme.textColor,
                backgroundColor: showMeaning ? currentTheme.textColor : 'rgba(0,0,0,0.4)'
              }}
            >
              {showMeaning ? 'HIDE MEANING' : 'SHOW MEANING'}
            </button>
          )}
        </div>
        
        {isThemeMenuOpen && (
          <div className="mt-4 flex flex-wrap justify-center gap-2 animate-in fade-in slide-in-from-top-2 duration-300 max-w-2xl">
            {themes.map((theme, index) => (
              <button
                key={theme.id}
                onClick={() => changeTheme(index)}
                className={`px-4 py-1.5 text-[10px] uppercase tracking-widest border transition-all ${currentThemeIndex === index ? 'bg-white text-black border-white' : 'border-white/20 text-white/60 hover:border-white/50 bg-black/20'}`}
              >
                {theme.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Meaning Modal Overlay */}
      {showMeaning && !isGlitching && (
        <div className="absolute inset-0 z-[55] flex items-center justify-center p-6 bg-black/60 backdrop-blur-xl animate-in fade-in duration-500">
          <div className="max-w-xl text-center space-y-4">
            <h2 className="text-[10px] tracking-[0.5em] uppercase opacity-50" style={{ color: currentTheme.textColor }}>Theory & Intent</h2>
            <p className="text-xl md:text-3xl font-mono leading-tight tracking-tight" style={{ color: currentTheme.textColor }}>
              {currentTheme.meaning}
            </p>
            <div className="h-px w-12 mx-auto bg-white/20" />
            <button 
              onClick={() => setShowMeaning(false)}
              className="text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 transition-opacity"
            >
              [ Tap to close ]
            </button>
          </div>
        </div>
      )}

      {/* Screen Edge Decor */}
      <div 
        className="absolute top-0 left-0 w-full h-full border-[12px] pointer-events-none z-30 transition-all duration-1000" 
        style={{ borderColor: currentTheme.accentColor, opacity: 0.1 }}
      />
      
      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 z-30 transition-all duration-1000" style={{ borderColor: currentTheme.accentColor }} />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 z-30 transition-all duration-1000" style={{ borderColor: currentTheme.accentColor }} />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 z-30 transition-all duration-1000" style={{ borderColor: currentTheme.accentColor }} />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 z-30 transition-all duration-1000" style={{ borderColor: currentTheme.accentColor }} />

      {/* Status Label */}
      <div 
        className="absolute top-10 left-10 text-xs md:text-sm font-mono tracking-[0.2em] uppercase z-50 transition-all duration-1000"
        style={{ color: currentTheme.subTextColor }}
      >
        <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse" />
        {currentTheme.chapterLabel}
      </div>

      <div className="absolute bottom-10 left-10 text-[10px] font-mono uppercase z-50 transition-all duration-1000" style={{ color: currentTheme.subTextColor }}>
        P-00{currentThemeIndex + 1} // AUTH: VERIFIED
      </div>

      {/* Glitch Content Overlay */}
      <div className={`relative flex flex-col items-center z-20 transition-all duration-500 ${!isGlitching ? 'opacity-0 scale-110 blur-xl' : 'opacity-100 scale-100 blur-0'}`}>
        <div 
          className="relative text-7xl md:text-[12rem] font-black tracking-[1rem] md:tracking-[2rem] uppercase animate-[main-glitch_3s_linear_infinite]"
          style={{ color: currentTheme.textColor }}
        >
          <div className="glitch-text-layer relative z-10" data-text="状態">
            状態
          </div>
        </div>
        <div 
          className="mt-8 font-mono text-sm md:text-xl tracking-[0.6em] uppercase animate-pulse"
          style={{ color: currentTheme.subTextColor }}
        >
          [ State / Condition ]
        </div>
      </div>

      {/* Portfolio Content Reveal */}
      {!isGlitching && !showMeaning && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-1000 z-10">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-4xl md:text-8xl font-bold tracking-[0.1em] uppercase" style={{ color: currentTheme.textColor }}>
              {currentTheme.name}
            </h1>
            <div className="h-px w-48 mx-auto" style={{ backgroundColor: currentTheme.subTextColor }} />
            <p className="text-lg md:text-2xl font-mono leading-relaxed tracking-wide opacity-90 max-w-2xl mx-auto" style={{ color: currentTheme.textColor }}>
              {currentTheme.description}
            </p>
            
            <button 
              onClick={startAnimation}
              className="mt-16 bg-transparent border px-12 py-4 font-mono text-xs md:text-sm uppercase tracking-[4px] transition-all hover:bg-white hover:text-black active:scale-95"
              style={{ color: currentTheme.textColor, borderColor: currentTheme.subTextColor }}
            >
              Recalibrate
            </button>
          </div>
        </div>
      )}

      {/* Global Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none z-20" />
    </main>
  );
}