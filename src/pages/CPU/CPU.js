import React from 'react';
import styles from "./CPU.module.css";
import {Link} from "react-router-dom";
import AMD from '../../Assets/amd.webp'
import corei9 from '../../Assets/coreI9.webp'
import pentium from '../../Assets/pentium.webp'
import celerone from '../../Assets/celerone.webp'

const Cpu = () => {
    return (
        <div className={styles.cpu}>
            <Link to='/Amd'>
                <div className={styles.card}>
                    <img src={AMD} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>AMD</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/IntelCore'>
                <div className={styles.card}>
                    <img src={corei9} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>INTEL i3, i5, i7, i9</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/Pentium'>
                <div className={styles.card}>
                    <img src={pentium} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>INTEL Pentium Dual Core</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/Celeron'>
                <div className={styles.card}>
                    <img src={celerone} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>Intel Celerone</h3>
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

export default Cpu;