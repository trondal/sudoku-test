import React from 'react';
import Square from './Square';

interface BlockProps {
  solution: number[];
  puzzle: number[];
  block: number;
}

function Block(props: BlockProps) {
  function getSquares(props: BlockProps) {
    const items = [];
    for (let index = 0; index < 9; index++) {
      items.push(
        <Square
          key={'square,' + props.block + ',' + index + 1}
          block={props.block}
          position={index + 1}
          puzzle={props.puzzle[index]}
          solution={props.solution[index]}
        ></Square>
      );
    }
    return items;
  }
  return <div className="block">{getSquares(props)}</div>;
}

export default Block;
