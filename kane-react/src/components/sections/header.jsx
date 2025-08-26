import React, { useEffect, useState } from 'react'
import logo from "../../assets/images/logo.png"
import { Link } from 'react-scroll'
import { Pivot as Hamburger } from 'hamburger-react'
import { Link as LogoLink } from 'react-router-dom';

const menuList = [
    {
        id: 1,
        path: "home",
        label: "Home"
    },
    {
        id: 2,
        path: "about",
        label: "About"
    },
    {
        id: 3,
        path: "resume",
        label: "Resume"
    },
    {
        id: 4,
        path: "services",
        label: "Services"
    },
    {
        id: 5,
        path: "portfolio",
        label: "Projects"
    },
    {
        id: 6,
        path: "contact",
        label: "Contact"
    },

]
const Header = () => {
    const [isSticky, setisSticky] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        }
        else {
            setisSticky(false)
        }
    }
    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center">
                        {/* START LOGO DESIGN AREA */}
                        <LogoLink to={"/"} className="logo-outer">
                            <div className="logo">
                                <a href="#">
                                    {/* <img src={logo} alt="Logo" title="Logo" /> */}
                                    <h2 className='logoText' >ANAS.</h2>
                                </a>
                            </div>
                        </LogoLink>
                        {/* END LOGO DESIGN AREA */}
                        {/* START NAV DESIGN AREA */}
                        <div className="nav-outer">
                            {/* Main Menu */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header">
                                    <div className="mobile-logo">
                                        <a href="#">
                                            {/* <img src={logo} alt="Logo" title="Logo" /> */}
                                            <h2 className='logoText' >ANAS.</h2>
                                        </a>
                                    </div>
                                    {/* Toggle Button */}
                                    <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                        <Hamburger toggled={isOpen} toggle={setIsOpen} size={32} rounded />

                                    </button>
                                </div>
                                <div className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link
                                                onClick={() => setIsOpen(false)}
                                                to={path} spy={true} smooth={true} offset={0} duration={500}
                                                className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                            {/*  END NAV DESIGN AREA */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header