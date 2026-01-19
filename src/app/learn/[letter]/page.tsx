import { getAllLetters } from '@/data/letterStrokes';
import LetterPageClient from './client';

export function generateStaticParams() {
  const letters = getAllLetters().map(l => l.toLowerCase());
  
  return letters.map((letter) => ({
    letter: letter,
  }));
}

export default function LetterPage({
  params,
}: {
  params: { letter: string };
}) {
  return <LetterPageClient params={params} />;
}
