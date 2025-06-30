import Link from 'next/link'

import { startingPosition } from '@/data/chess'
import ChessBoard from '@/components/chess/ChessBoard'

export default function WelcomeToChess() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">

      <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">
        1.1: Your Chess Board
      </h1>
      
      <div className="prose dark:prose-invert">
        <p>
          The chessboard consists of 64 squares arranged in an 8x8 grid. 
          The squares alternate between light and dark colors, traditionally 
          white and black.
        </p>
        
        <h2>Key Features:</h2>
        <ul>
          <li>8 rows (called ranks) numbered 1 to 8</li>
          <li>8 columns (called files) labeled a to h</li>
          <li>Each square has a unique coordinate (like e4 or h7)</li>
          <li>The board should be positioned with a light square in each player's right corner</li>
        </ul>
      
    </div>
      
      <ChessBoard {...startingPosition} />

      <nav className="flex justify-between pt-8 border-t">
        <Link
          href="/course/lessons/0-goal-of-game"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Goal of the Game
        </Link>
        <Link
          href="/course/lessons/2-pieces-movements"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Piece Movements →
        </Link>
      </nav>
    </div>
  )
}