import { ChessBoardData } from '@/types/chess';

export const rookBasicMovement: ChessBoardData = {
  title: "The Rook Moves in Straight Lines",
  description: "The rook is a powerful piece that moves in perfectly straight lines - horizontally and vertically, as far as it wants.",
  position: {
    'e4': { piece: '♖', highlight: true, border: 'red' }
  },
  possibleMoves: [
    // Vertical moves
    'e1', 'e2', 'e3', 'e5', 'e6', 'e7', 'e8',
    // Horizontal moves  
    'a4', 'b4', 'c4', 'd4', 'f4', 'g4', 'h4'
  ],
  explanation: (
    <div className="space-y-3">
      <p>The <strong>rook</strong> is one of the most powerful pieces on the board!</p>
      <p><strong>Movement rule:</strong> The rook moves any number of squares horizontally or vertically.</p>
      <p>Count the squares: this rook can reach <strong>14 different squares</strong> from e4!</p>
      <p><em>Think of the rook as drawing a perfect cross (+) on the board.</em></p>
    </div>
  )
};

export const rookBlocked: ChessBoardData = {
  title: "Rook Movement Can Be Blocked",
  description: "Rooks cannot jump over pieces. Other pieces block their path, just like a wall blocks your walking path.",
  position: {
    'e4': { piece: '♖', highlight: true, border: 'red' },
    'e6': { piece: '♟', color: 'white' }, // Friendly pawn blocks
    'c4': { piece: '♞', color: 'black' }  // Enemy knight blocks
  },
  possibleMoves: [
    // Can move vertically down
    'e1', 'e2', 'e3', 
    // Can move vertically up only to e5 (blocked by pawn at e6)
    'e5',
    // Can move horizontally right
    'f4', 'g4', 'h4',
    // Can move horizontally left only to d4 (blocked by knight at c4)
    'd4'
  ],
  explanation: (
    <div className="space-y-3">
      <p><strong>Important rule:</strong> Rooks cannot jump over any pieces - friendly or enemy!</p>
      <p>The white pawn at e6 <em>blocks</em> the rook from moving to e7 or e8.</p>
      <p>The black knight at c4 <em>blocks</em> the rook from moving to a4 or b4.</p>
      <p>But notice: the rook <strong>can capture</strong> the enemy knight by moving to c4!</p>
    </div>
  )
};

export const rookCaptures: ChessBoardData = {
  title: "How the Rook Captures",
  description: "The rook captures by moving to the square occupied by an enemy piece. The enemy piece is removed from the board.",
  position: {
    'e4': { piece: '♖', highlight: true, border: 'red' },
    'e7': { piece: '♝', color: 'black', highlight: true, border: 'blue' }, // Enemy bishop to capture
    'h4': { piece: '♜', color: 'black', highlight: true, border: 'blue' }, // Enemy rook to capture
    'e2': { piece: '♙', color: 'white' } // Friendly pawn - cannot capture
  },
  possibleMoves: [
    // Can move and capture
    'e1', 'e3', 'e5', 'e6', 'e7', // Can capture bishop at e7
    'a4', 'b4', 'c4', 'd4', 'f4', 'g4', 'h4', // Can capture rook at h4
  ],
  explanation: (
    <div className="space-y-3">
      <p><strong>Capturing rule:</strong> The rook captures by moving to the enemy piece's square.</p>
      <p>This rook can capture the black bishop on e7 or the black rook on h4.</p>
      <p><strong>Important:</strong> You cannot capture your own pieces! The white pawn at e2 is safe.</p>
      <p>When you capture, the enemy piece is <em>removed from the board forever</em>.</p>
    </div>
  )
};

export const rookInCorner: ChessBoardData = {
  title: "Rook Power from Different Squares",
  description: "A rook's power depends on its position. Count how many squares it controls from different positions.",
  position: {
    'a1': { piece: '♖', highlight: true, border: 'red' }
  },
  possibleMoves: [
    // From a1, can move to entire a-file and 1st rank
    'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8',
    'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'
  ],
  explanation: (
    <div className="space-y-3">
      <p>Even in the corner, this rook still controls <strong>14 squares</strong>!</p>
      <p><strong>Rook principle:</strong> A rook's power stays the same regardless of position (when unblocked).</p>
      <p>This is different from the king - remember how the king was weaker in corners?</p>
      <p><em>Rooks are consistently powerful pieces everywhere on the board!</em></p>
    </div>
  )
};