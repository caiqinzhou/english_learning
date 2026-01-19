'use client';

import { useState, useEffect } from 'react';

interface AudioPlayerProps {
  letter: string;
  autoPlay?: boolean;
}

export default function AudioPlayer({ letter, autoPlay = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    if (autoPlay) {
      playSound();
    }
  }, [letter, autoPlay]);

  const playSound = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(letter);
      
      const englishVoice = voices.find(
        (voice) => voice.lang.startsWith('en') && voice.name.includes('US')
      ) || voices.find((voice) => voice.lang.startsWith('en'));

      if (englishVoice) {
        utterance.voice = englishVoice;
      }

      utterance.lang = 'en-US';
      utterance.rate = 0.7;
      utterance.pitch = 1.2;
      utterance.volume = 1;

      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      utterance.onerror = () => setIsPlaying(false);

      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <button
      onClick={playSound}
      disabled={isPlaying}
      className={`
        bg-gradient-to-r from-accent-400 to-accent-500 
        hover:from-accent-500 hover:to-accent-600
        text-white font-bold py-4 px-8 rounded-full 
        shadow-lg transform transition-all 
        hover:scale-105 active:scale-95
        disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center gap-3
      `}
    >
      <span className="text-3xl">{isPlaying ? '🔊' : '🔉'}</span>
      <span className="text-xl">听发音</span>
    </button>
  );
}
