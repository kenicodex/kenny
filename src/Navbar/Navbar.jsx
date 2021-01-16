import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css'
import './Navmobile.css'
function Navbar(props) {
    const hide = useRef(null)
    const brand = useRef(null)
    const show = () => {
        if (hide.current.style.display === 'inline') {
            hide.current.style.display = 'none'
        } else {
            hide.current.style.display = 'inline'
        }
    }
    useEffect(() => {
    })
    return (
        <nav>
            <div className="brand" ref={brand}>Kenny code
                <div className='bar' onClick={() => { show() }}> <i className='fa fa-bars'></i>
                </div>
            </div>
            <div className="links" ref={hide} >
                <div className='mobileBrand'>
                    <h3>kC</h3>
                    <div className="hide"> Developer</div>
                </div>
               <div className='rel'>
                   <a href="/"> <i className="fa fa-github"></i>
                     <span className='hide'>Github</span></a>
                </div>
               <div className='rel'>
                   <a href="/"> <i className="fa fa-twitter"></i>
                     <span className='hide'>Twitter</span></a>
                </div>
               <div className='rel'>
                   <a href="/"> <i className="fa fa-whatsapp"></i>
                     <span className='hide'>WhatsApp</span></a>
                </div>
               <div className='rel'>
                   <a href="/"> <i className="fa fa-instagram"> </i>
                     <span className='hide'>Instagram</span></a>
                </div>
               <div className='rel'>
                   <a href="/"> <i className="fa fa-book"> </i>
                     <span className='hide'>Tutorial</span></a>
                </div>
               <div className='rel'>
                   <a href="/"> 
                     <span className='hide'>About kenny</span></a>
                </div>
                <div className='navfoot hide position-absolute w-100 text-center' style={{bottom:"2%"}}>
                    ©copyrights kennycode 

                </div>
            </div>
        </nav>
    );
}

export default Navbar;