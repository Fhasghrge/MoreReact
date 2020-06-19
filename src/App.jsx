import React, { createContext, Component } from 'react';
import './App.css';
const Battery = createContext();
const Online = createContext();
function Left() {
  return (
    <Battery.Consumer>
      {(battery) => (
        <Online.Consumer>
          {(online) => (
            <h1>
              battery: {battery}, online: {String(online)}
            </h1>
          )}
        </Online.Consumer>
      )}
    </Battery.Consumer>
  );
}
function Middle() {
  return <Left />;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 80,
      online: true,
    };
  }
  render() {
    return (
      <Battery.Provider value={this.state.value}>
        <Online.Provider value={this.state.online}>
          <button
            onClick={() =>
              this.setState((pre) => ({
                value: pre.value - 1,
              }))
            }
          >
            Press
          </button>
          <button
            onClick={() =>
              this.setState((pre) => ({
                online: !pre.online,
              }))
            }
          >
            Switch
          </button>
          <Middle />
        </Online.Provider>
      </Battery.Provider>
    );
  }
}

export default App;
