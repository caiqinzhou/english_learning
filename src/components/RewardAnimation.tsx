'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

interface RewardAnimationProps {
  trigger: boolean;
  message?: string;
}

export default function RewardAnimation({ trigger, message = '太棒了！' }: RewardAnimationProps) {
  useEffect(() => {
    if (trigger) {
      const duration = 3000;
      const end = Date.now() + duration;

      const colors = ['#fbbf24', '#f59e0b', '#ef4444', '#3b82f6', '#8b5cf6'];

      const frame = () => {
        confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        });

        confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-accent-400 to-success-400 text-white px-12 py-8 rounded-3xl shadow-2xl"
      >
        <div className="flex items-center gap-4">
          <motion.div
            animate={{
              rotate: [0, -10, 10, -10, 10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="text-6xl"
          >
            ⭐
          </motion.div>
          <div className="text-4xl font-bold">{message}</div>
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 0.5, repeat: 3 }}
            className="text-6xl"
          >
            ⭐
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
