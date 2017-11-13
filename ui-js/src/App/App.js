import React, { Component } from 'react';

import Header from '../containers/Header/Header';
import Content from '../containers/Content/Content';
import Footer from '../containers/Footer/Footer';
import './app.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
