import React, { useState, useEffect, useRef, useMemo } from 'react';

const dropAnim = 'transform transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]';
const popAnim = 'transform transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]';

function Strawberry({ className = '', delay = '0ms' }) {
  return (
    <div
      className={`relative h-11 w-10 drop-shadow-[0_5px_7px_rgba(127,29,29,0.3)] ${className}`}
      style={{ transitionDelay: delay }}
    >
      <svg viewBox="0 0 48 56" className="h-full w-full">
        <defs>
          <linearGradient id="strawberryFill" x1="12" y1="8" x2="38" y2="48" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fb7185" />
            <stop offset="0.48" stopColor="#ef4444" />
            <stop offset="1" stopColor="#9f1239" />
          </linearGradient>
        </defs>
        <path fill="url(#strawberryFill)" d="M24 4 C10 10, 2 22, 5 36 C8 50, 16 54, 24 54 C32 54, 40 50, 43 36 C46 22, 38 10, 24 4 Z" />
        <path fill="#7f1d1d" opacity="0.18" d="M29 10 C37 16, 42 26, 40 38 C38 48, 30 52, 24 54 C33 54, 43 48, 45 34 C47 22, 37 12, 29 10 Z" />
        <circle cx="15" cy="22" r="1.2" fill="#fde68a" />
        <circle cx="33" cy="24" r="1.2" fill="#fde68a" />
        <circle cx="13" cy="35" r="1.2" fill="#fde68a" />
        <circle cx="35" cy="37" r="1.2" fill="#fde68a" />
        <circle cx="24" cy="44" r="1.2" fill="#fde68a" />
        <circle cx="24" cy="28" r="1.2" fill="#fde68a" opacity="0.8" />
        <path fill="none" stroke="#fff7ed" strokeLinecap="round" strokeWidth="3" opacity="0.38" d="M14 18 C11 24, 10 30, 12 36" />
      </svg>
    </div>
  );
}

function Candle({ className = '', delay = '0ms', isLit = true }) {
  return (
    <div
      className={`relative flex h-20 w-7 flex-col items-center ${className}`}
      style={{ transitionDelay: delay }}
    >
      {isLit ? (
        <div className="h-6 w-5 rotate-45 rounded-[70%_15%_70%_45%] bg-gradient-to-br from-yellow-200 via-amber-300 to-orange-500 shadow-[0_0_20px_rgba(251,191,36,0.95)] animate-flame" />
      ) : (
        <div className="h-6 w-5 flex items-center justify-center">
          <svg className="h-5 w-5 text-gray-300 animate-bounce opacity-70" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C10.9 2 10 2.9 10 4s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-3 5c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
      )}
      <div className="-mt-1 h-16 w-5 rounded-sm border border-rose-200 bg-white shadow-[inset_0_0_6px_rgba(244,114,182,0.18)]">
        <div className="h-full w-full bg-[repeating-linear-gradient(135deg,transparent_0_8px,#fb7185_8px_12px)]" />
      </div>
    </div>
  );
}

function HeartSprinkle({ color = '#ff7096', className = '' }) {
  return (
    <svg className={`w-3.5 h-3.5 drop-shadow-sm ${className}`} viewBox="0 0 32 29" fill={color}>
      <path d="M16 28.2C9.2 22.1 3 17.2 3 10.3C3 6.2 6.1 3 10 3C12.4 3 14.5 4.2 16 6.1C17.5 4.2 19.6 3 22 3C25.9 3 29 6.2 29 10.3C29 17.2 22.8 22.1 16 28.2Z" />
    </svg>
  );
}

function WhiteDog({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 600 600" className="w-full h-full overflow-visible drop-shadow-md">
        <path d="M300,180 C300,100 220,70 170,70 C90,70 50,130 50,210 C50,320 150,390 300,510 C450,390 550,320 550,210 C550,130 510,70 430,70 C380,70 300,100 300,180 Z" fill="#F8B8B8" stroke="#F08A8A" strokeWidth="6" />
        <path d="M150,250 C100,280 90,350 130,390 C170,430 220,420 240,390 C220,330 200,290 150,250 Z" fill="#EEEEEE" stroke="#333333" strokeWidth="5" />
        <path d="M450,250 C500,280 510,350 470,390 C430,430 380,420 360,390 C380,330 400,290 450,250 Z" fill="#EEEEEE" stroke="#333333" strokeWidth="5" />
        <path d="M220,380 L380,380 C390,410 395,480 380,520 C360,540 330,540 300,530 C270,540 240,540 220,520 C205,480 210,410 220,380 Z" fill="#EEEEEE" stroke="#333333" strokeWidth="5" />
        <ellipse cx="197" cy="432" rx="22" ry="27" fill="#EEEEEE" stroke="#333333" strokeWidth="4" />
        <ellipse cx="402" cy="432" rx="22" ry="27" fill="#EEEEEE" stroke="#333333" strokeWidth="4" />
        <ellipse cx="300" cy="305" rx="160" ry="125" fill="#EEEEEE" stroke="#333333" strokeWidth="5" />
        <ellipse cx="242" cy="312" rx="17" ry="27" fill="#444444" />
        <rect x="242" y="309" width="20" height="6" rx="3" fill="white" />
        <ellipse cx="357" cy="312" rx="17" ry="27" fill="#444444" />
        <rect x="357" y="309" width="20" height="6" rx="3" fill="white" />
        <ellipse cx="300" cy="330" rx="5" ry="5" fill="#333333" />
        <ellipse cx="207" cy="350" rx="27" ry="20" fill="#F7C9CF" opacity="0.9" />
        <ellipse cx="392" cy="350" rx="27" ry="20" fill="#F7C9CF" opacity="0.9" />
        <path d="M270,345 C285,360 315,360 330,345" stroke="#333333" strokeWidth="4" fill="none" />
        <path d="M295,350 C290,375 310,375 305,350 Z" fill="#F59AA8" stroke="#333333" strokeWidth="2" />
      </svg>
    </div>
  );
}

