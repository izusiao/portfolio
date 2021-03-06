import React, { Component } from 'react';
import { stack as Menu } from 'react-burger-menu';
import './NavMenu.css';
import logo from '../img/logo-img.JPG';
import { Link } from 'react-router-dom';


class NavMenu extends Component {
  constructor(){
    super();
    this.state = {
      menuOpen: false
    }
  }
  closeMenu () {
    this.setState({menuOpen: false})
  }
  render () {
    return (
      <Menu 
        customCrossIcon={ false }
        isOpen={this.state.menuOpen}>
          <div id="about-me">
            <div id="img-about-me"><img className="img-circle" src={logo} alt={"It's me"} /></div>
            <span id="text-about-me">Izabela Ozga</span> 
          </div>
          <div id="nav">
            <Link onClick={()=>this.closeMenu()} to="/" id="home" className="menu-item">Home</Link>
            <Link onClick={()=>this.closeMenu()} to="/about" id="about" className="menu-item">About me</Link>
            <Link onClick={()=>this.closeMenu()} to="/projects" id="projects" className="menu-item">Projects</Link>
            <Link onClick={()=>this.closeMenu()} to="/contact" id="contact" className="menu-item">Contact</Link>
          </div>
      </Menu>
    );
  }
}

export default NavMenu;