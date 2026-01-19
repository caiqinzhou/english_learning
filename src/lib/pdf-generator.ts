import jsPDF from 'jspdf';
import { getLetterData, getAllLetters } from '@/data/letterStrokes';

const A4_WIDTH = 210;
const A4_HEIGHT = 297;
const MARGIN = 15;
const GRID_SIZE = 30;
const GRID_COUNT = 5;

export function generatePracticePDF(letters: string[], includeUppercase: boolean, includeLowercase: boolean) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  let currentPage = 1;
  let yPosition = MARGIN + 10;

  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('英文字母书写练习纸', A4_WIDTH / 2, MARGIN, { align: 'center' });

  yPosition = MARGIN + 20;

  letters.forEach((letter, letterIndex) => {
    const letterData = getLetterData(letter);
    if (!letterData) return;

    if (includeUppercase) {
      if (yPosition + GRID_SIZE + 20 > A4_HEIGHT - MARGIN) {
        doc.addPage();
        yPosition = MARGIN;
        currentPage++;
      }

      drawLetterRow(
        doc,
        letterData.letter.toUpperCase(),
        letterData.uppercase,
        yPosition,
        true
      );
      yPosition += GRID_SIZE + 15;
    }

    if (includeLowercase) {
      if (yPosition + GRID_SIZE + 20 > A4_HEIGHT - MARGIN) {
        doc.addPage();
        yPosition = MARGIN;
        currentPage++;
      }

      drawLetterRow(
        doc,
        letterData.letter.toLowerCase(),
        letterData.lowercase,
        yPosition,
        false
      );
      yPosition += GRID_SIZE + 15;
    }

    if (letterIndex < letters.length - 1) {
      yPosition += 5;
    }
  });

  const fileName = `letter-practice-${letters.join('')}.pdf`;
  doc.save(fileName);
}

function drawLetterRow(
  doc: jsPDF,
  letter: string,
  strokes: any[],
  yPosition: number,
  isUppercase: boolean
) {
  const startX = MARGIN;
  
  drawWritingGrid(doc, startX, yPosition, GRID_SIZE);
  
  drawLetterWithNumbers(doc, letter, strokes, startX, yPosition, GRID_SIZE);

  for (let i = 1; i <= GRID_COUNT; i++) {
    const gridX = startX + GRID_SIZE + i * (GRID_SIZE + 5);
    drawWritingGrid(doc, gridX, yPosition, GRID_SIZE);
  }
}

function drawWritingGrid(doc: jsPDF, x: number, y: number, size: number) {
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.3);
  doc.rect(x, y, size, size);

  doc.setDrawColor(150, 200, 255);
  doc.setLineWidth(0.2);
  doc.line(x, y + size / 4, x + size, y + size / 4);
  doc.line(x, y + size / 2, x + size, y + size / 2);
  doc.line(x, y + (size * 3) / 4, x + size, y + (size * 3) / 4);
}

function drawLetterWithNumbers(
  doc: jsPDF,
  letter: string,
  strokes: any[],
  x: number,
  y: number,
  size: number
) {
  doc.setFontSize(32);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 100, 100);
  
  const textWidth = doc.getTextWidth(letter);
  const textX = x + (size - textWidth) / 2;
  const textY = y + size * 0.7;
  
  doc.text(letter, textX, textY);

  doc.setFontSize(8);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(250, 180, 50);

  strokes.forEach((stroke, index) => {
    const pathStart = getPathStartPoint(stroke.path);
    const numberX = x + (pathStart.x / 100) * size - 2;
    const numberY = y + (pathStart.y / 120) * size + 2;
    doc.text(stroke.order.toString(), numberX, numberY);
  });
}

function getPathStartPoint(path: string): { x: number; y: number } {
  const match = path.match(/M\s*([\d.]+)\s*([\d.]+)/);
  if (match) {
    return { x: parseFloat(match[1]), y: parseFloat(match[2]) };
  }
  return { x: 0, y: 0 };
}

export function generateAllLettersPDF() {
  const allLetters = getAllLetters();
  generatePracticePDF(allLetters, true, true);
}
