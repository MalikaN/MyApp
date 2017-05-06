import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/content';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="container">
        <Header/>
        <Route path="/content" component={Content} />
      </div>
      </Router>
    );
  }
}

export default App;
