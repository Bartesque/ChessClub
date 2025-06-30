'use client'

import React from 'react'
import styles from './ChessBoard.module.css'
import type { ChessBoardProps } from '@/types/chess'

const ChessBoard: React.FC<ChessBoardProps> = ({ 
  position = {}, 
  title = "Chess Position", 
  description = "",
  showCoordinates = true,
  className = "",
  explanation = null
}) => {
  // Generate chess board squares
  const squares = [];
  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  
  // Create 8x8 grid
  for (let rank = 8; rank >= 1; rank--) {
    for (let fileIndex = 0; fileIndex < 8; fileIndex++) {
      const file = files[fileIndex];
      const square = `${file}${rank}`;
      const pieceData = position[square] || {};
      const isLight = (fileIndex + rank) % 2 === 0;
      
      squares.push(
        <div 
          key={square}
          className={`${styles.square} ${isLight ? styles.light : styles.dark} ${
            pieceData.highlight ? styles.highlight : ''
          } ${pieceData.possibleMove ? styles.possibleMove : ''}`}
        >
          {pieceData.piece && (
            <span className={styles.piece}>{pieceData.piece}</span>
          )}
          {showCoordinates && rank === 1 && (
            <span className={styles.fileLabel}>{file}</span>
          )}
          {showCoordinates && fileIndex === 0 && (
            <span className={styles.rankLabel}>{rank}</span>
          )}
        </div>
      );
    }
  }

  return (
    <div className={`${styles.boardContainer} ${className}`}>
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
      
      <div className={styles.board}>
        {squares}
      </div>
      
      {explanation && (
        <div className={styles.explanation}>
          {explanation}
        </div>
      )}
    </div>
  );
}

export default ChessBoard;