import React, { useState } from "react";
import styles from "../styles/_hamburgerMenu.module.scss";

// import { HashLink as Link } from "react-router-hash-link";
// import { NavLink, Link, animateScroll as scroll } from "react-scroll";

const HamburgerMenu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const closeMenu = (event) => {
        event.preventDefault();
        setShowMenu(false);
        console.log("menu item was clicked");
    };

    // if (value === true) return false;

    // // MENU IS VISIBLE WHEN WEBSITE LOADS
    // const [showMenu, setShowMenu] = useState(true);

    // const closeMenu = (event) => {
    //     event.preventDefault();
    //     setShowMenu(false);
    //     console.log("button was clicked");
    // };

    // const closeMenu = (event) => {
    //     if (event.target.value === true) {
    //         setShowMenu(false);
    //         console.log("button was clicked");
    //     }
    // };

    //     if (!props.show) {
    //         return null;
    //     }

    return (
        <>
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input
                        className={styles.input}
                        type="checkbox"
                        // onChange={closeMenu}
                        // // MENU IS VISIBLE WHEN WEBSITE LOADS
                        // checked={showMenu}
                    />

                    {/* Some spans to act as a hamburger.*/}

                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>

                    <ul className={`${styles.menu} ${styles.ul}`}>
                        <a className={styles.a} href="#about">
                            <li
                                className={styles.li}
                                onClick={closeMenu}
                                // value={true}
                            >
                                ::about
                            </li>
                        </a>

                        <a className={styles.a} href="#skills">
                            <li className={styles.li} onClick={closeMenu}>
                                ::skills
                            </li>
                        </a>

                        <a className={styles.a} href="#projects">
                            <li className={styles.li} onClick={closeMenu}>
                                ::projects
                            </li>
                        </a>

                        <a className={styles.a} href="#contact">
                            <li className={styles.li} onClick={closeMenu}>
                                ::contact
                            </li>
                        </a>

                        <a
                            className={styles.a}
                            href="https://github.com/katharinadobiosch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={styles.icons} onClick={closeMenu}>
                                <i class="fab fa-github"></i>
                            </li>
                        </a>

                        <a
                            // className={styles.a}
                            href="https://www.linkedin.com/in/katharina-dobiosch/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={styles.icons} onClick={closeMenu}>
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
