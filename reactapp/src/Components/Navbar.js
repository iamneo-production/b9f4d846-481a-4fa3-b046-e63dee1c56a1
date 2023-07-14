import './styles/Navbar.css'
import Sidenav from "./sidebar";
import {firebase} from "../config";
import logo from "./styles/images/logo1.png"
import logo2 from "./styles/images/logo2.png"

import { useState } from 'react';
import { Link } from 'react-router-dom';
function Navbar(){
  
  return(
    <div className="nav-part">

             <nav className="navigation">
              <Sidenav/>
              <img className="logo-img" src={logo}></img>
            <h1 id="title">MyEducator</h1>
        <div className="navigation-menu">
         <ul>
           <li className="li">
             <Link to='/main'><button>Home</button></Link>
           </li>
           <li className="li">
             <button>Courses</button>
           </li>
           
           <li className="list2"><div class="dropdown">
  <button class="dropbtn"><img src={logo2} className="drop-image"></img> </button>
  <div class="dropdown-content">
    <a className='drop'>My Profile</a>
    <a className='drop' style={{color:'black'}}><Link to='/dash'>Dashboard</Link></a>
    <Link to='/'>
      
    <a className='drop' 
    // onClick={()=>{firebase.auth().signOut()}}
    >Logout</a>
    </Link>
  </div>
</div>
           </li>
          
          
         </ul>
       </div> 
     </nav>
      </div>
  )
}
export default Navbar;