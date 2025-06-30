import { ChessBoardData } from '@/types/chess';
import React from 'react';

export const kingBasicMovement: ChessBoardData = {
  title: "The King Moves One Square",
  description: "The king is the most important piece. It can move exactly one square in any direction - forward, backward, sideways, or diagonally.",
  position: {
    'e4': { piece: '♔', highlight: true, border: 'red' }
  },
  possibleMoves: ['d3', 'd4', 'd5', 'e3', 'e5', 'f3', 'f4', 'f5'],
  explanation: (
    <div className="space-y-3">
      <p>The <span className="font-bold">king</span> is the heart of your army. If your king is captured (checkmated), you lose the game!</p>
      <p><span className="font-bold">Movement rule:</span> The king moves exactly <span className="italic">one square</span> in any direction.</p>
      <p>Study this pattern carefully - the king has 8 possible squares around it (when not blocked).</p>
    </div>
  )
};

export const kingInCorner: ChessBoardData = {
  title: "King in the Corner",
  description: "When the king is in a corner, it has fewer escape squares. This is why corners can be dangerous!",
  position: {
    'a1': { piece: '♔', highlight: true, border: 'red' }
  },
  possibleMoves: ['a2', 'b1', 'b2'],
  explanation: (
    <div className="space-y-3">
      <p>Notice how the king in the corner only has <strong>3 possible moves</strong> instead of 8.</p>
      <p>This teaches us an important principle: <em>kings are safer in the center of the board than in corners</em>.</p>
      <p>Remember this pattern - it will be crucial in endgames!</p>
    </div>
  )
};

export const kingOnEdge: ChessBoardData = {
  title: "King on the Edge",
  description: "A king on the edge of the board has limited mobility - another important pattern to remember.",
  position: {
    'e1': { piece: '♔', highlight: true, border: 'red' }
  },
  possibleMoves: ['d1', 'd2', 'e2', 'f1', 'f2'],
  explanation: (
    <div className="space-y-3">
      <p>The king on the edge has <strong>5 possible moves</strong> - more than a corner, but still limited.</p>
      <p><strong>Pattern recognition:</strong> Corner = 3 moves, Edge = 5 moves, Center = 8 moves</p>
      <p>This is why we say: <em>&quot;A king in the center is a strong king!&quot;</em></p>
    </div>
  )
};

export const kingCannotMoveThere: ChessBoardData = {
  title: "Where the King Cannot Go",
  description: "The king cannot move into danger! It cannot move to a square attacked by enemy pieces.",
  position: {
    'e4': { piece: '♔', highlight: true, border: 'red' },
    'e7': { piece: '♜', highlight: true, border: 'blue' }, // Enemy rook
  },
  possibleMoves: ['d3', 'd4', 'd5', 'f3', 'f4', 'f5'], // Cannot move to e3, e5 (rook attacks e-file)
  explanation: (
    <div className="space-y-3">
      <p>The blue rook controls the entire e-file. The king <strong>cannot move to e3 or e5</strong> because that would be moving into check!</p>
      <p><strong>Golden rule:</strong> The king can never move to a square where it would be captured.</p>
      <p>This limits the king&apos;s options and is fundamental to understanding check and checkmate.</p>
    </div>
  )
};