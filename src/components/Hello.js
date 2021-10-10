import styles from "../styles/_hello.module.scss";

const Hello = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_content}>
                        <h1>
                            HELLO,
                            <br /> nice to see you.
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hello;
