import styles from "../styles/_projects.module.scss";

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
                            <div className={styles.project_item}></div>
                            <div className={styles.project_item}></div>{" "}
                            <div className={styles.project_item}></div>
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
