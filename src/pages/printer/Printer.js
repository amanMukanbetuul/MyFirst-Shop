import React from 'react';
import styles from "./Printer.module.css";
import {Link} from "react-router-dom";
import Laser from '../../Assets/Printerss/1.webp'
import Mfu from '../../Assets/Printerss/2.webp'
import Jets from '../../Assets/Printerss/3.webp'

const Printer = () => {
    return (
        <div className={styles.cpu}>
            <Link to='/LaserPrinters'>
                <div className={styles.card}>
                    <img src={Laser} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket 1151 V2 (8th & 9th Gen)</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/MFUPrinters'>
                <div className={styles.card}>
                    <img src={Mfu} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket LGA 1700 (12th Gen)(12)</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/JetPrinters'>
                <div className={styles.card}>
                    <img src={Jets} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket 1150</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

        </div>
    );
};

export default Printer;