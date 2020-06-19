import React, { Component, memo } from 'react';
import './App.css';

/**
 * use "memo" in Function Component
 * make the render celebrate
 */
const Foo = memo(function Foo(props) {
  console.log('Foo render!');
  return <>Foo</>;
})
class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          ADD
        </button>
        <p>{this.state.count}</p>
        <Foo name="MIKE" />
      </div>
    );
  }
}
export default App;
