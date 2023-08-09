// import React, { useState, useEffect } from 'react';
import '../Home/home.css'
import { FiSearch } from 'react-icons/fi'
import {AiFillPlusCircle} from 'react-icons/ai';
// import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {auth, db } from '../../Firebase';
import { addDoc, collection,getDocs, query, where } from 'firebase/firestore';
import Navbar  from '../Navbar'
import Contact from '../Contact';
import '../../components/Navbar.css'
import Model from '../Model';
// import {user} from '../signUp/SignUp'


function Home() {
  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    userId: '',
  });

  const [contact, setContact] = useState([]);
  const [isOpen, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [userName, setUserName] = useState('');
  const [model, setModel] = useState(true);
  // const [ userData , setuserData] = useState([])
// console.log(userData,'data')
const [loading, setLoading] = useState(true);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // useEffect(() => {
  //   const getContacts = async () => {
  //     try {
  //       const contactRef = collection(db, 'contacts');
  //       const contactsSnapshot = await getDocs(contactRef);
  //       const contactList = contactsSnapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       // setContact(contactList);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getContacts();
  // }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName('');
      }
    });
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setModel(false);
  //   if (!formValue.name || !formValue.email || !formValue.address || !formValue.phone) {
  //     alert('Please fill all fields');
  //     return;
  //   }
  //   try {
  //     const user = auth.currentUser;
  //     const uid = user.uid;
  //     const contactRef = await addDoc(collection(db, 'contacts'), {
  //       name: formValue.name,
  //       email: formValue.email,
  //       address: formValue.address,
  //       phone: formValue.phone,
  //       userId: uid,
  //     });
  //     console.log(contactRef, 'saved');
  //     setFormValue(contactRef);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setModel(false);
//     if (!formValue.name || !formValue.email || !formValue.address || !formValue.phone) {
//       alert('Please fill all fields');
//       return;
//     }
//     try {
//       const user = auth.currentUser;
//       const uid = user.uid;
//       const contactRef = await addDoc(collection(db, 'contacts'), {
//         name: formValue.name,
//         email: formValue.email,
//         address: formValue.address,
//         phone: formValue.phone,
//         userId: uid,
//       });
//       console.log(contactRef, 'saved');
//       setFormValue({
//         name: '',
//         email: '',
//         address: '',
//         phone: '',
//         userId: '',
//       }); // Reset form after successful submission
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(()=>{
//     const user = auth.currentUser;
//     if (user && user.uid) {
//       const uid = user.uid; // User ki UID access ki gayi
//       // Rest of the code...
// const getDataByQuery = async ()=>{
// const collectionRef = collection(db,'contacts');
// const qu = query(collectionRef,where('userId',"==",uid))
// console.log()
// const contactData= [];
// const querySnapshot = await getDocs(qu);
// querySnapshot.forEach((doc)=>{
//   contactData.push(doc.data())
// });
// setContact(contactData)
// console.log(contactData,'conData')
//  } 
//     getDataByQuery()}
//   },[])



// from chatgpt
// useEffect(() => {
//   const user = auth.currentUser;
//   if (user && user.uid) {
//     setDisplayName(user.displayName);
//     const uid = user.uid;
    
//     const getDataByQuery = async () => {
//       const collectionRef = collection(db, 'contacts');
//       const qu = query(collectionRef, where('userId', '==', uid));
//       const contactData = [];
//       const querySnapshot = await getDocs(qu);
//       querySnapshot.forEach((doc) => {
//         contactData.push({ id: doc.id, ...doc.data() });
//       });
//       setContact(contactData);
//     };
    
//     getDataByQuery();
//   }
// }, []);

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   setModel(false);
//   if (!formValue.name || !formValue.email || !formValue.address || !formValue.phone) {
//     alert('Please fill all fields');
//     return;
//   }
//   try {
//     const user = auth.currentUser;
//     const uid = user.uid;
//     const contactRef = await addDoc(collection(db, 'contacts'), {
//       name: formValue.name,
//       email: formValue.email,
//       address: formValue.address,
//       phone: formValue.phone,
//       userId: uid,
//     });
//     console.log(contactRef, 'saved');
//     setFormValue({
//       name: '',
//       email: '',
//       address: '',
//       phone: '',
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

/////////////
const handleSubmit = async (e) => {
  e.preventDefault();
  setModel(false);
  if (!formValue.name || !formValue.email || !formValue.address || !formValue.phone) {
    alert('Please fill all fields');
    return;
  }
  try {
    const user = auth.currentUser;
    const uid = user.uid;
    const contactRef = await addDoc(collection(db, 'contacts'), {
      name: formValue.name,
      email: formValue.email,
      address: formValue.address,
      phone: formValue.phone,
      userId: uid,
    });
    console.log(contactRef, 'saved');
    setContact((prevContacts) => [
      ...prevContacts,
      {
        id: contactRef.id,
        name: formValue.name,
        email: formValue.email,
        address: formValue.address,
        phone: formValue.phone,
        userId: uid,
      },
    ]);
    console.log(uid)
    setFormValue({
      name: '',
      email: '',
      address: '',
      phone: '',
    });
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  const user = auth.currentUser;
  if (user && user.uid) {
    const uid = user.uid;
    const getDataByQuery = async () => {
      const collectionRef = collection(db, 'contacts');
      const qu = query(collectionRef, where('userId', '==', uid));
      const querySnapshot = await getDocs(qu);
      const contactData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setContact(contactData);
      setLoading(false); // Set loading to false after data fetch
    };
    getDataByQuery();
  }
}, []);

// Render loading state if data is still loading
if (loading) {
  return <div>Loading...</div>;
}



  return (
    <div className='big'>
      <div className='elder'>
        <div className='nav'>

          <span>{`Welcome ${displayName}`}</span>
        <h1 className='log' > <a href='/login'>Logout</a></h1>
        </div>
        {/* <h1> <a href='/login'>Logout</a></h1> */}
        {/* <i><p>⁓⁓~Happily SignUp/Login~⁓⁓</p></i> */}
        <br />
        <br />
      </div>

      <div className="app">
     <Navbar/>
<div className=' input-tag'>
      <input type='text' className='input' />
     <FiSearch className='icon'/>
     < AiFillPlusCircle onClick={onOpen} className='plus'/>
    </div>
    <div className='main-contact'>
      {contact?.map((contact)=>{
        return(

          <Contact key={contact.id} contact={contact}/>
        
        )
      })}
    </div>
     </div>

      <Model isOpen={isOpen} onClose={onClose}>
      <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form  className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValue.name}
          onChange={(e) => setFormValue({ ...formValue, name: e.target.value })}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValue.email}
          onChange={(e) => setFormValue({ ...formValue, email: e.target.value })}
          required
        />

        {/* <label htmlFor="subject">Address</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required */}
        {/* /> */}

        <label htmlFor="message">Address:</label>
        <textarea
          id="message"
          name="message"
          value={formValue.address}
          onChange={(e) => setFormValue({ ...formValue, address: e.target.value })}
          rows="2"
          required
        />

        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formValue.phone}
          onChange={(e) => setFormValue({ ...formValue, phone: e.target.value })}
          required
        />

        <button type="button" className="submit-button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
      </Model>
    </div>
  );
}

export default Home;
