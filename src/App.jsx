import React, { useState, useMemo, memo } from 'react';


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

  const onClick = useMemo(() => { // 只会添加一次句柄
    return () => {
      console.log('Click');
    }
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
