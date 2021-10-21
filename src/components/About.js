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
                        Born in Poland in 1986, I came to Germany a few years
                        later with my parents and just two suitcases. I’ve
                        always loved design and pretty things, so I suppose it’s
                        natural that I graduated in communication design.
                        <br />
                        During my studies which I completed with a design
                        diploma, I worked in a shop for high-class jewelry,
                        watches and home accessories and discovered there my
                        passion for above all, high quality products.
                        <br /> <br />
                        After moving to Berlin, working for a few years in
                        retail as a store manager it was time to live my dream:
                        I opened my own store. During this time I gained
                        experience like x, y, z which I am convinced will
                        benefit my new career as a Web Developer. When I decided
                        to change my career path in 2021, I was finally able to
                        know what my strengths are and in which field I can set
                        it up.
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
