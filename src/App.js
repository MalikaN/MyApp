import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import PostGrid from './components/PostGrid';
import { parseString } from 'xml2js';



class App extends Component {

  componentDidMount() {

    var xml = "<root>Hello xml2js!</root>"

    parseString(xml, function (err, result) {
      console.log(result);
    });

  }

  render() {
    return (
      <Router>
      <div className="container-fullwidth">
        <Header/>
        <Route path="/content" component={Content} />
        <PostGrid/>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
