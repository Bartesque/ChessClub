export interface ChessPiece {
  piece: string;           // Unicode chess piece (♔♕♖♗♘♙♚♛♜♝♞♟)
  highlight?: boolean;     // Yellow highlight with red border
  possibleMove?: boolean;  // Blue highlight for valid moves
}

export interface ChessPosition {
  [square: string]: ChessPiece;  // e.g., 'e4': { piece: '♔', highlight: true }
}

export interface ChessBoardData {
  position: ChessPosition;
  title: string;
  description: string;
  explanation?: React.ReactNode;  // Rich explanation with JSX
}

export interface ChessBoardProps {
  position?: ChessPosition;
  title?: string;
  description?: string;
  showCoordinates?: boolean;
  className?: string;
  explanation?: React.ReactNode;
}