import React, { useState, useEffect } from 'react';
import Block from './Block';

const GameBoard = () => {
  const [blocks, setBlocks] = useState([]);
  const [currentBlock, setCurrentBlock] = useState({ x: 5, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock(prev => ({ ...prev, y: prev.y + 1 }));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentBlock.y > 19) {
      setBlocks(prev => [...prev, currentBlock]);
      setCurrentBlock({ x: 5, y: 0 });
    }
  }, [currentBlock]);

  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft' && currentBlock.x > 0) {
      setCurrentBlock(prev => ({ ...prev, x: prev.x - 1 }));
    } else if (e.key === 'ArrowRight' && currentBlock.x < 9) {
      setCurrentBlock(prev => ({ ...prev, x: prev.x + 1 }));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentBlock]);

  return (
    <div className="game-board">
      {blocks.map((block, index) => (
        <Block key={index} x={block.x} y={block.y} />
      ))}
      <Block x={currentBlock.x} y={currentBlock.y} />
    </div>
  );
};

export default GameBoard;
