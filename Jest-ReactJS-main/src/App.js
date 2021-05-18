import React, { Component } from 'react';
import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hello title='Hello Unit Testing With Jest' />
      </div>
    );
  }
}

export default App;
