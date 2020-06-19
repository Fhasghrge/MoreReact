import React, { Component, lazy, Suspense } from 'react';
import './App.css';

const About = lazy(() => import(/* webpackChunkName: "about"*/ './about.jsx'));

// ErrorBoundary
// ComponentDidCatch
class App extends Component {
  state = {
    hasError: false,
  };
  // 捕获边界错误
  // componentDidCatch() {
  //   this.setState({
  //     hasError: true,
  //   });
  // }
  static getDerivedStateFromError() {
    return {
      hasError: true
    }
  }
  render() {
    if (this.state.hasError) {
      return <div>Error</div>;
    }
    return (
      <>
        <Suspense fallback={<div>loading...</div>}>
          <About />
        </Suspense>
      </>
    );
  }
}
export default App;
