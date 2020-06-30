import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';

/**
 *
 * @param {*} count
 * return jsx as component
 */
function useCounter(count) {
  const size = useSize();
  return (
    <div>
      {count}
      <p>
        size: {size.width} x {size.height}
      </p>
    </div>
  );
}
/**
 *
 * @param {*} defaultCount
 * Hooks function
 */
function useCount(defaultCount) {
  // "self defined hook component" must start with 'use'
  const [count, setCount] = useState(defaultCount);
  const it = useRef();

  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });
  return [count, setCount];
}

function useSize() {
  const [size, setSzie] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const onResize = useCallback(() => {
    setSzie({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  }, []);
  useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  return size;
}

function App() {
  const [count, setCount] = useCount(0);
  const it = useRef();
  const Counter = useCounter(count);
  const size = useSize();
  useEffect(() => {
    it.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (count >= 10) {
      clearInterval(it.current);
    }
  });
  return (
    <div>
      {Counter}
      <div>
        <button onClick={() => setCount(count + 1)}>click</button>={'>'} {count}
      </div>
      <p>
        size: {size.width} x {size.height}
      </p>
    </div>
  );
}

export default App;
