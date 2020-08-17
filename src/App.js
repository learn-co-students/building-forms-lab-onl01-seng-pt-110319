import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
        {/* BandsContainer is a child of App component */}
      </div>
    );
  }
};

export default App;
