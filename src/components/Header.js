import styles from "../styles/_header.module.scss";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
    return (
        <>
            <div className={styles.flex_container}>
                <div className={styles.flex_item_left}>
                    KATHARINA
                    <br />
                    <span className={styles.name_spacing}>DOBIOSCH</span>
                </div>
                <div className={styles.flex_item_right}>
                    <HamburgerMenu />
                </div>
            </div>
        </>
    );
};

export default Header;
