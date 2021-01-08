import React, { Reducer, useReducer } from 'react';

type stateType = {
  count: number;
};

const UseReduce = () => {
  const reduceHandle = (state: number, action: string) => {
    switch (action) {
      case 'add':
        return state + 1;

      default:
        return state;
    }
  };

  const [count, countDispatch] = useReducer<Reducer<number, string>>(reduceHandle, 0);

  const clickHandle = () => {
    countDispatch('add');
  };
  return (
    <div>
      {count}
      <div></div>
      <button onClick={clickHandle}>butoon</button>
    </div>
  );
};

export default UseReduce;
