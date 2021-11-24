import styles from "../styles/_contact.module.scss";
// import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div id="contact" className={styles.main}>
                <div className={styles.flex_container}>
                    <div className={styles.flex_item_opening}>
                        <span className={styles.span_pink}>&lt;form</span>
                        <span className={styles.span_pink}>&gt;</span>
                    </div>

                    <div className={styles.flex_item_content}>
                        <form
                            action="https://usebasin.com/f/e3757595a834
"
                            method="POST"
                            className={styles.form}
                        >
                            <input
                                type="text"
                                name="username"
                                placeholder="Your name"
                            />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your E-Mail"
                                required
                            />
                            <textarea
                                type="text"
                                placeholder="Drop me a line :)"
                            />

                            {/* <Link to="/ThankYou"> */}
                            <div className={styles.button_container}>
                                <button type="submit">
                                    <span className={styles.span}>Send</span>
                                </button>
                            </div>
                            {/* </Link> */}
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
