'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllLetters } from '@/data/letterStrokes';

export default function LearnPage() {
  const allLetters = getAllLetters();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link
            href="/"
            className="inline-block mb-4 text-secondary-600 hover:text-secondary-700 font-bold text-lg"
          >
            ← 返回首页
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary-500 to-primary-500 mb-4">
            ✏️ 学习字母书写
          </h1>
          <p className="text-xl text-gray-700">选择一个字母开始学习</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8"
        >
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-13 gap-3">
            {allLetters.map((letter, index) => (
              <Link key={letter} href={`/learn/${letter.toLowerCase()}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.02 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-secondary-400 to-secondary-600 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-xl transition-shadow"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {letter}
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <Link
            href="/practice"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            📄 打印练习纸
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
