import React from 'react'
import Blurb from './../assests/content/blurb'
// import icon from '/images/icon.png'; 
import { Link } from 'react-scroll';
import { StyledHome } from './../styledComponents/homeCS'

export default function Home () {
    const blurb = Blurb;
    return (
        <StyledHome className="home-container">
            <section className='intro-block-container'>
                <span className='name'>CONNIE DENG</span>
                <div className='blurb'> {blurb} </div>
                <section>
                    <Link to={'about'} className="nav-name" spy={true} smooth={true} duration={500}>
                        <button className='button'>About me</button>
                    </Link>
                    <Link to={'contact'} className="nav-name" spy={true} smooth={true} duration={500}>
                        <button className='button'>Get in Touch</button>
                    </Link>
                </section>
            </section>
            <div className='logo-container'>
                <img className="logo" img src="/images/icon.png" alt="Logo" style={{maxWidth:'20em'}}/>
            </div>
        </StyledHome>
    )
}