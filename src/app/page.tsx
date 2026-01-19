'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllLetters } from '@/data/letterStrokes';

export default function HomePage() {
  const allLetters = getAllLetters();

  return (
    <div className="min-h-screen py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mb-4">
          🎨 ABC 字母学习乐园
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-semibold">
          和我一起学习26个英文字母吧！✨
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/learn">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-3xl shadow-2xl p-8 cursor-pointer h-full"
            >
              <div className="text-6xl mb-4 text-center">✏️</div>
              <h2 className="text-3xl font-bold text-white mb-3 text-center">
                学习字母
              </h2>
              <p className="text-white text-lg text-center">
                观看笔画演示，学习正确的书写方法
              </p>
            </motion.div>
          </Link>

          <Link href="/practice">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-accent-400 to-accent-600 rounded-3xl shadow-2xl p-8 cursor-pointer h-full"
            >
              <div className="text-6xl mb-4 text-center">📄</div>
              <h2 className="text-3xl font-bold text-white mb-3 text-center">
                打印练习纸
              </h2>
              <p className="text-white text-lg text-center">
                生成PDF练习纸，随时随地练习书写
              </p>
            </motion.div>
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            🔤 选择要学习的字母
          </h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-13 gap-3">
            {allLetters.map((letter, index) => (
              <Link key={letter} href={`/learn/${letter.toLowerCase()}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.02 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {letter}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center text-gray-600 mt-12"
      >
        <p className="text-lg">
          ✨ 支持PC端和移动端 | 🎵 带语音朗读 | 🎁 完成学习有奖励哦！
        </p>
      </motion.div>
    </div>
  );
}
