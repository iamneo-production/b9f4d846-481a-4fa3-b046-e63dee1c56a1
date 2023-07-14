import React, { useState } from 'react';
import './styles/TeacherRegister.css';
import { useDispatch } from 'react-redux';
import { login } from '../user';
import { Link } from 'react-router-dom';
function StudentRegister() {
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setPname(e.target.value);
  }

  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Student Registration</h2>
        <form className='form__body'>
          <div className="group">
            <label htmlFor="firstName">First Name</label>
            <input className="form__control" type="text" value={pname} onChange={handleChange} id="firstName" placeholder=""/>
          </div>
          <div className="form-group">
              <label htmlFor="password">Last Name</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Email</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Contact</label>
              <input type="number" id="exp" className="form-control" placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">College Name</label>
              <input  type="text" id="exp" className="form-control"  placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Age</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input  type="text" id="exp" className="form-control"  placeholder=""/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input  type="text" id="exp" className="form-control" placeholder=""/>
            </div>
          <Link to='/main'>

          <button type="submit" className="btn-primary1" onClick={() => dispatch(login({ name: pname }))}>
            Register
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default StudentRegister;
