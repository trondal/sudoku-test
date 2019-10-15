import React, { useContext, useState } from 'react';
import { GameContext, IState } from './GameContext';

interface SquareProps {
  solution: number;
  puzzle: number;
  block: number;
  position: number;
}

function Square(props: SquareProps) {
  const [state, dispatch] = useContext(GameContext);

  const [checked, setChecked] = useState(false);

  function onChecked(dispatch: any) {
    if (checked) {
      setChecked(false);
    } else {
      dispatch({ type: 'UNCHECK' });
      setChecked(true);
    }
  }

  return (
    <div
      id={props.block + ',' + props.position}
      className={checked ? 'square clicked-square' : 'square'}
      onClick={() => onChecked(dispatch)}
      title={props.solution.toString()}
    >
      {props.puzzle !== 0 ? props.puzzle : ''}
    </div>
  );
}

export default Square;
