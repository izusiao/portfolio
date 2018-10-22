import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
/* import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
import ScrollUp from './components/content/ScrollUp';
import NavMenu from './components/nav-menu/NavMenu';
import Home from './components/content/home/Home';
import About from './components/content/about/About';
import Projects from './components/content/projects/Projects';
import Contact from './components/content/contact/Contact'; */

ReactDOM.render(
    <App />, 
    document.getElementById('root'));
registerServiceWorker();

/* ReactDOM.render(
    <Router>
        <App />
        <NavMenu />
        <ScrollUp />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
    </Router>, 
    document.getElementById('root'));
registerServiceWorker(); */