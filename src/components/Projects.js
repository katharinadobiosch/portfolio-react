import styles from "../styles/_projects.module.scss";
import BurgerBuilder from "../img/burger_creator.png";

const Projects = () => {
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
                        <div>
                            Here are a few projects I have worked on recently
                        </div>

                        <div className={styles.projects_container}>
                            <div className={styles.project_item}>
                                <img src={BurgerBuilder} alt="Burger Builder" />
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
                                <img src={BurgerBuilder} alt="Burger Builder" />
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
                                <img src={BurgerBuilder} alt="Burger Builder" />
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
