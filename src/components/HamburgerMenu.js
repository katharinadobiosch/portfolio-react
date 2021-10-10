import styles from "../styles/_hamburgerMenu.module.scss";

const HamburgerMenu = () => {
    return (
        <>
            <div className={styles.nav}>
                <div className={styles.menuToggle}>
                    {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
                    <input className={styles.input} type="checkbox" />

                    {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>
                    <span className={styles.span}></span>

                    {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}
                    <ul className={`${styles.menu} ${styles.ul}`}>
                        <a className={styles.a} href="#">
                            <li className={styles.li}>::about</li>
                        </a>
                        <a className={styles.a} href="#">
                            <li className={styles.li}>::skills</li>
                        </a>
                        <a className={styles.a} href="#">
                            <li className={styles.li}>::projects</li>
                        </a>
                        <a className={styles.a} href="#">
                            <li className={styles.li}>::contact</li>
                        </a>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;
