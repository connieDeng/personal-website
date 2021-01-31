import React, {useState} from 'react'
// import { LineStyle } from '@material-ui/icons';
// import React, {useState} from 'react'
import { Link } from 'react-scroll';
// import { Squash as Hamburger } from 'hamburger-react'

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
        <span className="nav-name">Connie Deng</span>
        <div className="menu-content-container">
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
        </div>
        <div
            className="hamburger-menu"
            //clicking activating menu
            onClick={(ev) => setMenuActive(!menuActive)}
        > menu </div>
      
    </nav>
  )
}