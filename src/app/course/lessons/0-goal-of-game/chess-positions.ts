import type { ChessBoardData } from '@/types/chess'

export const basicCheckmate: ChessBoardData = {
  position: {
    'h8': { piece: '♚', highlight: true },
    'g7': { piece: '♕' },
    'f8': { piece: '♔' }
  },
  title: "Basic Checkmate Example",
  description: "Queen + King vs King - The Goal of Chess"
}

export const simpleCheck: ChessBoardData = {
  position: {
    'e8': { piece: '♚', highlight: true },
    'e1': { piece: '♖' },
    'a1': { piece: '♔' }
  },
  title: "Simple Check Example", 
  description: "King under attack but can escape"
}