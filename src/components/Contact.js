import React, {useState} from 'react'
import {HiOutlineUserCircle} from 'react-icons/hi'
// import {RiEditCircleLine } from 'react-icons/ri'
import {IoMdTrash} from 'react-icons/io'
// import deleteContact from './Home/Home'
import { doc, deleteDoc} from 'firebase/firestore'
import { db } from '../Firebase'
import '../components/Navbar.css'
function Contact() {
  const [contact, setContact] = useState([]);

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, 'contacts', id));
      setContact(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  
   
   


  return (
    <div>
         <div key={contact.id} className='main'>
         <div className='contact-info'>
         <HiOutlineUserCircle className='user'/>
          <div className=' text '>
            <p className=''>{contact.name}</p>
            <span className=''>{contact.email}</span>
            </div>
         </div>
            <div className='contact-icon'>
              {/* <RiEditCircleLine  className='circle'/> */}
              <IoMdTrash onClick={()=> deleteContact (contact.id)} className='trash'/>
            </div>
        </div>
    </div>
  )
}

export default Contact