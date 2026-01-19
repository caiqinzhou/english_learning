'use client';

import { useState } from 'react';
import { getAllLetters } from '@/data/letterStrokes';
import { generatePracticePDF, generateAllLettersPDF } from '@/lib/pdf-generator';

export default function PDFGenerator() {
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);

  const allLetters = getAllLetters();

  const toggleLetter = (letter: string) => {
    setSelectedLetters((prev) =>
      prev.includes(letter)
        ? prev.filter((l) => l !== letter)
        : [...prev, letter]
    );
  };

  const selectAll = () => {
    setSelectedLetters(allLetters);
  };

  const clearAll = () => {
    setSelectedLetters([]);
  };

  const handleGenerate = () => {
    if (selectedLetters.length === 0) {
      alert('请至少选择一个字母！');
      return;
    }

    if (!includeUppercase && !includeLowercase) {
      alert('请至少选择大写或小写！');
      return;
    }

    generatePracticePDF(selectedLetters, includeUppercase, includeLowercase);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary-600">
        📄 生成练习纸
      </h2>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-gray-700">选择字母：</h3>
        <div className="flex gap-3 mb-4">
          <button
            onClick={selectAll}
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-bold py-2 px-6 rounded-full transition-all"
          >
            全选
          </button>
          <button
            onClick={clearAll}
            className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-6 rounded-full transition-all"
          >
            清空
          </button>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-13 gap-2">
          {allLetters.map((letter) => (
            <button
              key={letter}
              onClick={() => toggleLetter(letter)}
              className={`
                aspect-square rounded-xl font-bold text-xl transition-all transform
                ${
                  selectedLetters.includes(letter)
                    ? 'bg-success-500 text-white scale-110 shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3 text-gray-700">选择类型：</h3>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              className="w-5 h-5 accent-primary-500"
            />
            <span className="text-lg font-semibold">大写字母 (ABC)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              className="w-5 h-5 accent-primary-500"
            />
            <span className="text-lg font-semibold">小写字母 (abc)</span>
          </label>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <button
          onClick={handleGenerate}
          disabled={selectedLetters.length === 0}
          className="
            bg-gradient-to-r from-primary-500 to-primary-600 
            hover:from-primary-600 hover:to-primary-700
            disabled:from-gray-400 disabled:to-gray-500
            text-white font-bold py-4 px-8 rounded-full shadow-lg 
            transform transition-all hover:scale-105 active:scale-95
            disabled:cursor-not-allowed disabled:transform-none
            text-lg
          "
        >
          🎨 生成所选字母练习纸
        </button>

        <button
          onClick={generateAllLettersPDF}
          className="
            bg-gradient-to-r from-accent-500 to-accent-600 
            hover:from-accent-600 hover:to-accent-700
            text-white font-bold py-4 px-8 rounded-full shadow-lg 
            transform transition-all hover:scale-105 active:scale-95
            text-lg
          "
        >
          📚 生成全字母表练习纸
        </button>
      </div>

      <div className="mt-6 text-center text-sm text-gray-600">
        <p>✨ 练习纸将包含标准四线格和笔画顺序编号</p>
        <p>✨ 适合A4纸张打印，格子大小适合儿童书写</p>
      </div>
    </div>
  );
}