function CreamTier({ width, height, top, zIndex, stepReady, syrupReady, delay = '0ms', children }) {
  const sideGradient = `cakeSide-${width}`;
  const topGradient = `cakeTop-${width}`;

  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 ${dropAnim} ${
        stepReady ? 'translate-y-0 opacity-100' : '-translate-y-52 opacity-0'
      }`}
      style={{ width: `min(${width}px, 88vw)`, height: `${height}px`, top: top, zIndex: zIndex, transitionDelay: delay }}
    >
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 320 160" preserveAspectRatio="none">
        <defs>
          <linearGradient id={sideGradient} x1="80" y1="38" x2="240" y2="148" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff0cf" />
            <stop offset="0.48" stopColor="#d69652" />
            <stop offset="1" stopColor="#9a5a2a" />
          </linearGradient>
          <linearGradient id={topGradient} x1="96" y1="12" x2="230" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fffdf7" />
            <stop offset="0.58" stopColor="#ffe4b4" />
            <stop offset="1" stopColor="#d19555" />
          </linearGradient>
        </defs>
        <path fill={`url(#${sideGradient})`} d="M24 42C24 68 67 86 160 86C253 86 296 68 296 42L296 101C296 134 247 151 160 151C73 151 24 134 24 101Z" />
        <ellipse cx="160" cy="104" rx="136" ry="45" fill="#7c451f" opacity="0.16" />
        <path fill="#c37c3c" opacity="0.24" d="M49 92C84 110 124 118 170 116C220 114 258 101 289 84L289 99C254 122 210 134 160 134C107 134 69 121 49 103Z" />
        <ellipse cx="160" cy="42" rx="146" ry="38" fill="#fff8e8" />
        <ellipse cx="160" cy="45" rx="124" ry="29" fill={`url(#${topGradient})`} />
        <ellipse cx="160" cy="35" rx="96" ry="15" fill="#fffdf8" opacity="0.72" />
      </svg>

      <svg
        className={`absolute inset-0 h-full w-full overflow-visible transition-all duration-700 ease-out ${syrupReady ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
        viewBox="0 0 320 160" preserveAspectRatio="none" style={{ transformOrigin: 'center 44px' }}
      >
        <g className="drop-shadow-[0_5px_4px_rgba(40,15,10,0.3)]">
          <ellipse cx="160" cy="42" rx="145" ry="37" fill="#4a2116" />
          <path fill="#35150f" d="M 15 42 C 15 55, 25 70, 40 55 C 50 135, 90 135, 100 65 C 115 100, 140 100, 150 60 C 160 140, 195 140, 205 65 C 215 85, 235 85, 245 60 C 255 115, 285 115, 295 50 C 300 60, 305 50, 305 42 Z" />
          <ellipse cx="160" cy="40" rx="132" ry="31" fill="#5c2a1c" />
          <path fill="#4a2116" d="M 25 40 C 25 50, 32 60, 42 50 C 55 120, 80 120, 92 60 C 105 90, 130 90, 142 55 C 152 125, 182 125, 195 60 C 205 75, 225 75, 235 55 C 245 100, 270 100, 282 48 C 287 55, 295 45, 295 40 Z" />
        </g>
      </svg>
      <div className="absolute inset-x-0 top-[26%] z-20 flex items-center justify-center pointer-events-none">
        {children}
      </div>
    </div>
  );
}

function SyrupGlass({ show, pour }) {
  return (
    <div className={`absolute right-[-35px] top-[-30px] z-[60] h-40 w-36 transition-all duration-700 ease-out ${show ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`}>
      <div className={`absolute right-0 top-0 h-28 w-32 transition-all duration-700 ease-out origin-[center_60%] ${pour ? '-translate-x-12 translate-y-6 -rotate-[35deg]' : 'rotate-0'}`}>
        <svg viewBox="0 0 120 100" className="w-full h-full drop-shadow-[0_10px_15px_rgba(0,0,0,0.18)]">
          <defs>
            <linearGradient id="whiteCeramic" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f8f9fa" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <path d="M 85 45 C 125 40, 115 85, 80 85" fill="none" stroke="url(#whiteCeramic)" strokeWidth="12" strokeLinecap="round" />
          <path d="M 90 35 C 105 65, 85 95, 55 95 C 25 95, 10 65, 15 45 C 12 30, 2 20, 5 15 C 15 15, 25 25, 35 30 Z" fill="url(#whiteCeramic)" />
          <ellipse cx="60" cy="33" rx="30" ry="12" fill="#e2e8f0" />
          <ellipse cx="60" cy="34" rx="26" ry="9" fill="#4a2116" />
          <ellipse cx="59" cy="34" rx="22" ry="7" fill="#35150f" />
          <path d="M 35 30 C 25 25, 10 15, 5 15 C 12 25, 20 30, 30 33 Z" fill="#cbd5e1" />
          <path d="M 25 55 C 20 70, 30 85, 45 90" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        </svg>
      </div>
      <svg className={`absolute left-[-90px] top-[80px] h-[70px] w-24 origin-top transition-all duration-500 ease-in ${pour ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`} viewBox="0 0 60 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="syrupPour" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#35170f" />
            <stop offset="50%" stopColor="#5a2a1d" />
            <stop offset="100%" stopColor="#2c1008" />
          </linearGradient>
        </defs>
        <path d="M 30 0 C 40 35, 10 65, 20 100" fill="none" stroke="url(#syrupPour)" strokeWidth="8" strokeLinecap="round" className="drop-shadow-[0_2px_4px_rgba(74,36,24,0.4)]" />
        <path d="M 29 5 C 38 35, 12 65, 20 95" fill="none" stroke="#7c3a21" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      </svg>
    </div>
  );
}

function StarryBackground() {
  const stars = useMemo(() => {
    const generatedStars = [];
    let i = 0;
    while (generatedStars.length < 60) {
      const leftPos = Math.random() * 100;
      const topPos = Math.random() * 100;
      const isOverlappingText = topPos > 2 && topPos < 30 && leftPos > 10 && leftPos < 90;

      if (!isOverlappingText) {
        generatedStars.push({
          id: i++,
          left: `${leftPos}%`,
          top: `${topPos}%`,
          animationDelay: `${Math.random() * 4}s`,
          size: `${Math.random() * 3 + 1}px`,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
    }
    return generatedStars;
  }, []);

  const meteors = useMemo(() => Array.from({ length: 7 }).map((_, i) => ({
    id: `meteor-${i}`,
    left: `${Math.random() * 80 + 20}%`,
    top: `${Math.random() * 30}%`,
    animationDelay: `${Math.random() * 10}s`,
    duration: `${Math.random() * 4 + 4}s`,
  })), []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map(star => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size, opacity: star.opacity, animationDelay: star.animationDelay }}
        />
      ))}
      {meteors.map(meteor => (
        <div
          key={meteor.id}
          className="absolute h-[2px] rounded-full bg-gradient-to-r from-white via-white/80 to-transparent shadow-[0_0_8px_2px_rgba(255,255,255,0.5)] animate-meteor"
          style={{ left: meteor.left, top: meteor.top, animationDelay: meteor.animationDelay, animationDuration: meteor.duration }}
        />
      ))}
    </div>
  );
}

function Balloon({ color, showDelay, flyDelay, show, isFlying, type = 'oval', rotate = '0deg', scale = 1, startX = 0, endX = 0 }) {
  const renderBalloonShape = () => {
    if (type === 'heart') {
      return (
        <>
          <path d="M 50 100 C 10 70, 0 15, 25 10 C 40 7, 50 25, 50 30 C 50 25, 60 7, 75 10 C 100 15, 90 70, 50 100 Z" fill={color} />
          <ellipse cx="32" cy="30" rx="6" ry="12" fill="#ffffff" opacity="0.35" transform="rotate(-30 32 30)" />
        </>
      );
    } else if (type === 'star') {
      return (
        <>
          <polygon points="50,5 62,35 95,35 68,55 78,88 50,70 22,88 32,55 5,35 38,35" fill={color} />
          <path d="M 45 100 L 55 100 L 50 70 Z" fill={color} />
          <ellipse cx="38" cy="40" rx="4" ry="10" fill="#ffffff" opacity="0.35" transform="rotate(-30 38 40)" />
        </>
      );
    }
    return (
      <>
        <ellipse cx="50" cy="50" rx="42" ry="52" fill={color} />
        <path d="M 45 100 L 55 100 L 50 110 Z" fill={color} />
        <ellipse cx="32" cy="35" rx="10" ry="18" fill="#ffffff" opacity="0.35" transform="rotate(-30 32 35)" />
      </>
    );
  };

  return (
    <div className={`absolute bottom-0 left-1/2 origin-bottom`} style={{ zIndex: 10 }}>
      <div
        className={`transition-all duration-[5000ms] ease-in-out`}
        style={{
          transform: isFlying ? `translate(calc(-50% + ${endX}px), -150vh) scale(${scale})` : `translate(calc(-50% + ${startX}px), 0) scale(${scale})`,
          transitionDelay: flyDelay,
        }}
      >
        <div
          className={`transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)]`}
          style={{
            opacity: show ? 0.95 : 0,
            transform: show ? `rotate(${rotate})` : `rotate(${rotate}) translateY(40px) scale(0.5)`,
            transitionDelay: showDelay,
          }}
        >
          <div className="animate-float">
            <svg viewBox="0 0 100 160" className="w-16 h-auto drop-shadow-md origin-bottom animate-sway">
              <path d="M 50 160 Q 60 135 50 100" fill="none" stroke="#f1f5f9" strokeWidth="2" opacity="0.8"/>
              <path d="M 45 100 L 55 100 L 50 110 Z" fill={color} />
              {renderBalloonShape()}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeartLetter({ className = '' }) {
  return (
    <div className={`relative h-16 w-24 drop-shadow-[0_10px_15px_rgba(15,25,47,0.3)] ${className}`}>
      <svg viewBox="0 0 120 80" className="w-full h-full">
        <rect x="0" y="0" width="120" height="80" rx="6" fill="#f1f5f9" />
        <path d="M 0 80 L 120 80 L 60 35 Z" fill="#e2e8f0" />
        <path d="M 0 0 L 0 80 L 60 45 Z" fill="#cbd5e1" />
        <path d="M 120 0 L 120 80 L 60 45 Z" fill="#cbd5e1" />
        <path d="M 0 0 L 120 0 L 60 45 Z" fill="#f8fafc" />
        <path d="M 0 0 L 60 45 L 120 0" fill="none" stroke="#e2e8f0" strokeWidth="1.5" />
      </svg>
      <div className="absolute left-1/2 top-[42px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_2px_4px_rgba(239,35,60,0.4)]">
        <HeartSprinkle color="#ef233c" className="h-8 w-8 scale-[1.2]" />
      </div>
    </div>
  );
}

function AnimatedLetterModal({ letterContent, onClose }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center p-6 backdrop-blur-sm transition-colors duration-1000 ${phase >= 3 ? 'bg-black/50' : 'bg-black/30'}`}>
      
      {phase < 3 && (
        <div className="relative w-72 h-48 drop-shadow-2xl" style={{ perspective: '1000px' }}>
          <div className="absolute inset-0 bg-[#e2e8f0] rounded-lg shadow-inner" style={{ zIndex: 10 }}></div>
          
          <div 
            className={`absolute left-3 right-3 bg-[#f0f9ff] rounded-t-xl border border-sky-200 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              phase >= 2 ? '-top-24 h-64 opacity-100' : 'top-4 h-40 opacity-0'
            }`}
            style={{ zIndex: 20 }}
          >
            <div className="p-5 flex flex-col gap-3 opacity-60">
               <div className="h-3 w-1/2 bg-sky-200 rounded-full"></div>
               <div className="h-2 w-full bg-sky-200 rounded-full mt-4"></div>
               <div className="h-2 w-5/6 bg-sky-200 rounded-full"></div>
               <div className="h-2 w-4/6 bg-sky-200 rounded-full"></div>
            </div>
          </div>

          <div className="absolute inset-0 z-30 pointer-events-none drop-shadow-sm rounded-lg overflow-hidden">
            <svg viewBox="0 0 120 80" className="w-full h-full" preserveAspectRatio="none">
              <path d="M 0 80 L 120 80 L 60 45 Z" fill="#cbd5e1" />
              <path d="M 0 0 L 0 80 L 60 45 Z" fill="#e2e8f0" />
              <path d="M 120 0 L 120 80 L 60 45 Z" fill="#e2e8f0" />
              <path d="M 0 0 L 60 45 L 120 0" fill="none" stroke="#f8fafc" strokeWidth="1" opacity="0.8"/>
            </svg>
          </div>

          <div 
            className={`absolute top-0 left-0 w-full h-[60%] origin-top transition-transform duration-700 ease-in-out drop-shadow-md rounded-t-lg`}
            style={{ transform: phase >= 1 ? 'rotateX(180deg)' : 'rotateX(0deg)', zIndex: phase >= 2 ? 15 : 40 }}
          >
            <svg viewBox="0 0 120 48" className="w-full h-full" preserveAspectRatio="none">
              <path d="M 0 0 L 120 0 L 60 48 Z" fill="#f1f5f9" />
              <path d="M 0 0 L 60 48 L 120 0" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            </svg>
          </div>

          <div 
            className="absolute left-1/2 top-[50%] transition-all duration-500 ease-in-out"
            style={{ zIndex: 45, transform: phase >= 1 ? 'translate(-50%, -50%) scale(0)' : 'translate(-50%, -50%) scale(1)', opacity: phase >= 1 ? 0 : 1 }}
          >
            {/* 하트 크기를 140px로 확실히 키웠습니다! */}
            <HeartSprinkle color="#ef233c" className="w-[140px] h-[140px] drop-shadow-[0_8px_12px_rgba(239,35,60,0.5)]" />
          </div>
        </div>
      )}

      {phase === 3 && (
        <div className="relative w-full max-w-sm rounded-[2rem] border-4 border-dashed border-sky-300 bg-[#f0f9ff] p-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] animate-fade-in-up">
          <button onClick={onClose} className="absolute right-3 top-3 z-[100000] flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl font-bold text-sky-400 shadow-sm transition-transform hover:scale-110 hover:bg-sky-50 hover:text-sky-600">
            &times;
          </button>
          <div className="absolute -left-6 top-0 z-30 w-28 h-28 rotate-[-10deg] drop-shadow-sm select-none">
            <WhiteDog className="w-full h-full" />
          </div>
          <HeartSprinkle color="#ef233c" className="absolute bottom-5 right-6 z-30 h-7 w-7 rotate-12 drop-shadow-sm" />

          <div className="relative mt-12 rounded-2xl bg-white/70 p-5 text-left text-[14px] leading-[2rem] text-[#334155] shadow-xl border border-white/50 backdrop-blur-md">
            <div className="absolute -top-4 left-1/2 h-7 w-24 -translate-x-1/2 rotate-[-3deg] rounded-sm bg-blue-600/90 shadow-sm backdrop-blur-sm" />
            <div className="absolute -top-4 left-[45%] h-8 w-24 -translate-x-1/2 rotate-[5deg] rounded-sm bg-sky-200/90 shadow-sm backdrop-blur-sm opacity-90" />
            <div className="relative z-10 font-bold tracking-wide max-h-[360px] overflow-y-auto letter-scroll">
              {letterContent.split('\n').map((line, idx) => (
                <p key={idx} className="min-h-[2.2rem] whitespace-pre-wrap">{line}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FireworkEffect({ phase }) {
  const sparks = useMemo(() => Array.from({ length: 110 }).map((_, i) => {
    const angle = ((i * 360) / 110 + (Math.random() * 4 - 2)) * (Math.PI / 180);
    const distance = 100 + Math.random() * 160; 
    
    const cpX = 200 + Math.cos(angle) * (distance * 0.75);
    const cpY = 200 + Math.sin(angle) * (distance * 0.75);
    
    const endX = 200 + Math.cos(angle) * distance;
    const endY = 200 + Math.sin(angle) * distance + (30 + Math.random() * 50); 
    
    const len = distance + 60; 

    return {
      id: i,
      d: `M 200 200 Q ${cpX} ${cpY} ${endX} ${endY}`,
      len: len,
      delay: `${Math.random() * 0.15}s`,
      duration: `${1.2 + Math.random() * 0.8}s`,
      width: Math.random() * 2 + 1
    };
  }), []);

  if (phase === 0) return null;

  return (
    <div className="absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[400px] h-[400px]">
      {phase === 1 && (
        <div 
          className="absolute left-[198px] top-[200px] w-1.5 h-12 rounded-full bg-[#ffffff] shadow-[0_0_18px_6px_rgba(254,240,138,0.9)]"
          style={{ animation: 'firework-ascend 1.5s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
        />
      )}
      
      {phase === 2 && (
        <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] overflow-visible">
          <circle 
            cx="200" cy="200" r="15" fill="#ffffff" 
            style={{ transformOrigin: '200px 200px', animation: 'explode-flash 0.6s ease-out forwards' }}
          />
          {sparks.map(s => (
            <path
              key={s.id}
              d={s.d}
              fill="none"
              stroke="#fef08a" 
              strokeWidth={s.width}
              strokeLinecap="round"
              style={{
                '--len': s.len,
                strokeDasharray: `calc(var(--len) * 0.35) calc(var(--len) * 2)`,
                strokeDashoffset: `var(--len)`,
                animation: `firework-willow ${s.duration} cubic-bezier(0.25, 1, 0.4, 1) forwards ${s.delay}`
              }}
            />
          ))}
          {sparks.slice(0, 55).map(s => (
            <path
              key={`core-${s.id}`}
              d={s.d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={s.width * 0.6}
              strokeLinecap="round"
              style={{
                '--len': s.len,
                strokeDasharray: `calc(var(--len) * 0.2) calc(var(--len) * 2)`,
                strokeDashoffset: `var(--len)`,
                animation: `firework-willow ${s.duration} cubic-bezier(0.25, 1, 0.4, 1) forwards ${s.delay}`
              }}
            />
          ))}
        </svg>
      )}
    </div>
  );
}

function CakeScene({ cakeStep, setIsLetterOpen, setStep, fireworkPhase }) {
  const syrupReady = cakeStep >= 7;
  const sprinklesReady = cakeStep >= 8;
  const strawberriesReady = cakeStep >= 9;
  const candlesReady = cakeStep >= 10;

  const [isCandleLit, setIsCandleLit] = useState(true);

  const blowOutCandle = () => {
    if (isCandleLit) {
      setIsCandleLit(false);
    }
  };

  const hiddenBalloons = useMemo(() => [
    { id: 1, type: 'heart', color: '#fb7185', flyDelay: '0ms',   rotate: '-15deg', scale: 0.9,  startX: -30, endX: -600 },
    { id: 2, type: 'oval',  color: '#fde047', flyDelay: '100ms', rotate: '-5deg',  scale: 1,    startX: -10, endX: -250 },
    { id: 3, type: 'star',  color: '#7dd3fc', flyDelay: '50ms',  rotate: '8deg',   scale: 0.95, startX: 10,  endX: 150 },
    { id: 4, type: 'oval',  color: '#4ade80', flyDelay: '150ms', rotate: '18deg',  scale: 0.85, startX: 25,  endX: 450 },
    { id: 5, type: 'heart', color: '#a78bfa', flyDelay: '200ms', rotate: '25deg',  scale: 0.9,  startX: 40,  endX: 700 },
  ], []);

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden bg-gradient-to-b from-[#31446f] via-[#7f92bc] to-[#dbe4f5] p-5 pb-12 flex flex-col items-center justify-center text-center">
      
      <StarryBackground />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,0.25),transparent_65%)] pointer-events-none" />

      <div className="relative w-full flex flex-col items-center justify-center">
        <FireworkEffect phase={fireworkPhase} />

        <div
          className={`relative z-[50] transition-all duration-1000 w-full ${
            cakeStep >= 11 ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
          }`}
        >
          <h1 className="text-4xl font-extrabold leading-tight tracking-normal text-white drop-shadow-[0_3px_10px_rgba(18,28,54,0.35)]">
            Happy Birthday,
            <br />
            Daddy <span className="inline-block text-rose-500 drop-shadow-sm">❤️</span>
          </h1>
          <p className="mt-3 inline-block rounded-full bg-white/85 px-5 py-2 text-sm font-bold text-[#22345f] shadow-sm backdrop-blur-sm">
            {!isCandleLit ? '비밀 편지 봉투가 하단에 열렸어!👇' : '소원을 빌고 케이크 위의 촛불을 눌러서 꺼봐!'}
          </p>
        </div>
      </div>

      <div className="relative z-10 h-[440px] w-full max-w-[340px] shrink-0 select-none mt-4">
        
        <div className="absolute left-1/2 top-[220px] w-0 h-0 z-[5] pointer-events-none -translate-x-1/2">
          {hiddenBalloons.map((b) => (
            <Balloon
              key={b.id} type={b.type} color={b.color} showDelay={b.flyDelay} flyDelay={b.flyDelay}
              rotate={b.rotate} scale={b.scale} startX={b.startX} endX={b.endX}
              show={!isCandleLit} isFlying={!isCandleLit}
            />
          ))}
        </div>

        <SyrupGlass show={cakeStep >= 5 && cakeStep < 8} pour={cakeStep >= 6 && cakeStep < 8} />

        <div className={`absolute left-1/2 -translate-x-1/2 z-40 transition-all duration-700`} style={{ top: '62px', width: '120px', height: '80px' }}>
          <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer ${popAnim} ${candlesReady ? 'translate-y-0 opacity-100' : '-translate-y-16 opacity-0'}`} onClick={blowOutCandle}>
            <Candle isLit={isCandleLit} delay="0ms" />
          </div>

          <div className={`absolute bottom-0 left-0 w-full h-full pointer-events-none ${popAnim} ${strawberriesReady ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <div className="absolute pointer-events-auto" style={{ bottom: '8px', left: '12px' }}>
              <Strawberry className="-rotate-[18deg] scale-[0.95]" delay="0ms" />
            </div>
            <div className="absolute pointer-events-auto z-10" style={{ bottom: '2px', left: '38px' }}>
              <Strawberry className="-rotate-6 scale-[1.15]" delay="100ms" />
            </div>
            <div className="absolute pointer-events-auto" style={{ bottom: '7px', left: '68px' }}>
              <Strawberry className="rotate-[15deg] scale-[0.9]" delay="200ms" />
            </div>
          </div>
        </div>

        <CreamTier width={158} height={92} top="100px" zIndex={30} stepReady={cakeStep >= 4} syrupReady={syrupReady} delay="80ms" />
        <CreamTier width={226} height={108} top="160px" zIndex={20} stepReady={cakeStep >= 3} syrupReady={syrupReady} delay="40ms">
          <div className={`flex gap-5 opacity-90 ${popAnim} ${sprinklesReady ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <HeartSprinkle color="#fb7185" className="translate-y-2 -rotate-12 scale-110" />
            <HeartSprinkle color="#fde047" className="-translate-y-2 rotate-6" />
            <HeartSprinkle color="#7dd3fc" className="translate-y-1 rotate-12" />
            <HeartSprinkle color="#f472b6" className="-translate-y-3 -rotate-6 scale-90" />
          </div>
        </CreamTier>
        <CreamTier width={292} height={128} top="220px" zIndex={10} stepReady={cakeStep >= 2} syrupReady={syrupReady} delay="0ms">
          <div className={`flex gap-7 opacity-95 ${popAnim} ${sprinklesReady ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
            <HeartSprinkle color="#fb7185" className="-translate-y-2 rotate-12" />
            <HeartSprinkle color="#f472b6" className="translate-y-4 -rotate-[20deg] scale-110" />
            <HeartSprinkle color="#fde047" className="-translate-y-1 rotate-[30deg]" />
            <HeartSprinkle color="#fb7185" className="translate-y-2 -rotate-12 scale-90" />
            <HeartSprinkle color="#7dd3fc" className="-translate-y-3 rotate-6 scale-110" />
          </div>
        </CreamTier>

        <div className={`absolute left-1/2 -translate-x-1/2 top-[245px] z-0 transition-all duration-700 ${popAnim} ${cakeStep >= 1 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} style={{ width: 'min(380px, 100vw)', height: '160px' }}>
          <svg viewBox="0 0 380 160" className="w-full h-full drop-shadow-[0_10px_15px_rgba(15,25,47,0.25)]">
            <defs>
              <linearGradient id="standBase" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cbd5e1" />
                <stop offset="30%" stopColor="#f8fafc" />
                <stop offset="70%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
              <linearGradient id="plateEdge" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" />
                <stop offset="100%" stopColor="#94a3b8" />
              </linearGradient>
            </defs>
            <path d="M 150 70 C 150 110, 110 130, 110 140 C 110 150, 270 150, 270 140 C 270 130, 230 110, 230 70 Z" fill="url(#standBase)" />
            <ellipse cx="190" cy="140" rx="80" ry="12" fill="#94a3b8" />
            <ellipse cx="190" cy="137" rx="80" ry="12" fill="#f8fafc" />
            <ellipse cx="190" cy="70" rx="180" ry="45" fill="url(#plateEdge)" />
            <ellipse cx="190" cy="62" rx="180" ry="45" fill="#f1f5f9" />
            <ellipse cx="190" cy="62" rx="160" ry="38" fill="#ffffff" />
            <ellipse cx="190" cy="62" rx="160" ry="38" fill="none" stroke="#e2e8f0" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className={`relative z-10 mt-4 h-24 flex items-end justify-center w-full transition-all duration-700 ${!isCandleLit ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}>
        <button onClick={() => setIsLetterOpen(true)} className="group flex flex-col items-center hover:scale-105 active:scale-95 transition-transform">
          <HeartLetter />
          <span className="mt-3 rounded-full bg-[#31446f] px-4 py-1.5 text-xs font-bold tracking-widest text-white shadow-lg group-hover:bg-[#1e2a47]">
            OPEN
          </span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [terminalText, setTerminalText] = useState([]);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [cakeStep, setCakeStep] = useState(0);
  const [fireworkPhase, setFireworkPhase] = useState(0);
  const bottomRef = useRef(null);

  const [letterContent, setLetterContent] = useState(() => {
    return localStorage.getItem('birthdayLetterContent') || 
      "To. 사랑하는 주인님 이자 대디\n비밀번호를 완벽하게 맞췄네. 역시 최고야!\n\n여기는 아가가 준비한 생일 축하 비밀 편지야.\n태어나줘서 고맙고, 매일 든든하고 소중한 우리 아빠!\n오늘은 세상에서 제일 행복하고 달콤한 하루를 보내길 바라.\n\n- 아가가 -";
  });

  useEffect(() => {
    localStorage.setItem('birthdayLetterContent', letterContent);
  }, [letterContent]);

  const bootLines = useMemo(() => {
    const lines = [];
    const totalLines = 30;
    const randomHex = () => `0x${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase()}`;
    const randomSys = () => `sys_module_${Math.floor(Math.random() * 999)}`;
    const randomStatus = () => {
      const statuses = ['[OK]', '[CLEAR]', '[BYPASSED]', '[VERIFIED]'];
      return statuses[Math.floor(Math.random() * statuses.length)];
    };

    for (let i = 0; i < totalLines; i++) {
      if (i === 0) lines.push('> Booting Bona_OS kernel v8.2.4...');
      else if (i === 3) lines.push("> Scanning Daddy's hardware components... [OK]");
      else if (i === 7) lines.push("> Bypassing Firewall to Daddy's Heart... [SUCCESS]");
      else if (i === 12) lines.push('> Establishing Secure Connection to Server_Daddy...');
      else if (i === 17) lines.push("> Accessing Aga's Secret Database...");
      else if (i === 22) lines.push('> Injecting Love_Virus.dll... 100%');
      else if (i === 25) lines.push('> WARNING: MASSIVE AMOUNT OF LOVE DETECTED IN SYSTEM');
      else if (i === 27) lines.push('> System Override Initiated by User: Aga');
      else if (i === 28) lines.push('> TOP SECRET FILE DEPLOYED.');
      else if (i === 29) lines.push('> Redirecting to Authentication Gateway in 3... 2... 1...');
      else {
        const type = Math.random();
        if (type > 0.6) lines.push(`> ${randomHex()} - Loading ${randomSys()}... ${randomStatus()}`);
        else if (type > 0.3) lines.push(`> Verifying memory sector ${randomHex()}... ${randomStatus()}`);
        else lines.push(`> Extracting data packets from node_${Math.floor(Math.random() * 99)}... 100%`);
      }
    }
    return lines;
  }, []);

  useEffect(() => {
    if (step === 1) {
      let i = 0;
      setTerminalText([]);
      setIsLetterOpen(false);
      setCakeStep(0);
      setFireworkPhase(0);

      const intervalId = setInterval(() => {
        setTerminalText((prev) => {
          if (prev.length >= bootLines.length) return prev;
          return [...prev, bootLines[prev.length]];
        });
        i++;
        if (i >= bootLines.length) {
          clearInterval(intervalId);
          setTimeout(() => {
            setStep((prevStep) => (prevStep === 1 ? 2 : prevStep));
          }, 1000);
        }
      }, 200);

      return () => clearInterval(intervalId);
    }
  }, [step, bootLines]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [terminalText]);

  useEffect(() => {
    if (step === 3) {
      const schedule = [
        { s: 1, t: 300 },
        { s: 2, t: 1000 },
        { s: 3, t: 1500 },
        { s: 4, t: 2000 },
        { s: 5, t: 2600 },
        { s: 6, t: 3400 },
        { s: 7, t: 4200 },
        { s: 8, t: 4900 },
        { s: 9, t: 5600 },
        { s: 10, t: 6300 },
      ];

      const timers = schedule.map(({ s, t }) => setTimeout(() => setCakeStep(s), t));

      const f1 = setTimeout(() => setFireworkPhase(1), 6600);
      const f2 = setTimeout(() => setFireworkPhase(2), 8100);
      const tText = setTimeout(() => setCakeStep(11), 8300);

      return () => {
        timers.forEach(clearTimeout);
        clearTimeout(f1);
        clearTimeout(f2);
        clearTimeout(tText);
      };
    }
  }, [step]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === '19920620') {
      setStep(3);
    } else if (password === '0420') {
      setStep(4);
    } else {
      setError(true);
      setPassword('');
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <>
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes flame { 0%, 100% { transform: scale(1) rotate(-3deg); } 50% { transform: scale(1.15) rotate(4deg); } }
        @keyframes wiggle { 0%, 100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
        @keyframes sway { 0%, 100% { transform: rotate(-4deg); } 50% { transform: rotate(4deg); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.6); } 50% { opacity: 1; transform: scale(1.2); } }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px) scale(0.95); } 100% { opacity: 1; transform: translateY(0) scale(1); } }
        
        @keyframes meteor {
          0% { transform: translate(10vw, -10vw) rotate(135deg); opacity: 0; width: 0px; }
          5% { opacity: 1; width: 120px; }
          15% { transform: translate(-40vw, 40vw) rotate(135deg); opacity: 0; width: 0px; }
          100% { transform: translate(-40vw, 40vw) rotate(135deg); opacity: 0; width: 0px; }
        }

        @keyframes firework-ascend {
          0% { transform: translateY(50vh) scaleY(2); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 1; }
        }
        
        @keyframes firework-willow {
          0% { stroke-dashoffset: var(--len); opacity: 1; }
          40% { opacity: 1; }
          100% { stroke-dashoffset: calc(var(--len) * -0.5); opacity: 0; }
        }

        @keyframes explode-flash {
          0% { transform: scale(0.5); opacity: 1; }
          100% { transform: scale(4); opacity: 0; }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-flame { animation: flame 0.5s ease-in-out infinite; }
        .animate-wiggle:hover { animation: wiggle 0.4s ease-in-out infinite; }
        .animate-sway { animation: sway 4s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .animate-meteor { animation: meteor linear infinite; }
        
        .letter-scroll::-webkit-scrollbar { width: 6px; }
        .letter-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
      `}</style>

      {step === 1 && (
        <div className="relative flex h-[100dvh] flex-col items-start justify-start overflow-hidden bg-black p-4 font-mono">
          <div className="mx-auto h-full w-full max-w-md space-y-1 overflow-y-auto pb-10">
            {terminalText.map((line, index) => {
              let textColor = 'text-green-600';
              if (line.includes('Aga') || line.includes('Daddy') || line.includes('Bona_OS')) {
                textColor = 'text-green-300 font-bold';
              }
              if (line.includes('WARNING') || line.includes('TOP SECRET')) {
                textColor = 'text-red-500 font-bold';
              }
              return <p key={index} className={`${textColor} m-0 break-words text-[11px] leading-tight sm:text-xs`}>{line}</p>;
            })}
            <div ref={bottomRef} className="mt-1 inline-block h-3 w-2 animate-pulse bg-gray-500" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-black p-6 font-mono">
          <div className="w-full max-w-sm space-y-6 rounded-2xl border border-green-500/30 bg-black p-8 text-center shadow-[0_0_15px_rgba(34,197,94,0.2)]">
            <h2 className="animate-pulse text-lg font-bold text-red-500">[ACCESS DENIED]</h2>
            <p className="text-xs text-green-400 sm:text-sm">8자리 암호를 입력하십시오.</p>
            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`w-full border-b-2 bg-black py-2 text-center text-xl text-green-500 transition-all focus:outline-none ${error ? 'animate-bounce border-red-500' : 'border-green-500'}`} placeholder="********" inputMode="numeric" autoFocus />
              {error && <p className="text-xs text-red-500">경고: 접근 권한이 없습니다.</p>}
              <button type="submit" className="mt-4 w-full rounded-lg border border-green-500 py-3 text-sm font-bold text-green-500 transition-colors hover:bg-green-500 hover:text-black">접속 요청</button>
            </form>
          </div>
        </div>
      )}

      {step === 3 && (
        <>
          <CakeScene cakeStep={cakeStep} setIsLetterOpen={setIsLetterOpen} setStep={setStep} fireworkPhase={fireworkPhase} />
          {isLetterOpen && <AnimatedLetterModal letterContent={letterContent} onClose={() => setIsLetterOpen(false)} />}
        </>
      )}

      {step === 4 && (
        <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-slate-900 p-6 py-12">
          <div className="w-full max-w-sm space-y-6 rounded-2xl border border-blue-500/30 bg-slate-800 p-8 text-center shadow-2xl my-auto">
            <div className="text-5xl">ADMIN</div>
            <h1 className="text-xl font-bold text-blue-400">관리자 모드 접속 성공</h1>
            <div className="space-y-3 rounded-xl border border-slate-700 bg-slate-900 p-5 text-left font-mono text-xs text-blue-300 sm:text-sm">
              <p>{'>'} 접속자: 아가</p>
              <p>{'>'} 대상: Daddy</p>
              <p>{'>'} 이벤트 상태: <span className="text-green-400">준비 완료</span></p>
              <p>{'>'} 데이터 저장소: <span className="text-sky-400">LocalStorage 연동 완료</span></p>
            </div>
            
            <div className="mt-6 text-left">
              <label className="mb-2 block text-sm font-bold text-sky-400">📝 편지 내용 수정</label>
              <textarea value={letterContent} onChange={(e) => setLetterContent(e.target.value)} className="h-44 w-full resize-none rounded-xl border border-blue-500/50 bg-slate-900 p-4 text-sm leading-relaxed text-sky-100 transition-colors focus:border-sky-400 focus:outline-none" placeholder="편지 내용을 입력하세요..." />
            </div>

            <button onClick={() => setStep(1)} className="mt-4 w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white transition-colors hover:bg-blue-700">로그아웃 및 초기화</button>
          </div>
        </div>
      )}
    </>
  );
}