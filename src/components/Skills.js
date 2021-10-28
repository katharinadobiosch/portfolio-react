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
                            Since beginning my journey as a Web Developer nearly
                            1 year ago, I will graduate from DCI with a
                            certification in Full Stack Web Development in
                            January 2022. I learned the basics of HTML, CSS and
                            JavaScript. With my design background it was quite
                            easy to also understand the fundamentals of UI and
                            UX design. I also have experience in MERN Stack,
                            working with data bases like SQLite, MySQL and
                            MongoDB. Through my journey I noticed that my heart
                            beats definitely for Frontend Development and that's
                            the reason why I put my focus on HTML, CSS and
                            React. I am naturally curious, and constantly
                            learning new things. I am very excited to see what
                            will lead me on this journey of development.
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
