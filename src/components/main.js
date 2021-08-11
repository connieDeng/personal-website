import {Page, ToggleDM} from '../styledComponents/baseCS'
import { Element } from 'react-scroll'
import NavBarStyled from './navBar';

import Home from './home';

function Splash(props) {
    function changeTheme() {
        if (props.theme === "light") {
            props.setTheme("dark");
        } else {
            props.setTheme("light");
        }
    };

    const icon = props.theme === "light" ? <div size={40}> icon here </div>: <div size={40}> icon here </div>;

    return (
        <Page className="main-container">
                <ToggleDM onClick={changeTheme}>
                    {icon}
                </ToggleDM>
                <NavBarStyled/>
                <Element name="home" className="category-container">
                    <Home/>
                </Element>
                <Element name="about" className="category-container">
                    {/* <About/> */}
                </Element>
                <Element name="projects" className="category-container">
                    {/* <Projects/> */}
                </Element>
                <Element name="contact" className="category-container">
                    {/* <Contact/> */}
                </Element>
        </Page>
    );
};

export default Splash;