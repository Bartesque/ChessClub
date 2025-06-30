import { ChessBoardData } from '@/types/chess';
import {
  kingBasicMovement,
  kingInCorner,
  kingOnEdge,
  kingCannotMoveThere
} from './king-movement';
import {
  rookBasicMovement,
  rookBlocked,
  rookCaptures,
  rookInCorner
} from './rook-movement';
import {
  bishopBasicMovement,
  bishopColorBound,
  bishopBlocked,
  bishopCornerTrap
} from './bishop-movement';
import {
  queenBasicMovement,
  queenVersusRookAndBishop,
  queenBlocked,
  queenSafety
} from './queen-movement';
import {
  knightBasicMovement,
  knightLShapePattern,
  knightJumping,
  knightFromCorner,
  knightFromEdge,
  knightCaptures
} from './knight-movement';
import {
  pawnBasicMovement,
  pawnFirstMove,
  pawnBlocked,
  pawnCaptures,
  pawnPromotion,
  pawnStructure
} from './pawn-movement';

export const kingPositions: ChessBoardData[] = [
  kingBasicMovement,
  kingInCorner,
  kingOnEdge,
  kingCannotMoveThere
];

export const rookPositions: ChessBoardData[] = [
  rookBasicMovement,
  rookBlocked,
  rookCaptures,
  rookInCorner
];

export const bishopPositions: ChessBoardData[] = [
  bishopBasicMovement,
  bishopColorBound,
  bishopBlocked,
  bishopCornerTrap
];

export const queenPositions: ChessBoardData[] = [
  queenBasicMovement,
  queenVersusRookAndBishop,
  queenBlocked,
  queenSafety
];

export const knightPositions: ChessBoardData[] = [
  knightBasicMovement,
  knightLShapePattern,
  knightJumping,
  knightFromCorner,
  knightFromEdge,
  knightCaptures
];

export const pawnPositions: ChessBoardData[] = [
  pawnBasicMovement,
  pawnFirstMove,
  pawnBlocked,
  pawnCaptures,
  pawnPromotion,
  pawnStructure
];