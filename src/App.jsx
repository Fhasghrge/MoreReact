import React, { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  };
  useEffect(() => { // 在DidMount DidUpdate
    document.title = count;
  });
  useEffect(() => { // 在DisMount WillUmount
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);// 只有数组的每一项都不变，useEffect才不会执行

  useEffect(() => {
    console.log('effect')
  }, [size])
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click</button>
      ={">"} {count}
      <div>
        size: {size.width} x {size.height}
      </div>
    </div>
  );
}

export default App;
