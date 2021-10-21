import React from "react";
import styles from "../styles/_modalProj02.module.scss";

const ModalProj02 = (props) => {
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
                            WORKOUT GENERATOR{" "}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ModalProj02;
