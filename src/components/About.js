import styles from "../styles/_about.module.scss";

import Header from "./Header";

import CV from "../pdf/Katharina_Dobiosch_CV.pdf";

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
                            and home accessories and discovered my passion for -
                            above all - high quality products there.
                            <br />
                            <br />
                            After moving to Berlin and working as a{" "}
                            <span className={styles.span}>
                                store manager{" "}
                            </span>{" "}
                            in retail for a few years, it was time to live my
                            dream: I{" "}
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
                            <div className={styles.download_section}>
                                <span className={styles.download_icon}>
                                    <a
                                        href={CV}
                                        download="CV Katharina Dobiosch"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Download my CV
                                        <i class="fas fa-file-download"></i>
                                    </a>
                                </span>
                            </div>
                            {/* <div>
                                <span className={styles.download_CV}>
                                    Download my CV
                                </span>
                                <a
                                    className={styles.download_CV_logo}
                                    href="/images/myw3schoolsimage.jpg"
                                    download="w3logo"
                                >
                                    <i class="fas fa-file-download"></i>
                                </a>
                            </div> */}
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
