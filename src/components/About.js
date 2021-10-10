import styles from "../styles/_about.module.scss";

import Header from "./Header";

const About = () => {
    return (
        <>
            <div className={styles.main}>
                <Header />
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;div</span>{" "}
                        <span className={styles.span_yellow}>id</span>=
                        <span className={styles.span_green}>"about"</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>

                    <div className={styles.flex_item_content}>
                        Born in Poland in 1986, I came to Germany a few years
                        later with my parents and just two suitcases. Many years
                        later I graduated in{" "}
                        <span className={styles.span}>
                            communication design
                        </span>
                        , worked in retail for years and opened my own kids
                        concept store. My heart definitely beats for{" "}
                        <span className={styles.span}>pretty things</span>. Also
                        for <span className={styles.span}>design</span>. And for
                        <span className={styles.span}> code</span>.
                    </div>
                    <div className={styles.flex_item_closing}>
                        <span className={styles.span_pink}>&lt;/div&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
