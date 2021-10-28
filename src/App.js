import React from "react";
import {
    BrowserRouter as Router,
    Route,
    // Redirect,
    Switch,
} from "react-router-dom";
import { createBrowserHistory } from "history";

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

export const customHistory = createBrowserHistory();

const App = () => {
    return (
        <div>
            <Router history={customHistory}>
                <Switch>
                    <LoadingBar />
                    <Header />

                    {/* <Welcome />
            <About />
            <Skills />
            <Projects />
            <Contact /> */}

                    <Route path="/welcome" component={Welcome} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/skills" component={Skills} exact />
                    <Route path="/projects" component={Projects} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
