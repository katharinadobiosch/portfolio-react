import React from "react";
import styles from "../styles/_modalProj04.module.scss";

const ModalProj04 = (props) => {
    if (!props.show) {
        return null;
    }

    const stop = (event) => {
        event.stopPropagation();
    };
    return (
        <>
            <div className={styles.modal_container}>
                <div
                    className={styles.modal_background}
                    onClick={props.onClose}
                >
                    <div className={styles.modal_content} onClick={stop}>
                        <div className={styles.modal_header}>
                            <i class="fas fa-times" onClick={props.onClose}></i>
                        </div>
                        <div className={styles.modal_body}>
                            <iframe
                                title="Food Order App App"
                                // style={{ width: "80%", height: "80%" }}
                                src="https://katharinadobiosch.github.io/food-order-app/"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalProj04;
