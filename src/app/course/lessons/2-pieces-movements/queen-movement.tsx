import { ChessBoardData } from '@/types/chess';

export const queenBasicMovement: ChessBoardData = {
  title: "The Queen: Most Powerful Piece",
  description: "The queen combines the power of both rook and bishop. She moves in straight lines AND diagonally!",
  position: {
    'e4': { piece: '♕', highlight: true, border: 'red' }
  },
  possibleMoves: [
    // Rook-like moves (horizontal and vertical)
    'e1', 'e2', 'e3', 'e5', 'e6', 'e7', 'e8',
    'a4', 'b4', 'c4', 'd4', 'f4', 'g4', 'h4',
    // Bishop-like moves (diagonal)
    'd3', 'c2', 'b1', 'f3', 'g2', 'h1',
    'd5', 'c6', 'b7', 'a8', 'f5', 'g6', 'h7'
  ],
  explanation: (
    <div className="space-y-3">
      <p>The <strong>queen</strong> is the most powerful piece on the chessboard!</p>
      <p><strong>Movement rule:</strong> Queen = Rook + Bishop movements combined.</p>
      <p>From e4, this queen can reach an amazing <strong>27 different squares</strong>!</p>
      <p><em>The queen moves like a rook OR like a bishop - in any direction, any distance.</em></p>
    </div>
  )
};

export const queenVersusRookAndBishop: ChessBoardData = {
  title: "Queen Power Comparison",
  description: "Let's compare: one queen versus a rook and bishop working together. See the difference in coverage!",
  position: {
    'e4': { piece: '♕', highlight: true, border: 'red' },
    'a8': { piece: '♖', color: 'black', highlight: true, border: 'blue' },
    'h1': { piece: '♗', color: 'black', highlight: true, border: 'blue' }
  },
  possibleMoves: [
    // Queen's full range from e4
    'e1', 'e2', 'e3', 'e5', 'e6', 'e7', 'e8',
    'a4', 'b4', 'c4', 'd4', 'f4', 'g4', 'h4',
    'd3', 'c2', 'b1', 'f3', 'g2', 'h1',
    'd5', 'c6', 'b7', 'a8', 'f5', 'g6', 'h7'
  ],
  explanation: (
    <div className="space-y-3">
      <p><strong>Amazing fact:</strong> This single queen controls 27 squares!</p>
      <p>The black rook on a8 controls 14 squares + the black bishop on h1 controls 7 squares = 21 total.</p>
      <p>So one queen is <em>more powerful</em> than a rook and bishop combined!</p>
      <p><strong>Remember:</strong> With great power comes great responsibility - don't lose your queen!</p>
    </div>
  )
};

export const queenBlocked: ChessBoardData = {
  title: "Even Queens Can Be Blocked",
  description: "Despite her power, the queen follows the same blocking rules as rooks and bishops.",
  position: {
    'e4': { piece: '♕', highlight: true, border: 'red' },
    'e6': { piece: '♟', color: 'white' }, // Friendly pawn
    'c4': { piece: '♜', color: 'black' }, // Enemy rook
    'f5': { piece: '♞', color: 'black' }  // Enemy knight
  },
  possibleMoves: [
    // Vertical: blocked by pawn at e6
    'e1', 'e2', 'e3', 'e5',
    // Horizontal: blocked by rook at c4  
    'd4', 'f4', 'g4', 'h4',
    // Diagonals: various blocks
    'd3', 'c2', 'b1', 'f3', 'g2', 'h1',
    'd5', 'c6', 'b7', 'a8'
    // Cannot reach f5 or beyond due to knight block
  ],
  explanation: (
    <div className="space-y-3">
      <p><strong>Important:</strong> Even the mighty queen cannot jump over pieces!</p>
      <p>The friendly pawn blocks vertical movement up the e-file.</p>
      <p>The enemy rook at c4 can be captured, but blocks further movement.</p>
      <p>The enemy knight at f5 can be captured and blocks the up-right diagonal.</p>
    </div>
  )
};

export const queenSafety: ChessBoardData = {
  title: "Queen Safety is Critical",
  description: "Because the queen is so valuable, she must be kept safe. Losing your queen usually means losing the game!",
  position: {
    'e4': { piece: '♕', highlight: true, border: 'red' },
    'e7': { piece: '♜', color: 'black', highlight: true, border: 'orange' },
    'a4': { piece: '♗', color: 'black', highlight: true, border: 'orange' },
    'h1': { piece: '♞', color: 'black', highlight: true, border: 'orange' }
  },
  explanation: (
    <div className="space-y-3">
      <p><strong>Danger!</strong> This queen is under attack by three enemy pieces!</p>
      <p>The queen is worth about <strong>9 points</strong> - more than a rook (5) + bishop (3) + knight (3)!</p>
      <p><strong>Golden rule:</strong> Always keep your queen safe. Don't bring her out too early.</p>
      <p><em>"Don't bring your queen out early" - one of the most important opening principles!</em></p>
    </div>
  )
};