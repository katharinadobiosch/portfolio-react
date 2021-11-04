import styles from "../styles/_skills.module.scss";
import "animate.css";

const Skills = () => {
    return (
        <>
            <div id="skills" className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;div</span>{" "}
                        <span className={styles.span_yellow}>id</span>=
                        <span className={styles.span_green}>"skills"</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>
                    <div className={styles.flex_item_content}>
                        <div className={styles.running_text}>
                            One year after the beginning of my journey as a Web
                            Developer, I will graduate from DCI with a
                            certification in Full Stack Web Development in
                            January 2022. I have learnt the basics of HTML, CSS
                            and JavaScript. With my design background it was
                            quite easy to also understand the fundamentals of UI
                            and UX design. Additionally, I have experience in
                            MERN Stack, working with data bases like SQLite,
                            MySQL and MongoDB. Throughout my journey I noticed
                            that my heart definitely beats for Frontend
                            Development which is the reason why I put my focus
                            on HTML, CSS and React. I am naturally curious, and
                            like to constantly learn new things. I am very
                            excited to see where this journey of development
                            will take me to.
                        </div>
                        <div className={styles.logos}>
                            {/* <i class="fab fa-js"></i> */}

                            {/* <i class="fab fa-node-js"></i> */}

                            {/* <i class="fab fa-node"></i> */}

                            <i class="fab fa-html5"></i>

                            <i class="fab fa-css3"></i>

                            <i class="fab fa-sass"></i>

                            <i class="fab fa-js-square"></i>

                            <i class="fab fa-react"></i>

                            {/* <i class="fab fa-git"></i> */}

                            {/* <i class="fab fa-git-square"></i> */}

                            {/* <i class="fab fa-git-alt"></i> */}
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

export default Skills;
