'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import PDFGenerator from '@/components/PDFGenerator';

export default function PracticePage() {
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
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-primary-500 mb-4">
            📄 打印练习纸
          </h1>
          <p className="text-xl text-gray-700">
            选择要练习的字母，生成专业的书写练习纸
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <PDFGenerator />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white rounded-3xl shadow-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
            📖 使用说明
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-3">1️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-primary-600">
                选择字母
              </h3>
              <p className="text-gray-600">
                点击要练习的字母，可以选择一个或多个
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">2️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-secondary-600">
                选择类型
              </h3>
              <p className="text-gray-600">
                选择大写、小写或两者都要练习
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">3️⃣</div>
              <h3 className="text-xl font-bold mb-2 text-accent-600">
                打印练习
              </h3>
              <p className="text-gray-600">
                生成PDF文件，打印后就可以开始练习啦
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link
            href="/learn"
            className="inline-block bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-all hover:scale-105"
          >
            ✏️ 先去学习笔画
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
