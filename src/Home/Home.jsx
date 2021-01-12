import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './Home';
import './Home.css'
// import img from '../images/lap.jpg'
import Navbar from '../Navbar/Navbar';
import Little from '../little/Little';

function Home(props) {
    const all = useRef(null)
    return (
        <section className="W-100 bg-white" ref={all}>
            <header className="w-100  bg-light">
                <Navbar />
                <div className="position-relative k-row w-100 mx-0" style={{ top: "10%" }}>
                    <div className='col-lg-6 center'>
                        <div className='text-white'>
                            <b className='h2' style={{ font: '60px cursive' }}>Web Developer </b>
                            <h5>React and Nodejs Skilled</h5>
                            Hi there, my name is Salaudeen Kehinde Taofeek. <br />
                            I'm a Full Stack Web developer <br />
                            with  2 years of experience <br />
                            adaptable to any other language
                            <button className="btn rounded-pill border text-white px-3 bookme"
                                style={{ left: "20%", backgroundImage: "inherit" }}>Book me</button>
                        </div>
                    </div>
                    <div className='col-lg-6 m-auto center' style={{height:'300px'}}>
                        <Little len={all}/>
                    </div>
                </div>
                <a href="#projects">
                    <button className='btn position-absolute' style={{ left: "49%", bottom: '2%' }} >
                        <i className='fa fa-arrow-down' style={{ color: 'wheat' }}></i>
                    </button>
                </a>
            </header>

            <div class="contain">
                <svg viewBox="0 0 500 500" preserveAspectRatio="xMinYMin meet">
                    <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: "none", fill: "#29cfcb" }}></path>
                </svg>
            </div>
            <div className="bg-light" style={{ zIndex: "100" }} id='projects'>
                <div className='main pb-3'>
                    <h3 className="py-1 position-relative text-white" style={{zIndex:'100'}}>  Here are some of my works</h3>
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {projects.map(({ name, description, last_updated, status, link }, index) => {
                            return (
                                <Link to={link} className="col-lg-4 col-sm-6" key={index} color="black">
                                    <div className="border rounded my-1 p-3 k-cus pro bg-white h-50px mr-1 position-relative"
                                        style={{ fontSize: "15px", height: "200px" }}>
                                        <div className='project'>Project {index} : {name} <br />--{status}</div>
                                    </div>
                                </Link>)
                        })}
                    </div>
                </div>
            </div>
            <footer className='w-100 center'>
                Hope you like it
            </footer>
        </section>
    );
}
export default Home;