import React from "react";
import {
  StyledContact,
  StyledContactLabel,
} from "./../styledComponents/contactCS";
import { StyledButton } from "./../styledComponents/baseCS";
import CategoryTitle from "./category-title";

export default function Contact() {
  return (
    <StyledContact className="contact-containter">
      <CategoryTitle text={"CONTACT"} color={"green"} />

      <section className="mail-container">
        <h1 style={{ fontSize: "1.8em", lineHeight: "0" }}>Get in touch!</h1>
        <div style={{ top: "0" }}>
          I am currently looking for full time positions!
        </div>
        <div>
          Whether you just want to say hi or you have a question, feel free to
          contact me.
        </div>
        <a className="mailto" href="mailto:dengconnie0723@gmail.com">
          <StyledButton className="button">Send message</StyledButton>
        </a>
      </section>
      {/* <StyledContactLabel className="category-title-contact">
        CONTACT
      </StyledContactLabel> */}
    </StyledContact>
  );
}
