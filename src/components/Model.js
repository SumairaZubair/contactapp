import React from 'react'
import './Navbar.css'
import {GiCrossedSabres} from 'react-icons/gi'
// import { createPortal } from 'react-dom'
function Model({onClose,isOpen,children}) {
  return (
     <> 
     {isOpen && <div className='model'> 
    <>
    <div className='cross-div'>
     <GiCrossedSabres className='cross' onClick={onClose}/>
     </div>
     {children}
     <div className='self-div' onClick={onClose}/>
    </>
     </div>} 
     </>
)
}

export default Model