import React from 'react'
import { useState, useEffect, useRef } from "react";
import { NavLink } from 'react-router-dom';

const useMedia = (query) => {
    const [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }

        const listener = () => setMatches(media.matches);
        media.addListener(listener);

        return () => media.removeListener(listener);
    }, [query, matches]);

    return matches;
};

const Navbar = () => {
    const isSmallScreen = useMedia("(max-width: 1000px)");
    


    const [isSticky, setSticky] = useState(false);
    const navRef = React.createRef();
    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
        setNavbarHeight(document.querySelector('.nav').offsetHeight);
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (navRef.current) {
                setSticky(navRef.current.getBoundingClientRect().top <= 0);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [navRef]);


    // navbar slide
    const nav_items = useRef(null)
    const menu = useRef(null)
    const login = useRef(null)

    function ham() {
        if (menu.current.getAttribute('name') === 'menu') {
            menu.current.setAttribute('name', 'close')
            nav_items.current.style = 'animation: come 0.5s forwards;'
            login.current.style = 'opacity: 1; transition: opacity 2s;'
        }
        else {
            menu.current.setAttribute('name', 'menu')
            nav_items.current.style = 'animation: go 0.5s forwards'
            login.current.style = 'opacity: 0;'
        }
    }

    return (
        <nav ref={navRef} className={`nav ${isSticky ? "sticky" : ""}`}>
            <div className="nav-logo">
                Simple Website
            </div>
            <div className="ham-burger">
                <ion-icon name="menu" id='ham' onClick={() => { ham(); } } ref={menu}></ion-icon>
            </div>
            <div className="nav-links" style={{ height: isSmallScreen ? `calc(100vh - ${navbarHeight}px)` : "fit-content" }} >
            <div className="nav-items" ref={nav_items} >
                <NavLink to={'/'} className="home n-items">Home</NavLink>
                <NavLink to={'/about'} className="about n-items">About</NavLink>
                <NavLink  to={'/This-page-is-not-ready-1'}  className="Contact n-items">Contact</NavLink>
                <NavLink to={'/This-page-is-not-ready-2'} className="pricing n-items">Pricing</NavLink>
            </div>
        </div><div className="login" ref={login}>
                <div className="sign-up">Sign-up</div>
                <div className="log">Login</div>
            </div>
        </nav>
    );
};

export default Navbar;