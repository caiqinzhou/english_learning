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
      { path: 'M 35 75 L 50 20', order: 1 },
      { path: 'M 50 20 L 65 75', order: 2 },
      { path: 'M 38 55 L 62 55', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 45 L 30 75 Q 30 82 37 82 Q 50 82 60 70 Q 65 65 65 55 L 65 45', order: 1 },
      { path: 'M 65 75 Q 65 82 60 82 Q 55 82 52 80', order: 2 },
    ],
  },
  {
    letter: 'B',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 20 Q 55 20 60 30 Q 65 40 60 50 Q 55 55 30 55', order: 2 },
      { path: 'M 30 55 Q 55 55 60 65 Q 65 75 60 80 Q 55 80 30 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 50 40 60 50 Q 65 60 60 70 Q 55 80 30 80', order: 2 },
    ],
  },
  {
    letter: 'C',
    uppercase: [
      { path: 'M 65 30 Q 55 20 45 20 Q 30 20 25 35 L 25 65 Q 25 80 45 80 Q 55 80 65 70', order: 1 },
    ],
    lowercase: [
      { path: 'M 60 45 Q 50 40 45 40 Q 35 40 30 50 L 30 70 Q 30 80 45 80 Q 50 80 60 75', order: 1 },
    ],
  },
  {
    letter: 'D',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 20 Q 50 20 60 30 Q 70 40 70 50 Q 70 60 60 70 Q 50 80 30 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 50 40 60 50 Q 65 60 60 70 Q 55 80 30 80', order: 2 },
    ],
  },
  {
    letter: 'E',
    uppercase: [
      { path: 'M 30 20 L 70 20', order: 1 },
      { path: 'M 30 20 L 30 80', order: 2 },
      { path: 'M 30 50 L 60 50', order: 3 },
      { path: 'M 30 80 L 70 80', order: 4 },
    ],
    lowercase: [
      { path: 'M 30 50 L 65 50 Q 70 50 70 55 Q 70 70 60 80 Q 50 85 35 85 Q 25 85 25 70 L 25 55 Q 25 40 35 40 Q 50 40 60 45', order: 1 },
    ],
  },
  {
    letter: 'F',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 20 L 70 20', order: 2 },
      { path: 'M 30 50 L 60 50', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 40 L 65 40', order: 2 },
    ],
  },
  {
    letter: 'G',
    uppercase: [
      { path: 'M 65 30 Q 55 20 45 20 Q 30 20 25 35 L 25 65 Q 25 80 45 80 Q 55 80 65 70 L 65 50 L 45 50', order: 1 },
    ],
    lowercase: [
      { path: 'M 60 45 Q 50 40 45 40 Q 35 40 30 50 L 30 70 Q 30 80 45 80 Q 50 80 60 75 L 60 90 L 45 90', order: 1 },
    ],
  },
  {
    letter: 'H',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 65 20 L 65 80', order: 2 },
      { path: 'M 30 50 L 65 50', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 30 40 40 40 Q 50 40 60 50 Q 65 55 65 80', order: 2 },
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
      { path: 'M 30 25 Q 32 25 32 27 Q 32 30 30 30 L 28 30 Q 25 30 25 27 Q 25 25 28 25 L 32 25', order: 1 },
      { path: 'M 30 40 L 30 80', order: 2 },
    ],
  },
  {
    letter: 'J',
    uppercase: [
      { path: 'M 30 20 L 70 20', order: 1 },
      { path: 'M 50 20 L 50 70 Q 50 80 40 80 Q 30 80 30 70', order: 2 },
    ],
    lowercase: [
      { path: 'M 35 25 Q 37 25 37 27 Q 37 30 35 30 L 33 30 Q 30 30 30 27 Q 30 25 33 25 L 37 25', order: 1 },
      { path: 'M 35 40 L 35 85 Q 35 95 25 95 Q 15 95 15 85', order: 2 },
    ],
  },
  {
    letter: 'K',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 70 20 L 30 50', order: 2 },
      { path: 'M 35 50 L 70 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 65 40 L 30 60', order: 2 },
      { path: 'M 35 60 L 65 80', order: 3 },
    ],
  },
  {
    letter: 'L',
    uppercase: [
      { path: 'M 30 20 L 30 80', order: 1 },
      { path: 'M 30 80 L 70 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 80 L 65 80', order: 2 },
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
      { path: 'M 20 45 L 20 80', order: 1 },
      { path: 'M 20 50 Q 20 45 30 45 Q 35 45 40 50 L 40 80', order: 2 },
      { path: 'M 40 50 Q 40 45 50 45 Q 55 45 60 50 L 60 80', order: 3 },
    ],
  },
  {
    letter: 'N',
    uppercase: [
      { path: 'M 30 80 L 30 20', order: 1 },
      { path: 'M 30 20 L 65 80', order: 2 },
      { path: 'M 65 80 L 65 20', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 45 L 30 80', order: 1 },
      { path: 'M 30 45 Q 30 40 40 40 Q 50 40 60 50 Q 65 55 65 80', order: 2 },
    ],
  },
  {
    letter: 'O',
    uppercase: [
      { path: 'M 47.5 20 Q 30 20 25 35 L 25 65 Q 25 80 47.5 80 Q 65 80 65 65 L 65 35 Q 65 20 47.5 20', order: 1 },
    ],
    lowercase: [
      { path: 'M 47.5 40 Q 35 40 30 50 L 30 70 Q 30 80 47.5 80 Q 65 80 65 70 L 65 50 Q 65 40 47.5 40', order: 1 },
    ],
  },
  {
    letter: 'P',
    uppercase: [
      { path: 'M 30 80 L 30 20', order: 1 },
      { path: 'M 30 20 Q 55 20 65 30 Q 70 40 65 50 Q 60 55 30 55', order: 2 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 50 40 60 50 Q 65 60 60 70 Q 55 80 30 80', order: 2 },
    ],
  },
  {
    letter: 'Q',
    uppercase: [
      { path: 'M 47.5 20 Q 30 20 25 35 L 25 65 Q 25 80 47.5 80 Q 65 80 65 65 L 65 35 Q 65 20 47.5 20', order: 1 },
      { path: 'M 55 70 L 70 85', order: 2 },
    ],
    lowercase: [
      { path: 'M 47.5 40 Q 35 40 30 50 L 30 70 Q 30 80 47.5 80 Q 65 80 65 70 L 65 50 Q 65 40 47.5 40', order: 1 },
      { path: 'M 55 75 L 70 90', order: 2 },
    ],
  },
  {
    letter: 'R',
    uppercase: [
      { path: 'M 30 80 L 30 20', order: 1 },
      { path: 'M 30 20 Q 55 20 65 30 Q 70 40 65 50 Q 60 55 30 55', order: 2 },
      { path: 'M 40 55 L 70 80', order: 3 },
    ],
    lowercase: [
      { path: 'M 30 15 L 30 80', order: 1 },
      { path: 'M 30 45 Q 50 40 60 50 Q 65 60 60 70 Q 55 80 30 80', order: 2 },
    ],
  },
  {
    letter: 'S',
    uppercase: [
      { path: 'M 65 30 Q 55 20 45 20 Q 30 20 25 35 Q 25 45 35 50 Q 55 55 55 65 Q 55 80 45 80 Q 30 80 25 70', order: 1 },
    ],
    lowercase: [
      { path: 'M 60 45 Q 50 40 45 40 Q 35 40 30 50 Q 30 55 40 60 Q 55 65 55 70 Q 55 80 45 80 Q 35 80 30 70', order: 1 },
    ],
  },
  {
    letter: 'T',
    uppercase: [
      { path: 'M 25 20 L 70 20', order: 1 },
      { path: 'M 47.5 20 L 47.5 80', order: 2 },
    ],
    lowercase: [
      { path: 'M 47.5 40 L 47.5 80', order: 1 },
      { path: 'M 30 40 L 65 40', order: 2 },
    ],
  },
  {
    letter: 'U',
    uppercase: [
      { path: 'M 30 20 L 30 65 Q 30 80 47.5 80 Q 65 80 65 65 L 65 20', order: 1 },
    ],
    lowercase: [
      { path: 'M 30 40 L 30 70 Q 30 80 47.5 80 Q 65 80 65 70 L 65 40', order: 1 },
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
      { path: 'M 30 40 L 47.5 70', order: 1 },
      { path: 'M 47.5 70 L 65 40', order: 2 },
      { path: 'M 47.5 70 L 47.5 85', order: 3 },
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
