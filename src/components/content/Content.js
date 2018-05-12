import React, { Component } from 'react';
import NavMenu from '../nav-menu/NavMenu';
import ScrollUp from './ScrollUp';
import Home from './home/Home';
import About from './about/About';
import './Content.css';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';


  class Content extends Component {
    render() {
      return (
          <Router>
            <main className="content">
                <NavMenu />
                <ScrollUp />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
            </main>
          </Router>

    );
  }
}

export default Content;