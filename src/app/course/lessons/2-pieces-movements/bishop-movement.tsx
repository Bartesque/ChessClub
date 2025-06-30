import { ChessBoardData } from '@/types/chess';

export const bishopBasicMovement: ChessBoardData = {
  title: "The Bishop Moves Diagonally",
  description: "The bishop moves in perfectly diagonal lines, as far as it wants. Think of it as drawing an X on the board.",
  position: {
    'e4': { piece: '♗', highlight: true, border: 'red' }
  },
  possibleMoves: [
    // Up-right diagonal
    'f5', 'g6', 'h7',
    // Up-left diagonal  
    'd5', 'c6', 'b7', 'a8',
    // Down-right diagonal
    'f3', 'g2', 'h1',
    // Down-left diagonal
    'd3', 'c2', 'b1'
  ],
  explanation: (
    <div className="space-y-3">
      <p>The <strong>bishop</strong> is a long-range piece that moves diagonally!</p>
      <p><strong>Movement rule:</strong> The bishop moves any number of squares diagonally.</p>
      <p>From e4, this bishop can reach <strong>13 different squares</strong>.</p>
      <p><em>Think of the bishop as drawing a perfect X on the board.</em></p>
    </div>
  )
};

export const bishopColorBound: ChessBoardData = {
  title: "Bishops Are Color-Bound",
  description: "This is the most important thing to understand about bishops: they can only move on squares of one color!",
  position: {
    'e4': { piece: '♗', highlight: true, border: 'red' }
  },
  possibleMoves: [
    'd3', 'c2', 'b1', 'f3', 'g2', 'h1', 
    'd5', 'c6', 'b7', 'a8', 'f5', 'g6', 'h7'
  ],
  boardHighlight: {
    // Highlight all light squares to show the pattern
    lightSquares: ['a2', 'a4', 'a6', 'a8', 'c2', 'c4', 'c6', 'c8', 'e2', 'e4', 'e6', 'e8', 'g2', 'g4', 'g6', 'g8', 'b1', 'b3', 'b5', 'b7', 'd1', 'd3', 'd5', 'd7', 'f1', 'f3', 'f5', 'f7', 'h1', 'h3', 'h5', 'h7']
  },
  explanation: (
    <div className="space-y-3">
      <p><strong>Critical concept:</strong> This bishop started on a light square (e4) and can <em>only ever move to light squares</em>!</p>
      <p>Look carefully - every square the bishop can reach is the same color as where it started.</p>
      <p>Each player starts with <strong>two bishops</strong>: one for light squares, one for dark squares.</p>
      <p><em>A bishop can never change the color of squares it travels on!</em></p>
    </div>
  )
};

export const bishopBlocked: ChessBoardData = {
  title: "Bishop Movement Can Be Blocked",
  description: "Like rooks, bishops cannot jump over pieces. Any piece in the diagonal path blocks the bishop.",
  position: {
    'e4': { piece: '♗', highlight: true, border: 'red' },
    'f5': { piece: '♟', color: 'white' }, // Friendly pawn blocks
    'c6': { piece: '♞', color: 'black' }, // Enemy knight 
    'd3': { piece: '♛', color: 'black' }  // Enemy queen
  },
  possibleMoves: [
    // Up-right: blocked by friendly pawn at f5
    // Up-left: can move to d5, but blocked by knight at c6
    'd5',
    // Down-right: can move to f3, g2, h1
    'f3', 'g2', 'h1',
    // Down-left: blocked by enemy queen at d3 (but can capture it)
    'd3'
  ],
  explanation: (
    <div className="space-y-3">
      <p><strong>Blocking rule:</strong> Bishops cannot jump over any pieces!</p>
      <p>The friendly pawn at f5 blocks movement up-right completely.</p>
      <p>The enemy knight at c6 blocks the path to b7 and a8.</p>
      <p>But the bishop <strong>can capture</strong> the enemy queen at d3!</p>
    </div>
  )
};

export const bishopCornerTrap: ChessBoardData = {
  title: "Bishop in the Corner - A Trap!",
  description: "Unlike rooks, bishops become much weaker near the edges and corners of the board.",
  position: {
    'a1': { piece: '♗', highlight: true, border: 'red' }
  },
  possibleMoves: ['b2', 'c3', 'd4', 'e5', 'f6', 'g7', 'h8'],
  explanation: (
    <div className="space-y-3">
      <p>From the corner, this bishop only controls <strong>7 squares</strong> - much less than from the center!</p>
      <p><strong>Bishop principle:</strong> Bishops are strongest in the center, weakest in corners.</p>
      <p>Compare this to the rook - remember how the rook was equally strong everywhere?</p>
      <p><em>Keep your bishops active and centralized whenever possible!</em></p>
    </div>
  )
};