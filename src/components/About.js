import styles from "../styles/_about.module.scss";

import Header from "./Header";

const About = () => {
    return (
        <>
            <div id="about" className={styles.main}>
                <Header />
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;div</span>{" "}
                        <span className={styles.span_yellow}>id</span>=
                        <span className={styles.span_green}>"about"</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>

                    <div className={styles.flex_item_content}>
                        {/* Born in Poland in 1986, I came to Germany a few years
                        later with my parents and just two suitcases. Many years
                        later I graduated in{" "}
                        <span className={styles.span}>
                            communication design
                        </span>
                        , worked in retail for years and opened my own kids
                        concept store. My heart definitely beats for{" "}
                        <span className={styles.span}>pretty things</span>. Also
                        for <span className={styles.span}>design</span>. And for
                        <span className={styles.span}> code</span>. */}
                        <div className={styles.running_text}>
                            Born in Poland in 1986, I came to Germany a few
                            years later with my parents and just two suitcases.
                            I’ve always loved{" "}
                            <span className={styles.span}>design</span> and{" "}
                            <span className={styles.span}>pretty things</span>,
                            so I suppose it’s natural that I graduated in{" "}
                            <span className={styles.span}>
                                communication design
                            </span>
                            .
                            <br />
                            <br />
                            During my studies which I completed with a{" "}
                            <span className={styles.span}>design diploma</span>,
                            I worked in a shop for high-class jewelry, watches
                            and home accessories and discovered there my passion
                            for above all, high quality products.
                            <br />
                            <br />
                            After moving to Berlin, working for a few years in
                            retail as a{" "}
                            <span className={styles.span}>
                                store manager{" "}
                            </span>{" "}
                            it was time to live my dream: I{" "}
                            <span className={styles.span}>
                                opened my own store
                            </span>
                            . During this time, I have noticed that I have very
                            good stamina and have been able to gain strong soft
                            skills in customer service/support. I am{" "}
                            <span className={styles.span}>
                                solution-oriented
                            </span>
                            , can{" "}
                            <span className={styles.span}>
                                adapt quickly to new situations and
                                circumstances{" "}
                            </span>
                            and, above all, am{" "}
                            <span className={styles.span}>
                                willing to learn new things
                            </span>{" "}
                            and constantly{" "}
                            <span className={styles.span}>develop myself</span>.
                            <br /> <br /> I am convinced this experience will
                            benefit my new career as a Web Developer and today I
                            am more than happy to finally know where my
                            strengths are and in which area I can use them.
                            <br />
                            <br />
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

export default About;
