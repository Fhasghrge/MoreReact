import React, { useState, createContext, useContext } from 'react';

const CountContext = createContext();

function Counter () {
  const count = useContext(CountContext)
  return (
    <div>{count}</div>
  )
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={count}>
        <Counter/>
      </CountContext.Provider>
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>={'>'} {count}
      </div>
    </div>
  );
}

export default App;
