'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Stroke } from '@/data/letterStrokes';

interface LetterStrokeProps {
  strokes: Stroke[];
  isUppercase: boolean;
  autoPlay?: boolean;
  speed?: number;
  showNumbers?: boolean;
  onComplete?: () => void;
}

export default function LetterStroke({
  strokes,
  isUppercase,
  autoPlay = true,
  speed = 1.5,
  showNumbers = true,
  onComplete,
}: LetterStrokeProps) {
  const [currentStroke, setCurrentStroke] = useState(0);
  const [isAnimating, setIsAnimating] = useState(autoPlay);

  useEffect(() => {
    if (isAnimating && currentStroke < strokes.length) {
      const timer = setTimeout(() => {
        if (currentStroke === strokes.length - 1) {
          setIsAnimating(false);
          onComplete?.();
        } else {
          setCurrentStroke(currentStroke + 1);
        }
      }, speed * 1000);

      return () => clearTimeout(timer);
    }
  }, [currentStroke, isAnimating, strokes.length, speed, onComplete]);

  const handleReplay = () => {
    setCurrentStroke(0);
    setIsAnimating(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative bg-white rounded-2xl shadow-lg p-8 border-4 border-secondary-300">
        <svg
          viewBox="0 0 100 120"
          className="w-48 h-48 md:w-64 md:h-64"
          style={{ overflow: 'visible' }}
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />

          <line
            x1="10"
            y1="60"
            x2="90"
            y2="60"
            stroke="#bfdbfe"
            strokeWidth="0.5"
            strokeDasharray="2,2"
          />

          {strokes.map((stroke, index) => {
            const shouldAnimate = index <= currentStroke && isAnimating;
            const isVisible = index <= currentStroke;

            return (
              <g key={index}>
                {isVisible && (
                  <>
                    <motion.path
                      d={stroke.path}
                      fill="none"
                      stroke={index === currentStroke ? '#3b82f6' : '#94a3b8'}
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: shouldAnimate ? 1 : 1,
                        opacity: 1,
                      }}
                      transition={{
                        pathLength: {
                          duration: shouldAnimate ? speed : 0,
                          ease: 'easeInOut',
                        },
                        opacity: { duration: 0.2 },
                      }}
                    />

                    {index === currentStroke && isAnimating && (
                      <motion.circle
                        r="3"
                        fill="#ef4444"
                        initial={{ offsetDistance: '0%' }}
                        animate={{ offsetDistance: '100%' }}
                        transition={{ duration: speed, ease: 'linear' }}
                        style={{
                          offsetPath: `path('${stroke.path}')`,
                        }}
                      />
                    )}

                    {showNumbers && !isAnimating && (
                      <text
                        x={getPathStart(stroke.path).x - 8}
                        y={getPathStart(stroke.path).y + 5}
                        className="text-xs font-bold fill-accent-500"
                      >
                        {stroke.order}
                      </text>
                    )}
                  </>
                )}
              </g>
            );
          })}
        </svg>

        <div className="absolute top-2 right-2 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {isUppercase ? 'A' : 'a'}
        </div>
      </div>

      <button
        onClick={handleReplay}
        className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95"
      >
        🔄 重播动画
      </button>

      <div className="flex gap-2">
        {strokes.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index <= currentStroke
                ? 'bg-success-500 scale-110'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function getPathStart(path: string): { x: number; y: number } {
  const match = path.match(/M\s*([\d.]+)\s*([\d.]+)/);
  if (match) {
    return { x: parseFloat(match[1]), y: parseFloat(match[2]) };
  }
  return { x: 0, y: 0 };
}
