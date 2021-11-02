import React, { useState } from "react";
import styles from "../styles/_projects.module.scss";
import BurgerBuilder from "../img/burger_creator.png";
import ModalProj01 from "./ModalProj01";
import ModalProj02 from "./ModalProj02";
import ModalProj03 from "./ModalProj03";

const Projects = () => {
    const [show01, setShow01] = useState(false);
    const [show02, setShow02] = useState(false);
    const [show03, setShow03] = useState(false);

    const openModal01 = (event) => {
        event.preventDefault();
        setShow01(true);
    };

    const closeModal01 = (event) => {
        event.preventDefault();
        setShow01(false);
    };

    const openModal02 = (event) => {
        event.preventDefault();
        setShow02(true);
    };

    const closeModal02 = (event) => {
        event.preventDefault();
        setShow02(false);
    };

    const openModal03 = (event) => {
        event.preventDefault();
        setShow03(true);
    };

    const closeModal03 = (event) => {
        event.preventDefault();
        setShow03(false);
    };

    return (
        <>
            <div id="projects" className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;div</span>{" "}
                        <span className={styles.span_yellow}>id</span>=
                        <span className={styles.span_green}>"projects"</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>
                    <div className={styles.flex_item_content}>
                        <ModalProj01 onClose={closeModal01} show={show01} />
                        <ModalProj02 onClose={closeModal02} show={show02} />
                        <ModalProj03 onClose={closeModal03} show={show03} />
                        <div className={styles.running_text}>
                            Here are a few projects I have worked on recently
                        </div>

                        <div className={styles.projects_container}>
                            <div
                                className={styles.project_item}
                                // onClick={openModal}
                            >
                                <img
                                    src={BurgerBuilder}
                                    alt="Burger Builder"
                                    onClick={openModal01}
                                />
                            </div>
                            <div className={styles.description}>
                                <a
                                    className={styles.a}
                                    href="https://katharinadobiosch.github.io/burger-builder/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    BURGER BUILDER
                                    {/* <i class="fas fa-external-link-alt" />
                                    <i class="fab fa-github" /> */}
                                </a>
                                <br />
                                Biscuit lollipop jujubes ice cream cake soufflé
                                brownie jujubes halvah. Lemon drops soufflé
                                caramels liquorice gummi bears ice cream icing
                                candy canes. Chupa chups chocolate bar cake
                                bonbon gingerbread dessert donut gummies cake.
                                Cake cupcake soufflé fruitcake sesame snaps ice
                                cream sweet cake. Chocolate cake bonbon
                                chocolate bar dessert biscuit. Dragée lemon
                                drops gummies dessert chocolate bar lemon drops
                                chocolate topping cheesecake.
                            </div>

                            <div className={styles.project_item}>
                                <img
                                    src={BurgerBuilder}
                                    alt="Burger Builder"
                                    onClick={openModal02}
                                />
                            </div>
                            <div className={styles.description}>
                                Biscuit lollipop jujubes ice cream cake soufflé
                                brownie jujubes halvah. Lemon drops soufflé
                                caramels liquorice gummi bears ice cream icing
                                candy canes. Chupa chups chocolate bar cake
                                bonbon gingerbread dessert donut gummies cake.
                                Cake cupcake soufflé fruitcake sesame snaps ice
                                cream sweet cake. Chocolate cake bonbon
                                chocolate bar dessert biscuit. Dragée lemon
                                drops gummies dessert chocolate bar lemon drops
                                chocolate topping cheesecake.
                            </div>

                            <div className={styles.project_item}>
                                <img
                                    src={BurgerBuilder}
                                    alt="Burger Builder"
                                    onClick={openModal03}
                                />
                            </div>
                            <div className={styles.description}>
                                Biscuit lollipop jujubes ice cream cake soufflé
                                brownie jujubes halvah. Lemon drops soufflé
                                caramels liquorice gummi bears ice cream icing
                                candy canes. Chupa chups chocolate bar cake
                                bonbon gingerbread dessert donut gummies cake.
                                Cake cupcake soufflé fruitcake sesame snaps ice
                                cream sweet cake. Chocolate cake bonbon
                                chocolate bar dessert biscuit. Dragée lemon
                                drops gummies dessert chocolate bar lemon drops
                                chocolate topping cheesecake.
                            </div>
                        </div>
                    </div>
                    <div className={styles.flex_item_closing}>
                        <span className={styles.span_pink}>&lt;/div&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
