import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { getUser, removeUserSession } from "../../utils/Session";
import Swal from 'sweetalert2';
import './style.css';
// import { whenTransitionDone } from "@fullcalendar/core"; 

function Nav() {

    /*
        Hamburger icon animation
    */
    const [opened, setOpened] = useState("menu ");
    const [ariaExpanded, setAriaExpanded] = useState("");

    // handles hamburger icon animation
    function animationHandler() {
        if (opened === "menu ") {
            setOpened("menu opened");
            setAriaExpanded("opened");
        } else {
            setOpened("menu ");
            setAriaExpanded("");
        }
    }

    /*
        Opening/closing hamburger menu
    */
    const [responsive, setResponsive] = useState("navbar bigNav");

    // called whenever hamburger icon clicked
    // opens/hides hamburger menu
    function responsiveMenuHandler() {
        if (responsive === "navbar bigNav") {
            setResponsive("navbar bigNav responsive");
        } else {
            setResponsive("navbar bigNav")
        }
    }

    /* 
        Buttons that redirect user to new route
    */
    const history = useHistory();

    // redirect user to dashboard
    const dashboardRoute = () => {
        let dashboardPath = '/dashboard';
        history.push(dashboardPath);
    }

    // redirect user to Past Inspections
    const pastInspectionsRoute = () => {
        let pastInspectionsPath = '/past-inspections';
        history.push(pastInspectionsPath);
    }

    // redirect user to Create Account
    const createAccountRoute = () => {
        let createAccountPath = '/create-account';
        history.push(createAccountPath);
    }

    /*
        Button styling specific to user's current route
    */
    const location = useLocation().pathname;
    const [activeDash, setActiveDash] = useState('');
    const [activePast, setActivePast] = useState('');
    const [activeCreate, setActiveCreate] = useState('');

    const locationStyle = () => {
        // console.log(location);
        if (location === "/dashboard") {
            setActiveDash('activeDash');
        } else if (location === "/past-inspections") {
            setActivePast('activePast');
        } else if (location === "/create-account") {
            setActiveCreate('activeCreate');
        }
    }
    useEffect(() => {
        locationStyle();
        checkRole();
        if (isAdmin === false) {
            setGenUserStyle('myTopnav');
        }
    });

    /*
        Render Create Account button if Admin
    */
    const [isAdmin, setIsAdmin] = useState();
    const [genUserStyle, setGenUserStyle] = useState('');
    const checkRole = () => {
        if (getUser()) {
           // console.log('this is the result of getUser(): ' + getUser().role);
            if (getUser().role === 'admin' || getUser().role === 'Admin') {
                setIsAdmin(true);
            } else {
                // console.log('admin is false')
                setIsAdmin(false);
            }
        }
    }

    /* 
        Logout button 
    */
    const logout = () => {
        Swal.fire({
            title: '<span>Are you sure you want to logout?</span>',
            confirmButtonText: 'Yes',
            showCancelButton: true,
            cancelButtonColor: '#f00022',
            background: '#343a40'
        }).then(res => {
            if (res.isConfirmed) {
                axios.post('/api/users/logout')
                    .then((res) => {
                        console.log(res);
                        if (res.status === 204) {
                            Swal.fire({
                                icon: 'success',
                                iconColor: '#b8daff',
                                title: '<span>Logged out successfully</span>',
                                showConfirmButton: false,
                                background: '#343a40',
                                timer: 1500

                            })
                        }
                    })
                    .then(() => {
                        removeUserSession();
                        history.push('/login');
                    })
                    .catch(err => {
                        console.log(err);
                    });
            } else if (res.isDenied) {
                return
            }
        })
    }

    return (
        <div className="container-fluid headerContainer vw-100">
            <nav className={responsive} id={genUserStyle}>
                <h1 className="col-lg-4 col-sm-12 p-3 text-center">
                    Inspecto-Gadget
                </h1>
                <a href="javascript:void(0);" className="icon" onClick={responsiveMenuHandler}>
                    <button className={opened} onClick={animationHandler} aria-expanded={ariaExpanded} aria-label="Main Menu">
                        <svg width="40" height="40" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </a>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" id={activeDash} onClick={dashboardRoute}>Dashboard</button>
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" id={activePast} onClick={pastInspectionsRoute}>Past Inspections</button>
                {!isAdmin ?
                    null
                    :
                    <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" id={activeCreate} onClick={createAccountRoute}>Create Account</button>

                }
                <button className="btn btn-secondary border border-dark col-lg-2 col-sm-12 navBtn" id="logout" onClick={logout}>Logout</button>
            </nav>
        </div>
    )
}

export default Nav;