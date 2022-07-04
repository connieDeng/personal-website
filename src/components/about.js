import React from "react";
import { StyledAbout, StyledAboutLabel } from "./../styledComponents/aboutCS";
import CategoryTitle from "./category-title";
import {
  bgContent,
  workContent,
  hobbyContent,
} from "./../assests/content/about-page-content";

export default function About() {
  return (
    <StyledAbout className="about-containter">
      <CategoryTitle text={"ABOUT"} color={"red"} />
      <section className="about-context">
        <h1>Background</h1>
        {bgContent}
        <h1>Work</h1>
        {workContent}
        <h1>Hobbies</h1>
        {hobbyContent}
      </section>
      {/* <StyledAboutLabel text={"ABOUT"}>ABOUT</StyledAboutLabel> */}
    </StyledAbout>
  );
}
