import React from "react";
import styles from "../styles/_hamburgerMenu.module.scss";

// import { HashLink as Link } from "react-router-hash-link";
// import { NavLink, Link, animateScroll as scroll } from "react-scroll";

const HamburgerMenu = () => {
    const onRouteHandler = (id) => {
        //  window.location.replace("/" + path);
        const elementSection = document.getElementById(id);
        const elementCheckbox = document.getElementById("checkbox-menu");

        elementSection.scrollIntoView({ behavior: "smooth" });

        elementCheckbox.click();
    };
    return (
        <>
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input
                        id="checkbox-menu"
                        className={styles.input}
                        type="checkbox"
                    />

                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>

                    <ul className={`${styles.menu} ${styles.ul}`}>
                        <span
                            className={styles.a_hamburger}
                            onClick={() => onRouteHandler("about")}
                        >
                            <li className={styles.li}>::about</li>
                        </span>

                        <span
                            className={styles.a_hamburger}
                            onClick={() => onRouteHandler("skills")}
                        >
                            <li className={styles.li}>::skills</li>
                        </span>

                        <span
                            className={styles.a_hamburger}
                            onClick={() => onRouteHandler("projects")}
                        >
                            <li className={styles.li}>::projects</li>
                        </span>

                        <span
                            className={styles.a_hamburger}
                            onClick={() => onRouteHandler("contact")}
                        >
                            <li className={styles.li}>::contact</li>
                        </span>

                        <a
                            className={styles.a_hamburger}
                            href="https://github.com/katharinadobiosch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={styles.icons}>
                                <i class="fab fa-github"></i>
                            </li>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/katharinadobiosch/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={styles.icons}>
                                <i class="fab fa-linkedin"></i>
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default HamburgerMenu;
