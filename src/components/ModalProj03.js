import React from "react";
import styles from "../styles/_modalProj03.module.scss";

const ModalProj03 = (props) => {
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
                                title="Blog Layout"
                                // style={{ width: "80%", height: "80%" }}
                                src="https://katharinadobiosch.github.io/cooking-blog-layout/"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
        // <>
        //     <div className={styles.modal_container}>
        //         <div
        //             className={styles.modal_background}
        //             onClick={props.onClose}
        //         >
        //             <div className={styles.modal_content} onClick={stop}>
        //                 <div className={styles.modal_header}>
        //                     <i class="fas fa-times" onClick={props.onClose}></i>
        //                 </div>
        //                 <div className={styles.modal_body}>
        //                     <div className={styles.browser_image}>
        //                         <img
        //                             src={BlogLayout}
        //                             alt="Blog Layout"
        //                             style={{ width: "100%", height: "auto" }}
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    );
};

export default ModalProj03;
