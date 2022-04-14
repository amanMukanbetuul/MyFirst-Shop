import React from 'react';
import styles from "./OZU.module.css";
import {Link} from "react-router-dom";
import ddr4 from '../../Assets/Ram/ddr4.webp'
import ddr5 from '../../Assets/Ram/ddr5.webp'
import ddr3 from '../../Assets/Ram/ddr3.webp'

const Ozu = () => {
    return (
        <div className={styles.cpu}>
            <Link to='/ddr4'>
                <div className={styles.card}>
                    <img src={ddr4} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>DDR4</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/ddr5'>
                <div className={styles.card}>
                    <img src={ddr5} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>DDR5</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/ddr3'>
                <div className={styles.card}>
                    <img src={ddr3} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>DDR3</h3>
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

export default Ozu;