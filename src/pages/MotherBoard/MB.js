import React from 'react';
import styles from "./MB.module.css";
import {Link} from "react-router-dom";
import socket1151 from "../../Assets/MB/socket1151V2(8th9thGen)(16).webp";
import LGA1700 from "../../Assets/MB/socketLGA1700(12thGen)(12).webp";
import socket11516 from "../../Assets/MB/socket1151(6th&7thGen)(13).webp";
import socket1150 from "../../Assets/MB/socket1150(1).webp";
import AMD from "../../Assets/MB/AMD(8).webp";
import LGA1200 from "../../Assets/MB/socketLGA120010th&11thGen).webp";

const Mb = () => {
    return (
        <div className={styles.cpu}>
            <Link to='/Socket1151'>
                <div className={styles.card}>
                    <img src={socket1151} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket 1151 V2 (8th & 9th Gen)</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/SocketLGA1700'>
                <div className={styles.card}>
                    <img src={LGA1700} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket LGA 1700 (12th Gen)(12)</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/Socket1150'>
                <div className={styles.card}>
                    <img src={socket1150} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket 1150</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/Socket1151Gen'>
                <div className={styles.card}>
                    <img src={socket11516} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket 1151 (6th & 7th Gen)</h3>
                    <div className={styles.cardFooter}>
                        <div className={styles.cardPrice}>
                            <h4 className={styles.cardPriceTitle}>Цена:</h4>
                            <p className={styles.cardPriceNum}>От 26000 сом</p>
                        </div>
                    </div>
                </div>
            </Link>

            <Link to='/SocketAMD'>
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

            <Link to='/SocketLGA1200'>
                <div className={styles.card}>
                    <img src={LGA1200} alt="img" className={styles.cardImg}/>
                    <h3 className={styles.cardTitle}>socket LGA 1200 (10th & 11th Gen)(26)</h3>
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

export default Mb;