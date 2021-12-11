import React, { Component } from "react";
import video from "../Images/Rain1.mp4"
import {
  Route,
  NavLink,
  HashRouter,
  Routes
} from "react-router-dom";
import Logo from "../Images/RPW-logo.png"
import { Parallax } from "react-parallax";
import sidewalk from "../Images/sidewalk.jpg"
import DeckC from "./DeckC.js";
import PwerW from "./PwerW.js";
import GutterC from "./GutterC.js";
import Home from "./Home.js";
import pt from "../Images/pat.jpg"


class Main extends Component{
    render(){
        return(
            <div>
                <div >
                    <video className= "masklogo" src ={video} autoPlay muted loop ></video>
                </div> 

                <div className="navbar" id="/home">
                    <img className = "logo" src={Logo}/> 
                    <nav className="nav">
                        <ul className="nav_Links">                  
                            <li><a href="#/home">Home</a></li>
                            <li><a href="#/services">Services</a></li>
                            <li><a href="#/about">About Us</a></li>
                            <li><a href="#/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <a className="cta" href="#quate"><button>Get A Quote</button></a>
                </div>
                <div >
                    <Parallax bgImage ={sidewalk} strength={150} blur={{min: -2, max: 8}}>
                        <div className = "pIm">
                        <h1  className = "slogan">We clean whatever is dirty</h1>
                        <p className= "pslogan"> Residential & comercial pessure washing</p>
                        </div>
                    </Parallax>
                    <div id="/services">
                    <p className = "pw">Power Washing Sevices </p>
                    <p className = "location">located in Richmond, Virginia </p>
                    <p className = "locations">Servicing Chesterfield, Glen Allen and all surrounding cities</p>
                    </div>
                </div>
                <div className = "routs" >
                    <HashRouter >
                        <div>
                            <ul className= "links">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/pw">House Washing</NavLink></li>
                                <li><NavLink to="/DeckCleaning">Deck Cleaning</NavLink></li>
                                <li><NavLink to="/gc">Gutter Cleaning</NavLink></li>
                            </ul>
                            <div>
                                <Routes className = "comp">
                                    <Route path="/" element={<Home/>} />
                                    <Route path="/services" element={<Home/>} />
                                    <Route path="/home" element={<Home/>} />
                                    <Route path="/about" element={<Home/>} />
                                    <Route path="/contact" element={<Home/>} />
                                    <Route path="/pw" element={<PwerW />} />
                                    <Route path="/DeckCleaning" element={<DeckC />} />
                                    <Route path="/gc" element={<GutterC />} />
                                </Routes>
                            </div>
                        </div>
                    </HashRouter>
                </div>
                
                <div className="about" id = "/about">
                    <img src= {pt} />
                    <div className = "pp">
                    <h1>About Us</h1>
                    <p>With Richmond’s weather a typical exterior should be cleaned every third year. If the property is near water or covered by lots of foliage more frequent cleanings may be required. My motto is do what it takes to leave the property clean. Not every customer remembers to tell me that they have a shed that is turning green, their deck furniture may have mildew on it or that the bottom of the trash can needs to be washed out. If I see something dirty I clean it.</p>
                    <p>I charge a fair price for quality work. I use premium cleaning products that are environmentally friendly and do not harm your plants or animals. Read my online reviews as I never leave a mess or an unhappy customer. There’s no reason to be nothing but happy when your property is left clean.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;