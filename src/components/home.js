import React from "react";
import Blurb from "./../assests/content/blurb";
import { Link } from "react-scroll";
import { StyledHome } from "./../styledComponents/homeCS";
import { StyledButton } from "./../styledComponents/baseCS";
import TextTypingAnimation from "./typer";

export default function Home() {
  const blurb = Blurb;

  return (
    <StyledHome className="home-container">
      <section className="intro-block-container">
        <span className="name">
          <span>CO</span>
          <TextTypingAnimation texts={["NNIE DENG", "DENG"]} />
        </span>
        <div className="blurb"> {blurb} </div>

        <section>
          <Link
            to={"about"}
            className="nav-name"
            spy={true}
            smooth={true}
            duration={500}
          >
            <StyledButton className="button">About me</StyledButton>
          </Link>
          <Link
            to={"contact"}
            className="nav-name"
            spy={true}
            smooth={true}
            duration={500}
          >
            <StyledButton className="button">Get in touch</StyledButton>
          </Link>
        </section>
      </section>
      <div className="logo-container">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/images/connie-icon.png"}
          alt="Logo"
          style={{ maxWidth: "20em" }}
        />
      </div>
    </StyledHome>
  );
}
