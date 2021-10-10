import styles from "../styles/_welcome.module.scss";

const Welcome = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_content}>
                        <h1>
                            Hi, nice to
                            <br /> see you. <br />
                            I'm <span className={styles.span}>Katharina</span>.
                            <br />
                            A Full Stack Web Developer with a design background.
                            <br /> I live in Berlin.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
