import React from 'react';
import styles from './fixedTop.module.css';

const FixedTopModule = () => {
    return (
        <div className={styles.fixedTop}>
            <div className={styles.container}>
                <div className={styles.item}>
                    A <span className={styles.value}>$127,381,188,456</span> <span
                    className={styles.percentage}>-1.92%</span>
                </div>
                <div className={styles.item}>
                    B <span className={styles.value}>$69,472,009,791</span> <span
                    className={styles.percentage}>-0.51%</span>
                </div>
                <div className={styles.item}>
                    C <span className={styles.value}>$123,643,002</span> <span
                    className={styles.percentage}>-19.68%</span>
                </div>
                <div className={styles.item}>
                    D <span className={styles.value}>50.39%/49.61%</span>
                </div>
            </div>
        </div>
    );
};

export default FixedTopModule;
