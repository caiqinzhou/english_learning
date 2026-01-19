'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LetterStroke from '@/components/LetterStroke';
import AudioPlayer from '@/components/AudioPlayer';
import RewardAnimation from '@/components/RewardAnimation';
import { getLetterData, getAllLetters } from '@/data/letterStrokes';

export default function LetterPageClient({
  params,
}: {
  params: { letter: string };
}) {
  const { letter } = params;
  const [showUppercase, setShowUppercase] = useState(true);
  const [showReward, setShowReward] = useState(false);

  const letterData = getLetterData(letter);
  const allLetters = getAllLetters();
  const currentIndex = allLetters.findIndex(
    (l) => l.toLowerCase() === letter.toLowerCase()
  );
  const prevLetter = currentIndex > 0 ? allLetters[currentIndex - 1] : null;
  const nextLetter =
    currentIndex < allLetters.length - 1 ? allLetters[currentIndex + 1] : null;

  if (!letterData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            字母未找到
          </h1>
          <Link
            href="/learn"
            className="text-secondary-600 hover:text-secondary-700 font-bold text-lg"
          >
            返回选择页面
          </Link>
        </div>
      </div>
    );
  }

  const handleAnimationComplete = () => {
    setShowReward(true);
    setTimeout(() => setShowReward(false), 3000);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <RewardAnimation trigger={showReward} message="学得真棒！" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <Link
            href="/learn"
            className="inline-block mb-4 text-secondary-600 hover:text-secondary-700 font-bold text-lg"
          >
            ← 返回字母表
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
            字母 {letterData.letter.toUpperCase()}
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <LetterStroke
              strokes={
                showUppercase ? letterData.uppercase : letterData.lowercase
              }
              isUppercase={showUppercase}
              onComplete={handleAnimationComplete}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                选择大小写：
              </h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowUppercase(true)}
                  className={`
                    flex-1 py-4 px-6 rounded-xl font-bold text-2xl transition-all
                    ${
                      showUppercase
                        ? 'bg-primary-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                >
                  大写 {letterData.letter.toUpperCase()}
                </button>
                <button
                  onClick={() => setShowUppercase(false)}
                  className={`
                    flex-1 py-4 px-6 rounded-xl font-bold text-2xl transition-all
                    ${
                      !showUppercase
                        ? 'bg-primary-500 text-white shadow-lg scale-105'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                >
                  小写 {letterData.letter.toLowerCase()}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                听发音：
              </h2>
              <AudioPlayer letter={letterData.letter} />
            </div>

            <div className="bg-gradient-to-r from-success-400 to-success-500 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-3">💡 学习提示</h3>
              <ul className="space-y-2 text-lg">
                <li>✓ 观察每一笔的起点和方向</li>
                <li>✓ 按照数字顺序书写</li>
                <li>✓ 多练习几次就能记住啦！</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center bg-white rounded-2xl shadow-xl p-6"
        >
          {prevLetter ? (
            <Link
              href={`/learn/${prevLetter.toLowerCase()}`}
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              ← 上一个 ({prevLetter})
            </Link>
          ) : (
            <div></div>
          )}

          <Link
            href="/practice"
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
          >
            📄 打印练习纸
          </Link>

          {nextLetter ? (
            <Link
              href={`/learn/${nextLetter.toLowerCase()}`}
              className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-3 px-6 rounded-full transition-all transform hover:scale-105"
            >
              下一个 ({nextLetter}) →
            </Link>
          ) : (
            <div></div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
