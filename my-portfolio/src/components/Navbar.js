import React, { Component } from 'react';
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

class NavBar extends Component {
  render() { 
    return (
      <div>
        <div>
        <h1>Meu portfolio</h1>
        </div>
        <BsInstagram />
        <BsGithub />
        <BsLinkedin />
      </div>
    );
  }
}
 
export default NavBar;