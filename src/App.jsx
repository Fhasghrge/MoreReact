import React, { PureComponent, useState, useMemo, useEffect } from 'react';
import { useCallback } from 'react';
import { useRef } from 'react';

class Counter extends PureComponent {
  speak() {
    console.log(`now Counter is ${this.props.count}`);
  }
  render() {
    const { props } = this;
    return <div onClick={props.onClick}>{props.count}</div>;
  }
}

function App() {
  const [count, setCount] = useState(0);

  const countRef = useRef();

  const double = useMemo(() => {
    // 依赖变量，防止频繁加载
    return count * 2;
  }, [count === 3]);

  // let it;
  const it = useRef()
  /**
   * if useMemo return function => useCallback to replace it
   * when handler need, use empty array to replace
   */
  const onClick = useCallback(() => {
    console.log('Click');
    console.log(countRef.current);
    countRef.current.speak();
  }, [countRef]);

  useEffect(() => {
    it.current = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });
  return (
    <div>
      <Counter ref={countRef} count={double} onClick={onClick}></Counter>
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>={'>'} {count}
      </div>
    </div>
  );
}

export default App;
