// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// import "firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyAUxiosLh6Cd2f8vYkv773cCRpcTjhw51g",
  authDomain: "fir-auth-a8d02.firebaseapp.com",
  projectId: "fir-auth-a8d02",
  storageBucket: "fir-auth-a8d02.appspot.com",
  messagingSenderId: "577784112048",
  appId: "1:577784112048:web:5bc949808e0997f5922c75",
  measurementId: "G-9R0VE11544"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export const db = getFirestore(app)
// export const firestore = firebase.firestore
export {app,auth};

// export const createUserDocument = async (user,additionalData)=>{
//   if(!user)return;
//   const useRef = firestore.doc(`users/${user.uid}`)
//   const snapShot = await useRef.get();
//   if(!snapShot.exists){
//     const {email} = user
//    const {name} = additionalData;
//    try{
//   useRef.set({
//     name,
//     email
//   })
//    }catch(error){
//      console.log('error')
//    }
//   }

// }