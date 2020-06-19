import React, { Component, PureComponent } from 'react';
import './App.css';


/**
 * PureComponent中shouldComponentUpdate只进行浅比较，对于对象不进行深度比较
 * shouldComponentUpdata进行比较时，
 * 如果传入的是内联函数，每次都需要重新渲染，如果传入的是函数名，就不会
 * 函数使用箭头函数可以使得 函数变为类的属性，不同显示绑定函数的this
 * **/
class Foo extends PureComponent {
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
