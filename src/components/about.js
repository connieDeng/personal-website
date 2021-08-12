import React from 'react';
import { StyledAbout, StyledAboutLabel } from './../styledComponents/aboutCS';

export default function About () {
    const bgcontent = 'I love to create. I spend my childhood making things, whether out of legos, clay, paper - anything I could get my hands on. Then in 2009, I got my first computer. I then spent my time creating custom Youtube themes (when you could customize your whole youtube channel), Facebook banners, videos, flash games, etc. This opened up my world to computer science! '
    const workcontent = 'I have had the privilege of working at a Health Care and Energy Company. I have been rewarded First Place at the 2021 Tri-State ExploreCSR Google Research poster competition. My main focus these days is to continuously learn something new. Currently, I am a participant in Cornell Tech\'s Break Through AI program where I am learning AI and Machine Learning.'
    const hobbycontent = 'When I am not sitting in my chair coding all day, I like being active. I love rock climbing, biking, and hiking.'
    return (
        <StyledAbout className="about-containter">
            <section className='category-container'>
                <div className='about-title'> About </div>
                <div className='rectangle'/>
            </section>
            <section className='about-context'>
                <h1>Background</h1>
                    {bgcontent}
                <h1>Work</h1>
                    {workcontent}
                <h1>Hobbies</h1>
                    {hobbycontent}
            </section>
            <StyledAboutLabel className='category-title'>ABOUT</StyledAboutLabel>
        </StyledAbout>
    )
}