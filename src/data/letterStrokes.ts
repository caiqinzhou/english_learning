export interface Stroke {
  path: string;
  order: number;
}

export interface LetterData {
  letter: string;
  uppercase: Stroke[];
  lowercase: Stroke[];
}

export const letterStrokes: LetterData[] = [
  {
    letter: 'A',
    uppercase: [
      { path: 'M 30 80 L 50 20', order: 1 },
      { path: 'M 50 20 L 70 80', order: 2 },
      { path: 'M 37 55 L 63 55', order: 3 },
    ],
    lowercase: [
      { path: 'M 60 40 Q 70 35 70 45 L 70 75 Q 70 80 65 80 Q 40 80 35 70 Q 30 60 35 50 Q 40 40 60 40', order: 1 },
      { path: 'M 70 45 L 70 75', order: 2 },
    ],
  },
  {
    letter: 'B',
    uppercase: [
      { path: 'M 25 20 L 25 80', order: 1 },
      { path: 'M 25 20 Q 50 20 55 30 Q 60 40 55 50 Q 50 50 25 50', order: 2 },
      { path: 'M 25 50 Q 55 50 60 60 Q 65 70 60 75 Q 55 80 25 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 55 40 60 50 Q 65 60 60 70 Q 55 80 30 80', order: 2 },
    ],
  },
  {
    letter: 'C',
    uppercase: [
      { path: 'M 70 30 Q 60 20 45 20 Q 30 20 25 35 L 25 65 Q 25 80 45 80 Q 60 80 70 70', order: 1 },
    ],
    lowercase: [
      { path: 'M 65 45 Q 55 40 45 40 Q 35 40 30 50 L 30 70 Q 30 80 45 80 Q 55 80 65 75', order: 1 },
    ],
  },
  {
    letter: 'D',
    uppercase: [
      { path: 'M 25 20 L 25 80', order: 1 },
      { path: 'M 25 20 Q 50 20 60 30 Q 70 40 70 50 Q 70 60 60 70 Q 50 80 25 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 65 15 L 65 80', order: 1 },
      { path: 'M 65 45 Q 55 40 45 40 Q 35 40 30 50 L 30 70 Q 30 80 45 80 Q 55 80 65 75 L 65 80', order: 2 },
    ],
  },
  {
    letter: 'E',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 20 L 65 20', order: 2 },
      { path: 'M 30 50 L 60 50', order: 3 },
      { path: 'M 30 80 L 65 80', order: 4 },
    ],
    lowercase: [
      { path: 'M 30 60 L 65 60 Q 70 60 70 65 Q 70 70 65 75 Q 60 80 45 80 Q 35 80 30 70 L 30 50 Q 30 40 45 40 Q 60 40 65 45', order: 1 },
    ],
  },
  {
    letter: 'F',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 20 L 65 20', order: 2 },
      { path: 'M 30 50 L 60 50', order: 3 },
    ],
    lowercase: [
      { path: 'M 55 15 Q 60 15 65 20', order: 1 },
      { path: 'M 40 15 L 40 80', order: 2 },
      { path: 'M 25 40 L 60 40', order: 3 },
    ],
  },
  {
    letter: 'G',
    uppercase: [
      { path: 'M 70 30 Q 60 20 45 20 Q 30 20 25 35 L 25 65 Q 25 80 45 80 Q 60 80 70 70 L 70 50 L 50 50', order: 1 },
    ],
    lowercase: [
      { path: 'M 65 45 Q 55 40 45 40 Q 35 40 30 50 L 30 70 Q 30 80 45 80 Q 55 80 65 75 L 65 95 Q 65 100 55 100 Q 45 100 35 95', order: 1 },
    ],
  },
  {
    letter: 'H',
    uppercase: [
      { path: 'M 25 20 L 25 80', order: 1 },
      { path: 'M 70 20 L 70 80', order: 2 },
      { path: 'M 25 50 L 70 50', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 50 Q 30 40 45 40 Q 60 40 65 45 L 65 80', order: 2 },
    ],
  },
  {
    letter: 'I',
    uppercase: [
      { path: 'M 30 20 L 65 20', order: 1 },
      { path: 'M 47.5 20 L 47.5 80', order: 2 },
      { path: 'M 30 80 L 65 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 47.5 25 Q 50 25 50 27.5 Q 50 30 47.5 30 Q 45 30 45 27.5 Q 45 25 47.5 25', order: 1 },
      { path: 'M 47.5 40 L 47.5 80', order: 2 },
    ],
  },
  {
    letter: 'J',
    uppercase: [
      { path: 'M 30 20 L 65 20', order: 1 },
      { path: 'M 47.5 20 L 47.5 70 Q 47.5 80 37.5 80 Q 27.5 80 27.5 70', order: 2 },
    ],
    lowercase: [
      { path: 'M 52.5 25 Q 55 25 55 27.5 Q 55 30 52.5 30 Q 50 30 50 27.5 Q 50 25 52.5 25', order: 1 },
      { path: 'M 52.5 40 L 52.5 85 Q 52.5 95 42.5 95 Q 32.5 95 32.5 85', order: 2 },
    ],
  },
  {
    letter: 'K',
    uppercase: [
      { path: 'M 25 20 L 25 80', order: 1 },
      { path: 'M 70 20 L 25 50', order: 2 },
      { path: 'M 35 50 L 70 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 65 40 L 30 60', order: 2 },
      { path: 'M 40 60 L 65 80', order: 3 },
    ],
  },
  {
    letter: 'L',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 80 L 65 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 47.5 15 L 47.5 80', order: 1 },
    ],
  },
  {
    letter: 'M',
    uppercase: [
      { path: 'M 20 80 L 20 20', order: 1 },
      { path: 'M 20 20 L 47.5 50', order: 2 },
      { path: 'M 47.5 50 L 75 20', order: 3 },
      { path: 'M 75 20 L 75 80', order: 4 },
    ],
    lowercase: [
      { path: 'M 20 40 L 20 80', order: 1 },
      { path: 'M 20 45 Q 20 40 30 40 Q 40 40 42.5 45 L 42.5 80', order: 2 },
      { path: 'M 42.5 45 Q 42.5 40 52.5 40 Q 62.5 40 65 45 L 65 80', order: 3 },
    ],
  },
  {
    letter: 'N',
    uppercase: [
      { path: 'M 25 80 L 25 20', order: 1 },
      { path: 'M 25 20 L 70 80', order: 2 },
      { path: 'M 70 80 L 70 20', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 40 L 30 80', order: 1 },
      { path: 'M 30 45 Q 30 40 45 40 Q 60 40 65 45 L 65 80', order: 2 },
    ],
  },
  {
    letter: 'O',
    uppercase: [
      { path: 'M 47.5 20 Q 30 20 25 35 L 25 65 Q 25 80 47.5 80 Q 70 80 70 65 L 70 35 Q 70 20 47.5 20', order: 1 },
    ],
    lowercase: [
      { path: 'M 47.5 40 Q 35 40 30 50 L 30 70 Q 30 80 47.5 80 Q 65 80 65 70 L 65 50 Q 65 40 47.5 40', order: 1 },
    ],
  },
  {
    letter: 'P',
    uppercase: [
      { path: 'M 25 80 L 25 20', order: 1 },
      { path: 'M 25 20 Q 50 20 60 30 Q 70 40 60 50 Q 50 55 25 55', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 40 L 30 95', order: 1 },
      { path: 'M 30 45 Q 30 40 45 40 Q 60 40 65 50 Q 70 60 65 70 Q 60 80 45 80 Q 30 80 30 75', order: 2 },
    ],
  },
  {
    letter: 'Q',
    uppercase: [
      { path: 'M 47.5 20 Q 30 20 25 35 L 25 65 Q 25 80 47.5 80 Q 70 80 70 65 L 70 35 Q 70 20 47.5 20', order: 1 },
      { path: 'M 60 70 L 75 85', order: 2 },
    ],
    lowercase: [
      { path: 'M 35 45 Q 30 40 45 40 Q 60 40 65 50 L 65 70 Q 65 80 45 80 Q 30 80 30 75 L 30 50 Q 30 40 35 40', order: 1 },
      { path: 'M 65 75 L 65 95', order: 2 },
    ],
  },
  {
    letter: 'R',
    uppercase: [
      { path: 'M 25 80 L 25 20', order: 1 },
      { path: 'M 25 20 Q 50 20 60 30 Q 70 40 60 50 Q 50 55 25 55', order: 2 },
      { path: 'M 45 55 L 70 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 40 L 30 80', order: 1 },
      { path: 'M 30 45 Q 30 40 45 40 Q 55 40 60 45', order: 2 },
    ],
  },
  {
    letter: 'S',
    uppercase: [
      { path: 'M 65 30 Q 60 20 45 20 Q 30 20 25 30 Q 25 40 35 45 Q 60 55 60 65 Q 60 80 45 80 Q 30 80 25 70', order: 1 },
    ],
    lowercase: [
      { path: 'M 60 45 Q 55 40 45 40 Q 35 40 30 45 Q 30 52.5 40 57.5 Q 55 62.5 55 70 Q 55 80 45 80 Q 35 80 30 75', order: 1 },
    ],
  },
  {
    letter: 'T',
    uppercase: [
      { path: 'M 25 20 L 70 20', order: 1 },
      { path: 'M 47.5 20 L 47.5 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 40 25 L 40 75 Q 40 80 47.5 80 Q 55 80 60 75', order: 1 },
      { path: 'M 30 40 L 60 40', order: 2 },
    ],
  },
  {
    letter: 'U',
    uppercase: [
      { path: 'M 25 20 L 25 65 Q 25 80 47.5 80 Q 70 80 70 65 L 70 20', order: 1 },
    ],
    lowercase: [
      { path: 'M 30 40 L 30 70 Q 30 80 45 80 Q 60 80 65 75 L 65 80', order: 1 },
      { path: 'M 65 40 L 65 80', order: 2 },
    ],
  },
  {
    letter: 'V',
    uppercase: [
      { path: 'M 25 20 L 47.5 80', order: 1 },
      { path: 'M 47.5 80 L 70 20', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 40 L 47.5 80', order: 1 },
      { path: 'M 47.5 80 L 65 40', order: 2 },
    ],
  },
  {
    letter: 'W',
    uppercase: [
      { path: 'M 20 20 L 30 80', order: 1 },
      { path: 'M 30 80 L 47.5 45', order: 2 },
      { path: 'M 47.5 45 L 65 80', order: 3 },
      { path: 'M 65 80 L 75 20', order: 4 },
    ],
    lowercase: [
      { path: 'M 25 40 L 35 80', order: 1 },
      { path: 'M 35 80 L 47.5 55', order: 2 },
      { path: 'M 47.5 55 L 60 80', order: 3 },
      { path: 'M 60 80 L 70 40', order: 4 },
    ],
  },
  {
    letter: 'X',
    uppercase: [
      { path: 'M 25 20 L 70 80', order: 1 },
      { path: 'M 70 20 L 25 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 40 L 65 80', order: 1 },
      { path: 'M 65 40 L 30 80', order: 2 },
    ],
  },
  {
    letter: 'Y',
    uppercase: [
      { path: 'M 25 20 L 47.5 50', order: 1 },
      { path: 'M 70 20 L 47.5 50', order: 2 },
      { path: 'M 47.5 50 L 47.5 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 40 L 52.5 75 L 52.5 95 Q 52.5 100 45 100 Q 37.5 100 32.5 95', order: 1 },
      { path: 'M 65 40 L 52.5 75', order: 2 },
    ],
  },
  {
    letter: 'Z',
    uppercase: [
      { path: 'M 25 20 L 70 20', order: 1 },
      { path: 'M 70 20 L 25 80', order: 2 },
      { path: 'M 25 80 L 70 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 40 L 65 40', order: 1 },
      { path: 'M 65 40 L 30 80', order: 2 },
      { path: 'M 30 80 L 65 80', order: 3 },
    ],
  },
];

export const getLetterData = (letter: string): LetterData | undefined => {
  return letterStrokes.find(
    (l) => l.letter.toLowerCase() === letter.toLowerCase()
  );
};

export const getAllLetters = (): string[] => {
  return letterStrokes.map((l) => l.letter);
};
