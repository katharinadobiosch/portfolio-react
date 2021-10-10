import styles from "../styles/_contact.module.scss";

const Contact = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;form</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>
                    <div className={styles.flex_item_content}>
                        <form className={styles.form}>
                            <input placeholder="Your name" />
                            <input placeholder="Your E-Mail" />
                            <textarea placeholder="Drop me a line :)" />
                            <button>
                                <span>Send</span>
                            </button>
                        </form>
                    </div>
                    <div className={styles.flex_item_closing}>
                        <span className={styles.span_pink}>&lt;/form&gt;</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
