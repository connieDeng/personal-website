import React from 'react';
import ProjCard from './proj-card';
import projContent from './../assests/content/projects-content';
import { StyledProjects } from '../styledComponents/projectsCS';

export default function Projects () {
    
    return (
        <StyledProjects className="projects-containter">
            <section className='category-container'>
                <div className='projects-title'> Projects </div>
                <div className='rectangle'/>
            </section>
            <article className='projects-showcase-container'>
                {projContent.map((content, index) => (
                    <ProjCard className='proj-card' key={content.id} projContent={content}/>
                ))}
            </article>
            {/* <button className='proj-button'>More projects</button> */}
            <div className='category-title'>PROJECTS</div>
        </StyledProjects>
    )
}