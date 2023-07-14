
import './App.css';
import StudentRegester from './Components/StudentRegester';
import TeacherRegester from './Components/TeacherRegester';
import Regester from './Components/Regester';
import Login from './Components/Login';
import About from './Components/About';
import {Routes,Route} from "react-router-dom";
// import { AuthProvider } from './Components/context/AuthContex';
import {firebase} from './config';
import { useState,useEffect } from 'react';
import MainPage from './Components/MainPage';
import Sidenav from './Components/sidebar';
import { Dashboard } from '@mui/icons-material';
// import SignInSignUpPage from './Components/demo';
import DashBoard from './Components/dashboad';
import Details1 from './Components/details';
import Classroom from './Components/class';
import PaymentPage from './Components/PaymentPage';
function App() {
  // const [initializing,setInitializing] =useState(true);

  // const [user,setUser]=useState();
  // function onAuthStateChanged(user){
  //   setUser(user);
  //   if(initializing) setInitializing(false);
  // }
  // useEffect(()=>{
  //   const subscriber =firebase.auth().onAuthStateChanged(onAuthStateChanged);
  //   return subscriber;
  // },[]);
  // if(initializing) return null;
  // if(!user){
    return(
      <Routes>

      <Route path="/" element={<Login/>}></Route>
      <Route path="/Regester" element={<Regester/>}></Route>
      <Route path="/TeacherRegister" element={<TeacherRegester/>}></Route>
      <Route path="/StudentRegister" element={<StudentRegester/>}></Route>
     
      {/* </Routes>
    );
  }
  return (
    <div className="App">

      <Routes> */}
      <Route path='/main' element={<MainPage/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/dash' element={<DashBoard/>}></Route>
      <Route path='/details1' element={<Details1/>}></Route>
      <Route path='/class' element={<Classroom/>}></Route>
      <Route path='/PaymentPage' element={<PaymentPage/>}></Route>
      </Routes>

    // </div>
  );
}

export default App;
