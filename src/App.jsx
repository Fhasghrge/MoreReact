import React, { useState } from 'react';
import './App.css';

const App = (props) => {

  // useState use function paras to lazy init to celebrate
  const [count, setCount] = useState(() => {
    console.log('init Count');
    return props.defaultCount || 0
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <p>{count}</p>
    </div>
  );
}
export default App;
