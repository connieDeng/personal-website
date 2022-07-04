import { Page, ToggleDM } from "../styledComponents/baseCS";
import { Element } from "react-scroll";
import { ImSun } from "react-icons/im";
import { IoIosMoon } from "react-icons/io";

import NavBarStyled from "./nav-bar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Projects from "./projects";

function Splash(props) {
  function changeTheme() {
    if (props.theme === "light") {
      props.setTheme("dark");
    } else {
      props.setTheme("light");
    }
  }

  const icon =
    props.theme === "light" ? (
      <ImSun style={{ height: "25px", width: "25px" }} />
    ) : (
      <IoIosMoon style={{ height: "25px", width: "25px" }} />
    );

  return (
    <Page className="main-container">
      <ToggleDM onClick={changeTheme}>{icon}</ToggleDM>
      <NavBarStyled />
      <Element name="home" className="category-container">
        <Home />
      </Element>
      <Element name="about" className="category-container">
        <About />
      </Element>
      {/* <Element name="projects" className="category-container">
        <Projects />
      </Element> */}
      <Element name="contact" className="category-container">
        <Contact />
      </Element>
    </Page>
  );
}

export default Splash;
