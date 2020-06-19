import React, { createContext, Component } from 'react';
import './App.css';
const BatteryContext = createContext(90);
class Left extends Component {
  static contextType = BatteryContext;
  render() {
    return (
        <h1>battery: {this.context}</h1>
    )
  }
}
class Middle extends Component {
  render () {
    return <Left />;
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 80,
    };
  }
  render() {
    return (
      <BatteryContext.Provider value={this.state.value}>
        <button
          onClick={() =>
            this.setState((pre) => ({
              value: pre.value - 1,
            }))
          }
        >
          Press
        </button>
        <Middle />
      </BatteryContext.Provider>
    );
  }
}

export default App;
