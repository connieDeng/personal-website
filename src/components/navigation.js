import React, {useState} from 'react'
import { Link } from 'react-scroll';
import { Squash as Hamburger } from 'hamburger-react'

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
      title: 'Blog',
      path: 'blog'
    },
    {
      title: 'Contact',
      path: 'contact'
    }
  ]

export default function Navigation () {
  //HOOK changes menu state false and active
  const [menuActive, setMenuActive] = useState(false)

    return (
    //when menu is clicked on hence active
    <nav className={`site-navigation ${menuActive && 'active'}`} role="navigation">
        <Link to={'home'} className="nav-name" spy={true} smooth={true} duration={500}>Connie Deng</Link>
        <div className="menu-content-container">
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path} spy={true} smooth={true} duration={500}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
        </div>
        {/* <i> tage is used to mark up text that is set off from the normal prose in a document */}
        <i className="hamburger-menu">
          <Hamburger
            //clicking activating menu
            toggled={menuActive} toggle={setMenuActive}
          />
        </i> 
    </nav>
  )
}