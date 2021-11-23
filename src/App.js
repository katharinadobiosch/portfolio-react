import React from "react";

import "./styles/app.module.scss";
import LoadingBar from "./components/LoadingBar";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ThankYou from "./components/ThankYou";

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

            <Router>
                <Route path="/ThankYou" exact component={ThankYou} />
            </Router>
        </div>
    );
};

export default App;
