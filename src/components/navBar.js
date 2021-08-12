import React, { useState } from 'react'
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react'
import Pdf from './../assests/ConnieDengResume.pdf'
import { NavBar } from '../styledComponents/navBarCS';

const navLinks = [
    {
      title: 'Home',
      path: 'home'
    },
    {
      title: 'About',
      path: 'about'
    },
    {
      title: 'Projects',
      path: 'projects'
    },
    {
      title: 'Contact',
      path: 'contact'
    },
  ]

export default function NavBarStyled () {
  //HOOK changes menu state false and active
  const [menuActive, setMenuActive] = useState(false)

    return (
    //when menu is clicked on hence active
    <NavBar className={`site-navigation ${menuActive && 'active'}`} role="navigation">
        <Link to={'home'} className="nav-name" spy={true} smooth={true} duration={500}>Connie Deng</Link>
        <div className="menu-content-container">
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path} spy={true} smooth={true} duration={500}>{link.title}</Link>
                </li>
                ))
            }
            <li className='resume'><a href={Pdf} target='_blank' rel='noopener noreferrer'>Resume</a></li>
            </ul>
        </div>
        {/* <i> tage is used to mark up text that is set off from the normal prose in a document */}
        <i className="hamburger-menu">
          <Hamburger
            //clicking activating menu
            toggled={menuActive} toggle={setMenuActive}
          />
        </i> 
    </NavBar>
  )
}