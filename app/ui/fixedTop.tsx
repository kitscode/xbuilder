import React, {useEffect, useState} from 'react';
import styles from './fixedTop.module.css';

const FixedTop = () => {
    const [snpIndex, setSnpIndex] = useState({
        "index": 0.00,
        "percent_change_24h": 0
    });

    const [sseIndex, setSseIndex] = useState({
        "index": 0.00,
        "percent_change_24h": 0
    });
    const [btcIndex, setBtcIndex] = useState({
        "price_usd": 0.00,
        "percent_change_24h": 0
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api/snp500");
            const data = await response.json();
            setSnpIndex({
                "index": data.index,
                "percent_change_24h": data.percent_change_24h
            });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://qt.gtimg.cn/q=sh000001");
            const data = await response.text();
            const numbers = data.split("~")
            setSseIndex({
                "index": parseFloat(numbers[3]),
                "percent_change_24h": parseFloat(numbers[32])
            });
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.coinlore.net/api/ticker/?id=90");
            const btc_data = (await response.json())[0];
            setBtcIndex({
                "price_usd": btc_data.price_usd,
                "percent_change_24h": btc_data.percent_change_24h
            });
        };
        fetchData();
    }, []);

    return (
        <div className={styles.fixedTop}>
            <div className={styles.container}>
                <div className={styles.item}>
                    S&P500
                    <span className={styles.value}>{snpIndex.index}</span>
                    <span
                        className={`${snpIndex.percent_change_24h >= 0 ? styles.percentage_green : styles.percentage_red}`}>
                        {snpIndex.percent_change_24h >= 0 ? '+' : ''}
                        {snpIndex.percent_change_24h}%</span>
                </div>
                <div className={styles.item}>
                    SSE
                    <span className={styles.value}>{sseIndex.index}</span>
                    <span
                        className={`${sseIndex.percent_change_24h >= 0 ? styles.percentage_green : styles.percentage_red}`}>
                        {sseIndex.percent_change_24h}%
                    </span>
                </div>
                <div className={styles.item}>
                    BTC
                    <span className={styles.value}>{btcIndex.price_usd}</span>
                    <span
                        className={`${btcIndex.percent_change_24h >= 0 ? styles.percentage_green : styles.percentage_red}`}>
                    {btcIndex.percent_change_24h}%
                    </span>
                </div>
            </div>
        </div>
    );
};

export default FixedTop;
