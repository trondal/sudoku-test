import React, { useContext } from 'react';
import Block from './Block';
import Select from './Select';
import { GameContext, IState } from './GameContext';

function Board() {
  const [state] = useContext(GameContext);
  const props = state as IState;

  function getBlocks(props: IState) {
    const items = [];
    for (let index = 0; index < 9; index++) {
      items.push(
        <Block
          key={'block,' + index + 1}
          block={index + 1}
          puzzle={props.puzzle[index]}
          solution={props.solution[index]}
        ></Block>
      );
    }
    return items;
  }

  return (
    <>
      <div className="game-container">
        <div className="game">{getBlocks(props)}</div>
      </div>
      <div className="select-container">
        <Select digit={1}></Select>
        <Select digit={2}></Select>
        <Select digit={3}></Select>
        <Select digit={4}></Select>
        <Select digit={5}></Select>
        <Select digit={6}></Select>
        <Select digit={7}></Select>
        <Select digit={8}></Select>
        <Select digit={9}></Select>
      </div>
    </>
  );
}

export default Board;
