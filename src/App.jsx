import React, { Component } from 'react';
import './App.css';

class Foo extends Component {
  shouldComponentUpdate(nprops, nstate) {
    if(nprops.name === this.props.name) return false
    else return true
  }
  render() {
    console.log('Foo render!');
    return (
      <>
        Foo
      </>
    )
  }
}
class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
      <button onClick={() => this.setState({count: this.state.count + 1})}>ADD</button>
      <p>{this.state.count}</p>
      <Foo name="MIKE"/>
      </div>
    )
  }
}
export default App;
