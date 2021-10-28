import React from "react";
import {
    Router,
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
import HomeComponent from "./components/HomeComponent";

export const customHistory = createBrowserHistory();

const App = () => {
    return (
        <div>
            <Router history={customHistory}>
                <Switch>
                    {/* <LoadingBar /> */}
                    {/* <Header /> */}
                    {/* <About /> */}
                    {/* <Skills /> */}
                    {/* <Projects /> */}
                    {/* <Contact />  */}
                    {/* <Route path="/" component={HomeComponent} /> */}
                    <Route path="/" component={Welcome} />
                    <Route path="/about" component={About} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/projects" component={Projects} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
