import { ChessBoardData } from '@/types/chess';

export const pawnBasicMovement: ChessBoardData = {
  title: "Pawns Move Forward, Capture Diagonally",
  description: "Pawns are unique - they move differently than they capture! This is the only piece with this special rule.",
  position: {
    'e4': { piece: '♙', highlight: true, border: 'red' }
  },
  possibleMoves: ['e5'], // Normal one square forward
  captureSquares: ['d5', 'f5'], // Diagonal captures (shown differently)
  explanation: (
    <div className="space-y-3">
      <p>The <strong>pawn</strong> has the most unique movement rules!</p>
      <p><strong>Movement rule:</strong> Pawns move straight forward one square.</p>
      <p><strong>Capture rule:</strong> Pawns capture diagonally forward (one square diagonally).</p>
      <p><em>This is the only piece where moving and capturing are different!</em></p>
    </div>
  )
};

export const pawnFirstMove: ChessBoardData = {
  title: "Pawn's First Move - Two Squares!",
  description: "When a pawn hasn't moved yet, it has a special option to move two squares forward on its first move.",
  position: {
    'e2': { piece: '♙', highlight: true, border: 'red' }
  },
  possibleMoves: ['e3', 'e4'], // Can move 1 or 2 squares on first move
  explanation: (
    <div className="space-y-3">
      <p><strong>Special rule:</strong> On its very first move, a pawn can choose to move 1 or 2 squares forward!</p>
      <p>This pawn on e2 can move to e3 (normal) or jump to e4 (first move special).</p>
      <p>After the first move, pawns can only move one square at a time.</p>
      <p><em>This two-square option helps develop your position faster in the opening!</em></p>
    </div>
  )
};

export const pawnBlocked: ChessBoardData = {
  title: "Pawns Cannot Jump Over Pieces",
  description: "Unlike knights, pawns cannot jump. If there's a piece directly in front, the pawn is completely stuck!",
  position: {
    'e4': { piece: '♙', highlight: true, border: 'red' },
    'e5': { piece: '♞', color: 'black' } // Enemy knight blocking
  },
  possibleMoves: [], // No moves available!
  captureSquares: ['d5', 'f5'], // Can still capture diagonally
  explanation: (
    <div className="space-y-3">
      <p><strong>Blocked!</strong> This pawn cannot move forward because the black knight blocks its path.</p>
      <p>Pawns cannot jump over pieces, even enemy pieces directly in front of them.</p>
      <p>But notice: the pawn can still capture diagonally if there were enemy pieces on d5 or f5!</p>
      <p><em>Pawn blockades are a powerful defensive technique!</em></p>
    </div>
  )
};

export const pawnCaptures: ChessBoardData = {
  title: "How Pawns Capture",
  description: "Pawns capture diagonally forward - this is completely different from how they move!",
  position: {
    'e4': { piece: '♙', highlight: true, border: 'red' },
    'd5': { piece: '♝', color: 'black', highlight: true, border: 'blue' }, // Enemy bishop
    'f5': { piece: '♜', color: 'black', highlight: true, border: 'blue' }, // Enemy rook
    'e5': { piece: '♞', color: 'black' } // Enemy knight - cannot capture!
  },
  possibleMoves: [], // Blocked from moving forward
  captureSquares: ['d5', 'f5'], // Can capture both enemy pieces
  explanation: (
    <div className="space-y-3">
      <p><strong>Pawn captures:</strong> This pawn can capture the bishop on d5 or the rook on f5.</p>
      <p>But it <em>cannot</em> capture the knight on e5 because that&apos;s directly in front!</p>
      <p><strong>Remember:</strong> Pawns move forward, but capture diagonally forward.</p>
      <p>This unique rule makes pawn structure very important in chess strategy!</p>
    </div>
  )
};

export const pawnPromotion: ChessBoardData = {
  title: "Pawn Promotion - A Powerful Secret!",
  description: "When a pawn reaches the opposite end of the board, it transforms into any piece you choose (except a king)!",
  position: {
    'e7': { piece: '♙', highlight: true, border: 'red' }
  },
  possibleMoves: ['e8'], // About to promote!
  explanation: (
    <div className="space-y-3">
      <p><strong>Amazing rule:</strong> When this pawn moves to e8, it must transform into a new piece!</p>
      <p>You can choose: Queen, Rook, Bishop, or Knight. Most players choose a Queen!</p>
      <p>This means you can have <em>multiple queens</em> on the board at the same time!</p>
      <p><strong>Strategic goal:</strong> Getting a pawn to the opposite end is often a winning advantage!</p>
    </div>
  )
};

export const pawnStructure: ChessBoardData = {
  title: "Pawn Structure Basics",
  description: "How your pawns are arranged is crucial. Good pawn structure supports your pieces; bad structure creates weaknesses.",
  position: {
    'a2': { piece: '♙' }, 'b2': { piece: '♙' }, 'c2': { piece: '♙' },
    'f2': { piece: '♙' }, 'g2': { piece: '♙' }, 'h2': { piece: '♙' },
    'e4': { piece: '♙', highlight: true, border: 'red' },
    'd4': { piece: '♙', highlight: true, border: 'green' }
  },
  explanation: (
    <div className="space-y-3">
      <p><strong>Pawn chain:</strong> The pawns on d4 and e4 support each other - this is very strong!</p>
      <p>Each pawn protects the other diagonally, creating a solid foundation.</p>
      <p><strong>Principle:</strong> Connected pawns are stronger than isolated pawns.</p>
      <p><em>Good pawn structure is the foundation of all chess strategy!</em></p>
    </div>
  )
};