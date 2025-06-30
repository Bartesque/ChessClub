import type { ChessBoardData } from '@/types/chess'

export const startingPosition: ChessBoardData = {
  position: {
    'a1': { piece: '♖' },
    'b1': { piece: '♘' },
    'c1': { piece: '♗' },
    'd1': { piece: '♕' },
    'e1': { piece: '♔' },
    'f1': { piece: '♗' },
    'g1': { piece: '♘' },
    'h1': { piece: '♖' },
    'a2': { piece: '♙' },
    'b2': { piece: '♙' },
    'c2': { piece: '♙' },
    'd2': { piece: '♙' },
    'e2': { piece: '♙' },
    'f2': { piece: '♙' },
    'g2': { piece: '♙' },
    'h2': { piece: '♙' },
    'a7': { piece: '♟' },
    'b7': { piece: '♟' },
    'c7': { piece: '♟' },
    'd7': { piece: '♟' },
    'e7': { piece: '♟' },
    'f7': { piece: '♟' },
    'g7': { piece: '♟' },
    'h7': { piece: '♟' },
    'a8': { piece: '♜' },
    'b8': { piece: '♞' },
    'c8': { piece: '♝' },
    'd8': { piece: '♛' },
    'e8': { piece: '♚' },
    'f8': { piece: '♝' },
    'g8': { piece: '♞' },
    'h8': { piece: '♜' }
  },
  title: "Standard Chess Starting Position",
  description: "Initial setup for a game of chess",
  explanation: `
    This is how every chess game begins:
    - Pawns on the second rank
    - Rooks in the corners
    - Knights next to rooks
    - Bishops next to knights
    - Queen on her color
    - King on the remaining square
  `
}