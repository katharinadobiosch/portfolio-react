import React from "react";
import "./styles/app.module.scss";
import LoadingBar from "./components/LoadingBar";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <div>
            <LoadingBar />
            
            <Header />
            <Welcome />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
