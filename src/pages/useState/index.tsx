import React, { useState, useCallback, useMemo, useEffect } from 'react';

const Hooks = () => {
  const [state, setState] = useState('这个是useSate');
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('1111');
    const timeId = setInterval(() => {
      console.log('定时器触发');
    }, 1000);
    return () => {
      console.log('清空副作用');
      clearInterval(timeId);
    };
  }, [state]);

  const clickHandle = useCallback(() => {
    console.log('方法一改变state');
    setState('改变state的值'); // 直接改变state
  }, []); // TODO: [] 是监听useCallback的依赖变量

  const clickHandleCount = useCallback(() => {
    console.log('改变count');
    setCount(count => {
      return count + 1;
    });
  }, []);

  const reactNode = useMemo(() => {
    return (
      <div>
        <p>useMemo返回的{state}</p>
      </div>
    );
  }, [state]);

  const clickHandleFaunction = useCallback(() => {
    console.log('方法一改变state');
    setState(state => {
      return `${state}:我改变了state`; // TODO: 传入一个函数在函数中操作改变state,一定要有返回值 : 函数参数就是state的值
    });
  }, []);
  return (
    <div>
      <div>{count}</div>
      {reactNode}
      <p>{state}</p>
      <button onClick={clickHandle}>改变值得方法一</button>
      <button onClick={clickHandleFaunction}>改变值的方法二</button>
      <button onClick={clickHandleCount}>改变count</button>
    </div>
  );
};

export default Hooks;
