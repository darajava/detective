import React, { Component } from 'react';

import MainLayout from './components/containers/MainLayout/MainLayout'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <MainLayout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
