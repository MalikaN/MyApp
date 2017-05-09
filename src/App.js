import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './components/content';
import Footer from './components/Footer';
import PostGrid from './components/PostGrid';
import FetchDemo from './FetchDemo';



class App extends Component {

  

  render() {
    return (
      <Router>
      <div className="container-fullwidth">
        <Header/>
        <Route path="/content" component={Content} />
        <PostGrid/>
        <FetchDemo subreddit="reactjs" />
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
