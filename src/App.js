import './App.css';
// import Login from './components/signUp/login/Login';
import SignupForm from './components/signUp/SignUp';
import Home from './components/Home/Home';
import Login from './components/signUp/login/Login';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
// import { useState , useEffect } from 'react';
// import { auth } from './Firebase';
import Protected from './Protected';
function App() {
//   const [userName,setUserName]= useState('')
//   useEffect(()=>{
//      auth.onAuthStateChanged((user)=>{
//       console.log(userName)
//       if(user){
//        setUserName(user.displayName)
//       }else{
//         setUserName('')
// // console.log(userName,'usernam')
//       }
//      })
//   },[])
  return (
    <div className='App'>
      <Router>
        <Routes>
        <Route path='/login' element={<Login/>}/>

          <Route path='/signup' element={<SignupForm/>}/>
          <Route path='/' element={<Protected Component={Home}/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
