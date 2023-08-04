import React from 'react'
// import { Link } from 'react-router-dom'
import img from './img/undraw_Sign_up_n6im(2).png'
import './home.css'
import { Link } from 'react-router-dom'
import { useState , useEffect } from 'react';
import { auth,db } from '../../Firebase';
import { addDoc, collection } from 'firebase/firestore';
// import { Firestore, addDoc ,collection } from 'firebase/firestore';
function Home() {
  // const [user,setUser]=useState([])
  const [displayName,setDisplayName]=useState([])
  //  useEffect(()=>{
  //   const user =auth.currentUser;
  //  setUser(user)
  //  if(user&& user.displayName){
  //   setDisplayName(user.displayName);
  // }
  // setUser(user)
  //  },[])

  const [userName,setUserName]= useState('')
  useEffect(()=>{
     auth.onAuthStateChanged((user)=>{
      // console.log(userName)
      if(user){
       setUserName(user.displayName)
      }else{
        setUserName('')
// console.log(userName,'usernam')
      }
     })
  },[])

  const checkaa = async () => {
    const usersCollection = collection(db, 'users');
  
    try {
      const res = await addDoc(usersCollection, {
        name: "zoyaa",
        code: 123,
        city: "karachi"
      });
      console.log(res);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }
  return (
    <div>
      <div className='nav'>
      <h2>{`welcome ${displayName}`  }</h2> 

      </div>
      {/* <i> <h1>Welcome</h1></i> */}
       <h1> <Link to='/login'>logout</Link></h1>
     <i><p>⁓⁓~Happily SignUp/Login~⁓⁓</p></i> 
      <img src={img}/>
      
       <br/>
       <br/>
 <button onClick={checkaa}>click</button>

    </div>
   
  )
}

export default Home