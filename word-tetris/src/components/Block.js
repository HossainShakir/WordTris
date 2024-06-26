import React from 'react';
import './Block.css';

const Block = ({ x, y }) => {
  const style = {
    position: 'absolute',
    left: `${x * 30}px`,
    top: `${y * 30}px`,
    width: '30px',
    height: '30px',
    backgroundColor: 'blue',
  };

  return <div style={style}></div>;
};

export default Block;
