import React from 'react';

export const Watermark: React.FC = () => {
  return (
    <>
      {/* Repeating Diagonal Watermark Grid across the entire viewport */}
      <div 
        className="fixed inset-0 pointer-events-none select-none z-[9999] overflow-hidden"
        aria-hidden="true"
      >
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="demo-view-watermark"
              width="360"
              height="240"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(-26)"
            >
              {/* Offset Row 1 */}
              <text
                x="30"
                y="90"
                fill="rgba(15, 23, 42, 0.07)"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                className="font-black tracking-[0.25em] text-2xl uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                DEMO VIEW
              </text>

              {/* Offset Row 2 */}
              <text
                x="210"
                y="210"
                fill="rgba(15, 23, 42, 0.07)"
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="1"
                className="font-black tracking-[0.25em] text-2xl uppercase"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                DEMO VIEW
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#demo-view-watermark)" />
        </svg>
      </div>

      {/* Floating Modern Pill Badge in the bottom-left corner */}
      <aside 
        className="fixed bottom-14 sm:bottom-5 left-4 sm:left-5 z-[9999] pointer-events-none select-none"
        aria-label="Site Status Indicator"
      >
        <div className="flex items-center space-x-2 bg-amber-400/95 text-slate-950 px-3.5 py-1.5 rounded-full shadow-xl border border-amber-300 font-extrabold text-[11px] tracking-wider uppercase backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
          </span>
          <span className="font-black">DEMO VIEW</span>
        </div>
      </aside>
    </>
  );
};
