import ChessBoard from '@/components/chess/ChessBoard';
import React from 'react';
import Link from 'next/link';
import {
  kingPositions,
  rookPositions,
  bishopPositions,
  queenPositions,
  knightPositions,
  pawnPositions
} from './pieces-moves';

export default function Lesson01PieceMovements() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Lesson Header */}
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Lesson 1: How Chess Pieces Move
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Master the foundation of chess by learning how each piece moves and captures. 
        </p>
      </header>

      {/* Learning Objectives */}
      <section className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Learning Objectives</h2>
        <ul className="space-y-2 text-gray-700">
          <li>✓ Understand how each piece moves and captures</li>
          <li>✓ Recognize the relative power of each piece</li>
          <li>✓ Learn fundamental patterns for piece placement</li>
          <li>✓ Build pattern recognition through repetition</li>
        </ul>
      </section>

      {/* King Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-yellow-400 pb-2">
          🤴 The King - Most Important Piece
        </h2>
        <div className="space-y-12">
          {kingPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Rook Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-400 pb-2">
          🏰 The Rook - Straight Line Power
        </h2>
        <div className="space-y-12">
          {rookPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Bishop Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-purple-400 pb-2">
          ⛪ The Bishop - Diagonal Master
        </h2>
        <div className="space-y-12">
          {bishopPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Queen Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-pink-400 pb-2">
          👸 The Queen - Ultimate Power
        </h2>
        <div className="space-y-12">
          {queenPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Knight Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-green-400 pb-2">
          🐴 The Knight - L-Shaped Jumper
        </h2>
        <div className="space-y-12">
          {knightPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Pawn Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b-2 border-orange-400 pb-2">
          ♟️ The Pawn - Small but Mighty
        </h2>
        <div className="space-y-12">
          {pawnPositions.map((position, index) => (
            <div key={index} className="space-y-4">
              <ChessBoard {...position} />
            </div>
          ))}
        </div>
      </section>

      {/* Practice Section */}
      <section className="bg-green-50 p-6 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold text-green-800">
          🎯 Practice Assignment
        </h2>
        <div className="text-green-700 space-y-2">
          <p><strong>Before moving to Lesson 2:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Review each piece movement pattern until automatic</li>
            <li>Practice identifying possible moves from different positions</li>
            <li>Memorize piece values: Pawn=1, Knight/Bishop=3, Rook=5, Queen=9</li>
            <li>Quiz yourself: "Where can this piece move from here?"</li>
          </ul>
        </div>
      </section>

      {/* Russian Method Progress Tracker */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Russian Method Progress</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span>Lesson 0: Goal of the Game ✓</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span>Lesson 1: Piece Movements (Current)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Lesson 2: Basic Checkmates</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span>Lesson 3: Fundamental Tactics</span>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <nav className="flex justify-between pt-8 border-t">
        <Link
          href="/course/lessons/0-goal-of-game"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Goal of the Game
        </Link>
        <Link
          href="/course/lessons/coming-soon"
          className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors"
        >
          Next: Basic Checkmates (Coming Soon) →
        </Link>
      </nav>
    </div>
  );
}
