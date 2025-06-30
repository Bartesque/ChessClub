import { ChessBoardData } from '@/types/chess';

export const knightBasicMovement: ChessBoardData = {
  title: "The Knight Moves in an L-Shape",
  description: "The knight is the most unique piece - it moves in an L-shape: 2 squares in one direction, then 1 square perpendicular.",
  position: {
    'e4': { piece: '♘', highlight: true, border: 'red' }
  },
  possibleMoves: ['d2', 'f2', 'c3', 'g3', 'c5', 'g5', 'd6', 'f6'],
  explanation: (
    <div className="space-y-3">
      <p>The <strong>knight</strong> is the most unusual piece on the board!</p>
      <p><strong>Movement rule:</strong> The knight moves in an L-shape - exactly 2 squares in one direction, then 1 square at a right angle.</p>
      <p>From e4, this knight has <strong>8 possible moves</strong>. Each move forms a perfect L!</p>
      <p><em>Think: &quot;2 squares + 1 square at a right angle = L-shape&quot;</em></p>
    </div>
  )
};

export const knightLShapePattern: ChessBoardData = {
  title: "Understanding the L-Shape Pattern",
  description: "Let's trace one knight move step by step to understand the L-shape clearly.",
  position: {
    'e4': { piece: '♘', highlight: true, border: 'red' },
    'f6': { piece: '♘', color: 'gray', highlight: true, border: 'green' } // Destination
  },
  // Show the path with special highlighting
  pathHighlight: {
    'e5': { background: '#ffeb3b', opacity: 0.7 }, // Step 1: up 1
    'e6': { background: '#ffeb3b', opacity: 0.7 }, // Step 2: up 2  
    'f6': { background: '#4caf50', opacity: 0.8 }  // Step 3: right 1
  },
  explanation: (
    <div className="space-y-3">
      <p><strong>Step-by-step L-shape:</strong> From e4 to f6</p>
      <p>1. Move <strong>2 squares up</strong>: e4 → e5 → e6</p>
      <p>2. Then <strong>1 square right</strong>: e6 → f6</p>
      <p>This creates the L-shape! The knight could also go 2 right, then 1 up for the same destination.</p>
      <p><em>The L can be oriented 8 different ways from any square.</em></p>
    </div>
  )
};

export const knightJumping: ChessBoardData = {
  title: "Knights Can Jump Over Pieces!",
  description: "This is the knight's superpower - it's the ONLY piece that can jump over other pieces!",
  position: {
    'e4': { piece: '♘', highlight: true, border: 'red' },
    // Surround with pieces to show jumping
    'd3': { piece: '♟', color: 'white' },
    'e3': { piece: '♟', color: 'white' },
    'f3': { piece: '♟', color: 'white' },
    'd4': { piece: '♜', color: 'black' },
    'f4': { piece: '♜', color: 'black' },
    'd5': { piece: '♟', color: 'white' },
    'e5': { piece: '♟', color: 'white' },
    'f5': { piece: '♟', color: 'white' }
  },
  possibleMoves: ['d2', 'f2', 'c3', 'g3', 'c5', 'g5', 'd6', 'f6'],
  explanation: (
    <div className="space-y-3">
      <p><strong>Amazing!</strong> Even completely surrounded, the knight can still make all 8 moves!</p>
      <p><strong>Jumping rule:</strong> Knights ignore all pieces in their path - they simply jump over them.</p>
      <p>No other piece can do this! Rooks, bishops, and queens all get blocked by pieces.</p>
      <p><em>This makes knights excellent for breaking through crowded positions!</em></p>
    </div>
  )
};

export const knightFromCorner: ChessBoardData = {
  title: "Knight Power Depends on Position",
  description: "Unlike rooks, knights are much weaker near the edges and corners of the board.",
  position: {
    'a1': { piece: '♘', highlight: true, border: 'red' }
  },
  possibleMoves: ['b3', 'c2'],
  explanation: (
    <div className="space-y-3">
      <p>From the corner, this knight only has <strong>2 possible moves</strong>!</p>
      <p>Compare this to the center where a knight has 8 moves.</p>
      <p><strong>Knight principle:</strong> &quot;A knight on the rim is dim&quot; - keep knights centralized!</p>
      <p><em>Knights are strongest in the center, weakest on the edges and corners.</em></p>
    </div>
  )
};

export const knightFromEdge: ChessBoardData = {
  title: "Knight on the Edge",
  description: "Knights on the edge are better than in corners, but still not ideal.",
  position: {
    'e1': { piece: '♘', highlight: true, border: 'red' }
  },
  possibleMoves: ['d3', 'f3', 'c2', 'g2'],
  explanation: (
    <div className="space-y-3">
      <p>From the edge, this knight has <strong>4 possible moves</strong>.</p>
      <p><strong>Pattern:</strong> Corner = 2 moves, Edge = 3-4 moves, Center = 8 moves</p>
      <p>This is why we say: <em>&quot;Centralize your knights!&quot;</em></p>
      <p>Remember: Corner rooks had 14 moves, but corner knights only have 2!</p>
    </div>
  )
};

export const knightCaptures: ChessBoardData = {
  title: "How Knights Capture",
  description: "Knights capture just like they move - by jumping to the enemy piece's square in an L-shape.",
  position: {
    'e4': { piece: '♘', highlight: true, border: 'red' },
    'f6': { piece: '♝', color: 'black', highlight: true, border: 'blue' }, // Enemy bishop
    'c5': { piece: '♜', color: 'black', highlight: true, border: 'blue' }, // Enemy rook
    'd2': { piece: '♟', color: 'white' } // Friendly pawn - safe
  },
  possibleMoves: ['d2', 'f2', 'c3', 'g3', 'c5', 'g5', 'd6', 'f6'],
  explanation: (
    <div className="space-y-3">
      <p><strong>Capturing:</strong> The knight can capture the black bishop on f6 or the black rook on c5.</p>
      <p>Knights capture exactly like they move - by jumping in an L-shape to the enemy piece.</p>
      <p>The white pawn on d2 is safe because it&apos;s your own piece.</p>
      <p><em>Knights can capture any enemy piece they can legally move to!</em></p>
    </div>
  )
};