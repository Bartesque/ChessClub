export interface ChessPiece {
  piece: string;           // Unicode chess piece (♔♕♖♗♘♙♚♛♜♝♞♟)
  highlight?: boolean;     // Yellow highlight with red border
  possibleMove?: boolean;  // Blue highlight for valid moves
  border?: string;         // Border color (e.g. 'red', 'blue')
  color?: string;          // Piece color ('white' or 'black')
}

export interface ChessPosition {
  [square: string]: ChessPiece;  // e.g., 'e4': { piece: '♔', highlight: true }
}

export interface ChessBoardData {
  position: ChessPosition;
  title: string;
  description: string;
  explanation?: React.ReactNode;  // Rich explanation with JSX
  possibleMoves?: string[];       // Array of possible move squares
  pathHighlight?: Record<string, any>; // Special path highlighting
  captureSquares?: string[];      // Squares that can be captured
}

export interface ChessBoardProps {
  position?: ChessPosition;
  title?: string;
  description?: string;
  showCoordinates?: boolean;
  className?: string;
  explanation?: React.ReactNode;
}