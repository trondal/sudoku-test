import React from 'react';

interface SelectProps {
  digit: number;
}

function Square(props: SelectProps) {
  return (
    <div className="select">
      <div>{props.digit}</div>
    </div>
  );
}

export default Square;
