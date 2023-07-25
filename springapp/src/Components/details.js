import './styles/details.css'
import Navbar from './Navbar'
import tutor1 from "./images/tutor1.jpeg"
import { useState } from "react";
import ReactStars from 'react-rating-star-with-type'
import img6 from './images/img6.png'
import { Link } from 'react-router-dom';
function Details1(){
  const [star, setStar] = useState(5);

  const onChange=(nextValue)=>{
      setStar(nextValue)
  }
  return(
 
    <div>

      <Navbar />
       <div className='det-title'>
         <div className='det-text'>
           <h1>JavaScript</h1>
           <h3>
           JavaScript is a popular programming language used for web development. It allows for dynamic and interactive website functionality by enabling client-side scripting. JavaScript is also commonly used for server-side development, desktop applications, and even mobile app development. Its versatility and widespread adoption make it an essential tool for modern web development.
          </h3>
          <div className='ReactStars'>

          <ReactStars 
    onChange={onChange} 
    value={4.2}  
    edit={true}  
    activeColors={[ "red", "orange", "#FFCE00", "#FFCE00","#FFCE00",]} 
    />
    </div>
    <p className='rate'>12,000+ Ratings</p>
          <img src={tutor1}></img><p className='tut-name-det'>Mr. Balaji</p>
          <Link to='/PaymentPage'>

          <button>
            Enroll Now
          </button>
          </Link>
       </div>
      </div>
      <div className='det-img'>
        <img src={img6}></img>
      </div>
     </div>
  )
}
export default Details1