// import React, { useState } from "react";
import styles from "../styles/_hamburgerMenu.module.scss";

// import { HashLink as Link } from "react-router-hash-link";
import { NavLink, Link, animateScroll as scroll } from "react-scroll";

const HamburgerMenu = () => {
    // const closeHamburger = () => {
    //     const [isOpen, setIsOpen] = useState(false);
    //     const toggle = () => setIsOpen(!isOpen);
    //     const hide = () => setIsOpen(false);
    //     const show = () => setIsOpen(true);
    // };
    return (
        <>
            <nav role="navigation">
                <div className={styles.menuToggle}>
                    <input className={styles.input} type="checkbox" />

                    {/* Some spans to act as a hamburger.*/}

                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>

                    <ul className={`${styles.menu} ${styles.ul}`}>
                        <a className={styles.a} href="#about">
                            <li className={styles.li}>::about</li>
                        </a>

                        <a className={styles.a} href="#skills">
                            <li className={styles.li}>::skills</li>
                        </a>

                        <a className={styles.a} href="#projects">
                            <li className={styles.li}>::projects</li>
                        </a>

                        <a className={styles.a} href="#contact">
                            <li className={styles.li}>::contact</li>
                        </a>

                        <a
                            className={styles.a}
                            href="https://github.com/katharinadobiosch"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <li className={styles.icons}>
                                <i class="fab fa-github"></i>
                            </li>
                        </a>

                        <a
                            className={styles.a}
                            href="https://www.linkedin.com/in/katharina-dobiosch/"
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
