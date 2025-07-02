'use client'

import { basicCheckmate, simpleCheck } from './chess-positions'
import ChessBoard from '@/components/chess/ChessBoard'
import Link from 'next/link'

export default function GoalOfGame() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <article className="prose dark:prose-invert prose-lg">
        <h1 className="text-4xl font-bold mb-8">Introduction to Chess</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Goal of Chess 🏆</h2>
          <p className="text-lg mb-4">
            Chess has one simple, clear goal: <strong>Checkmate your opponent&apos;s king</strong>
          </p>
          <p className="mb-4">
            That&apos;s it! You don&apos;t need to capture all the pieces or get the most points. 
            You just need to safely capture one special piece - the king.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What is Checkmate? 👑</h2>
          <p className="mb-4">
            <strong>Checkmate means the king is trapped and cannot escape.</strong>
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The enemy king is under attack</li>
            <li>The king cannot move to any safe square</li>
            <li>No other piece can help save the king</li>
            <li><strong>You win the game immediately!</strong></li>
          </ul>
          <p className="mb-4">
            The word &quot;Checkmate&quot; comes from the Persian phrase &quot;Shah Mat&quot; meaning &quot;the king is dead.&quot;
          </p>
          <div className="my-6">
            <ChessBoard
              position={basicCheckmate.position}
              title={basicCheckmate.title}
              description={basicCheckmate.description}
            />
            <p className="mt-2">
              This shows a basic checkmate position. Notice how:
            </p>
            <ul className="list-disc pl-6">
              <li>The black king is trapped in the corner</li>
              <li>The white queen controls all escape squares</li>
              <li>The white king supports the queen</li>
            </ul>
          </div>
          <div className="my-6">
            <ChessBoard
              position={simpleCheck.position}
              title={simpleCheck.title}
              description={simpleCheck.description}
            />
            <p className="mt-2">
              This shows a check (not checkmate) where:
            </p>
            <ul className="list-disc pl-6">
              <li>The black king is under attack</li>
              <li>But can escape to multiple squares</li>
            </ul>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why the King is Special</h2>
          <ul className="list-disc pl-6">
            <li><strong>Most Important Piece:</strong> If your king is captured, you lose instantly</li>
            <li><strong>Cannot be Sacrificed:</strong> You must always keep your king safe</li>
            <li><strong>Game Ender:</strong> Every chess game ends with checkmate or agreement to draw</li>
            <li><strong>Historical Connection:</strong> Represents the ancient kings who led armies into conflict</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Key Terms to Remember</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border px-4 py-2">Term</th>
                  <th className="border px-4 py-2">Definition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Chess</td>
                  <td className="border px-4 py-2">A strategy game where two players try to checkmate each other&apos;s king</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">King</td>
                  <td className="border px-4 py-2">The most important piece - if captured, you lose the game</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Checkmate</td>
                  <td className="border px-4 py-2">When the king is trapped and cannot escape - game over!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </article>

      <nav className="flex justify-between pt-8 border-t">
        <Link
          href="/course/lessons/coming-soon"
          className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
        >
          ← Previous: Introduction
        </Link>
        <Link
          href="/course/lessons/1-board-setup"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next: Board Setup →
        </Link>
      </nav>
    </div>
  )
}