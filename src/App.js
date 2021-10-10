import React from "react";

import "./styles/app.module.scss";

import LoadingBar from "./components/LoadingBar";
import Header from "./components/Header";
// import Hello from "./components/Hello";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
// import HamburgerMenu from "./components/HamburgerMenu";

const App = () => {
    return (
        <div>
            <LoadingBar />
            <Header />
            {/* <Hello /> */}
            <Welcome />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
