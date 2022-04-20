import React from 'react';
import styles from "./CPU.module.css";
import {Link} from "react-router-dom";
import AMD from '../../Assets/ryzen.jpg'
import corei9 from '../../Assets/coreI9.jpg'
import pentium from '../../Assets/PRPDCE5700-1.jpg'
import celerone from '../../Assets/orig.webp'
import Arrow from "../Home/mainMenu/Arrow.png";

const Cpu = () => {
    return (
        <div>
            <h1>Процессоры</h1>
            <div className={styles.cpu}>
                <Link to='/Amd'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>AMD Ryzen</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={AMD} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                </Link>

                <Link to='/IntelCore'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>Intel i3, i5, i7, i9</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={corei9} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                </Link>

                <Link to='/Pentium'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>INTEL Pentium Dual Core</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={pentium} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                </Link>

                <Link to='/Celeron'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>Intel Celeron</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={celerone} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>


    );
};

export default Cpu;