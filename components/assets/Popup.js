import React from 'react';
import styles from '../../styles/Assets.module.css';
function Popup(props) {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popup_inner}>
                <h3>Message sent</h3>
                <button className={styles.popup_close} onClick={() => props.setTrigger(false)}>
                    OK
                </button>
            </div>
        </div>
    ) : "";
}

export default Popup;