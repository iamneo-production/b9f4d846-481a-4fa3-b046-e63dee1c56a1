import React from 'react';
import './styles/sidebar.css';
import About from './About';
import { Link } from 'react-router-dom';

class Sidenav extends React.Component {
  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav} >&times;</a>
          <a className='side-btn'><Link to='/About'>About</Link> </a>
          <a className='side-btn'><Link to='/main'>Assignments</Link></a>
          <a className='side-btn'><Link to='/main'>Certification</Link></a>
          <a className='side-btn'><Link to='/class'>Virtual Classroom</Link></a>
          <a className='side-btn'><Link to='/main'>Drives</Link></a>
          <a className='side-btn'><Link to='/dash'>Dashboard</Link></a>
        </div>
        <span style={{ fontSize: '50px', cursor: 'pointer' ,marginLeft: '10px', color:'white',paddingBottom:'10px'}} onClick={this.openNav}>&#9776;</span>
      </div>
    );
  }
}

export default Sidenav;
