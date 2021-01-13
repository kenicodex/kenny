import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './Home';
import './Home.css'
import img from '../images/lap.jpg'
import Navbar from '../Navbar/Navbar';
import Little from '../little/Little';

function Home(props) {
    const all = useRef(null)
    return (
        <section className="W-100 bg-white" ref={all}>
            <div className='design'></div>
            <header className="w-100 ">
                <Navbar />
                <div className="k-row w-100 mx-0 block">
                    <div className='left col-lg-6 text-center' style={{}}>
                        <b className='h2'>Web Developer </b>
                        <h5>React and Nodejs Skilled</h5>
                        <div className='btns center'>
                            <a href="https://wa.link/rhfeu4">
                                <button className="btn rounded-pill border mx-2 text-white"
                                    style={{ backgroundImage: "inherit" }}>Book me</button></a>
                            <a href="https://wa.link/rhfeu4">
                                <button className="btn rounded-pill border mx-2 text-white"
                                    style={{ backgroundImage: "inherit" }}>Tutorial</button></a>
                        </div>
                    </div>
                    <div className='right center col-lg-6 p-1' style={{ height: 'auto', }}>
                        <Little len={all} />
                    </div>
                </div>
                <a href="#projects" className='d-sm'>
                    <button className='btn position-absolute' style={{ left: "49%", bottom: '0' }} >
                        <i className='fa fa-arrow-down' style={{ color: 'wheat' }}></i>
                    </button>
                </a>
            </header>
            <div className="body bg-light" style={{ zIndex: "100" }} id='projects'>
                <div className='main pb-3'>
                    <h3 className="py-1 position-relative text-white" style={{ zIndex: '100' }}>  Here are some of my works</h3>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {projects.map(({ name, description, last_updated, status, link }, index) => {
                            return (
                                <Link to={link} className="col-lg-4 col-sm-6" key={index} color="black">
                                    <div className="text-right border rounded my-1 p-3 k-cus pro bg-white h-50px mr-1 position-relative"
                                        style={{ fontSize: "15px", height: "200px", backgroundImage:`url(${img})` }}>
                                        <div className='project'>Project {index} : {name} <br />--{status}</div>
                                    </div>
                                </Link>)
                        })}
                    </div>
                </div>
            </div>
            <div className='position-relative bg-light'> 
                <div className='svg '></div>
            </div>
            <footer className='w-100 center'>
                    © copyright 2021
            </footer>
        </section>
    );
}
export default Home;