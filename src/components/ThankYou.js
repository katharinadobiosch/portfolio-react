import Header from "./Header";
import styles from "../styles/_thankYou.module.scss";

const ThankYou = () => {
    return (
        <>
            <Header />
            <div id="skills" className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;div</span>{" "}
                        <span className={styles.span_yellow}>id</span>=
                        <span className={styles.span_green}>"thank_you"</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>
                    <div className={styles.flex_item_content}>
                        <div className={styles.running_text}>
                            Thanks you for your message. I'll come back to you
                            asap :)
                            <div className={styles.logos}>
                                <i class="fas fa-birthday-cake"></i>
                                {/* <i class="fas fa-birthday-cake"></i>
                                <i class="fas fa-birthday-cake"></i> */}
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

export default ThankYou;
