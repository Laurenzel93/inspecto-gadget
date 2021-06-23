import React, { useState } from "react";
import './style.css';

function Nav() {
    // called whenever hamburger icon clicked
    // opens/hides hamburger menu
    // const x = document.getElementById("myTopnav");

    // function openCloseHamburger() {
    //     // if #myTopnav just has the class .bigNav, add .responsive
    //     if (x.className === "bigNav") {
    //         // console.log('x.className === "bigNav"')
    //         x.className += " responsive";
    //         // if #myTopnav has both .bigNav and .responsive, take away .responsive and leave .bigNav
    //     } else {
    //         x.className = "bigNav";
    //         // console.log('x.className !== "bigNav"')
    //     }
    // }
    
    // const [opened, setOpened] = useState("");

    // function setClass() {
    //     // e.preventDefault();

    //     if (opened === "") {
    //         console.log('state was: \"\"')
    //         setOpened("opened");
    //         // this.setAttribute('aria-expanded', opened);
    //     } else {
    //         console.log('state was: \"opened\"')
    //         setOpened("")
    //     };
    // }
    

    return (
        <div className="container-fluid headerContainer vw-100">
            <nav className="navbar bigNav" id="myTopnav">
                <h1 className="col-lg-4 col-sm-12 p-3 text-center">
                    Inspecto-Gadget
                </h1>
                <a href="javascript:void(0);" className="icon" onClick='openCloseHamburger()'>
                    {/* removed + opened and onClick=\{setClass()} because broken and need to push up to github */}
                    <button className={"menu"} aria-label="Main Menu">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </a>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" href="/dashboard">Dashboard</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" href="/availability">Availability</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" href="/past-inspections">Past Inspections</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" id="logout">Logout</button>
            </nav>
        </div>
    )
}

export default Nav;