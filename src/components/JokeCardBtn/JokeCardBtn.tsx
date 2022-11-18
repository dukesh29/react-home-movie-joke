import React from 'react';

interface Props {
  onClick:React.MouseEventHandler;
}

const JokeCardBtn:React.FC<Props> = ({onClick}) => {
  return (
    <div>
      <button onClick={onClick}>Go</button>
    </div>
  );
};

export default JokeCardBtn;