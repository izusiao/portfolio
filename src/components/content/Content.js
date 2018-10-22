import React, { Component } from 'react';
import './Content.css';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import ScrollUp from './ScrollUp';
import NavMenu from '../nav-menu/NavMenu';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact'; 

class Content extends Component {
  render() {
    return (
      <Router>
        <main className="content">
          <NavMenu />
          <ScrollUp />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </main>
      </Router>
    );
  }
}

export default Content;