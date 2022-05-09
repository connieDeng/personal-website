import React from "react";
import ProjCardCS from "../styledComponents/projCard";

export default function StyledProjCard({ projContent }) {
  return (
    <ProjCardCS className="proj-card-container">
      <a
        className="proj-card"
        href={projContent.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/images/fillerImg.jpg" className="proj-img"></img>
        <section className="proj-content">
          <h2 className="proj-title">{projContent.title}</h2>
          <div className="proj-description">{projContent.shortDescription}</div>
        </section>
      </a>
    </ProjCardCS>
  );
}
