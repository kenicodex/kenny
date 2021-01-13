import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
function Navbar(props) {
    const hide = useRef(null)
    const brand = useRef(null)
    const show =()=>{
         if (hide.current.style.display === 'inline') {
            hide.current.style.display = 'none'
         }else{
            hide.current.style.display = 'inline'
         }
    }
    useEffect(()=>{
    })
    return (
        <nav>
            <div className="brand" ref={brand} style={{ color: 'chocolate' }}>Kenny code
            <div className='position-absolute' onClick={()=>{show()}}
             style={{ right: '2%', top:'0' }}> <i className='fa fa-bars'></i> </div></div>
            <div className="links" ref={hide} >
                <a href="/">
                    <i className="fa fa-github"></i></a>
                <a href="/">
                    <i className="fa fa-twitter"></i></a>
                <a href="/">
                    <i className="fa fa-whatsapp"></i></a>
                <a href="/">
                    <i className="fa fa-instagram"></i></a>
            </div>
        </nav>
    );
}

export default Navbar;