import React from 'react';

function Navbar(props) {
    return (
        <nav className="h-50px d-flex position-relative w-100">
            <div className="brand" style={{color:'chocolate'}}>Kenny code </div>
            <div className="links position-absolute" >
                <a href="/">
                    <i className="fa fa-facebook" style={{font:'24px'}}></i></a>
                <a href="/">
                    <i className="fa fa-twitter" style={{font:'24px'}}></i></a>
                <a href="/">
                    <i className="fa fa-whatsapp" style={{font:'24px'}}></i></a>
                <a href="/">
                    <i className="fa fa-instagram" style={{font:'24px'}}></i></a>
            </div>
        </nav>
    );
}

export default Navbar;