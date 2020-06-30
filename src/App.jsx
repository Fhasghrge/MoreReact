import React, { useState, useMemo, memo } from 'react';
import { useCallback } from 'react';


const Counter = memo(function Counter (props) {
  console.log('Counter render');
  return (
    <div onClick={props.onClick}>{props.count}</div>
  )
})

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo( () => { // 依赖变量，防止频繁加载
    return count * 2
  }, [count === 3])

  /**
   * if useMemo return function => useCallback to replace it
   * when handler need, use empty array to replace
   */
  const onClick = useCallback(() => {
      console.log('Click');
  }, [])

  return (
    <div>
      <Counter count={double} onClick={onClick}></Counter>
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>={'>'} {count}
      </div>
    </div>
  );
}

export default App;
