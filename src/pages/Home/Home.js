import React from 'react';
import Slider from "./Slider/Slider";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link} from 'react-router-dom'
import styles from './home.module.css'


import computers from './mainMenu/1.png';
import monitor from './mainMenu/2.jpg'
import CPU from './mainMenu/3.jpg'
import MB from './mainMenu/4.jpg'
import RAM from './mainMenu/5.jpg'
import SSD from './mainMenu/6.jpg'
import caseFrPc from './mainMenu/7.jpg'
import  powerUntil from './mainMenu/8.jpg'
import videoCard from './mainMenu/9.jpg'
import DVD from './mainMenu/10.jpg'
import culler from './mainMenu/11.jpg'
import sound from './mainMenu/12.png'
import keyboard from './mainMenu/13.jpg'
import mouse from './mainMenu/14.png'
import printer from './mainMenu/15.jpg'
import externalHDs from './mainMenu/16.jpg'
import USB from './mainMenu/17.jpg'
import MicroSD from './mainMenu/18.jpg'
import WEB from './mainMenu/19.webp'
import headphones from './mainMenu/20.jpg'
import LAN from './mainMenu/21.jpg'
import connector from './mainMenu/22.webp'
import power from './mainMenu/23.webp'
import USBHUBS from './mainMenu/24.webp'


const Home = () => {

    return (
        <section>
            <Slider/>


            <div className={styles.action}>
                <h2 className={styles.title}>Все товары </h2>
            </div>


            <div className={styles.mainMenuContent}>

                <div className={styles.row}>

                    <Link to='/Pc'>
                        <div className={styles.card}>
                            <img src={computers} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Ноутбуки</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 26000 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/monitor'>
                        <div className={styles.card}>
                            <img src={monitor} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Мониторы</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 4800 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/CPU'>
                        <div className={styles.card}>
                            <img src={CPU} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Процессоры</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 5600 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to='/MotherBoard'>
                        <div className={styles.card}>
                            <img src={MB} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Материнские платы</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 4500 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/OZU'>
                        <div className={styles.card}>
                            <img src={RAM} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Оперативная память</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 1800 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='SSDs'>
                        <div className={styles.card}>
                            <img src={SSD} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Жёсткие и SSD диски</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 1200 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Casess'>
                        <div className={styles.card}>
                            <img src={caseFrPc} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Корпуса для ПК</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 1800 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Power'>
                        <div className={styles.card}>
                            <img src={powerUntil} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Блоки питания</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 5000 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Video'>
                        <div className={styles.card}>
                            <img src={videoCard} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Видеокарты</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 7000 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/CdRom'>
                        <div className={styles.card}>
                            <img src={DVD} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Оптические приводы</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 1500 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Coolers'>
                        <div className={styles.card}>
                            <img src={powerUntil} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Блоки питания</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 5000 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <Link to='/Sounds'>
                        <div className={styles.card}>
                            <img src={sound} alt="img" className={styles.cardImg}/>
                            <h3 className={styles.cardTitle}>Колонки (акустика)</h3>
                            <div className={styles.cardFooter}>
                                <div className={styles.cardPrice}>
                                    <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                    <p className={styles.cardPriceNum}>От 300 сом</p>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className={styles.card}>
                        <img src={keyboard} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Клавиатуры</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 400 сом</p>
                            </div>
                        </div>
                    </div>


                    <div className={styles.card}>
                        <img src={mouse} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Мышки</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 300 сом</p>
                            </div>
                        </div>
                    </div>

                    <Link to='/Printers'>
                    <div className={styles.card}>
                        <img src={printer} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Принтеры</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 11500 сом</p>
                            </div>
                        </div>
                    </div>
                    </Link>


                    <Link to='ExternalHDD'>
                    <div className={styles.card}>
                        <img src={externalHDs} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Внешние жесткие диски</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 4000 сом</p>
                            </div>
                        </div>
                    </div>
                    </Link>

                    <div className={styles.card}>
                        <img src={USB} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Флеш-карты USB (флешки)</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 300 сом</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={MicroSD} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>SD, MicroSD, Card Reader</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 100 сом</p>
                            </div>
                        </div>
                    </div>

                    <Link to='/WebCams'>
                    <div className={styles.card}>
                        <img src={WEB} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>WEB камеры</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 1200 сом</p>
                            </div>
                        </div>
                    </div>
                    </Link>
                    <div className={styles.card}>
                        <img src={headphones} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Нушники</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 500 сом</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={LAN} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Сетевое оборудование</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 200 сом</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={connector} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Переходники, шнуры, коннекторы</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 50 сом</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.card}>
                        <img src={power} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>Системы защиты питания</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 3000 сом</p>
                            </div>
                        </div>
                    </div>


                     <Link to='/Hub'>
                    <div className={styles.card}>
                        <img src={USBHUBS} alt="img" className={styles.cardImg}/>
                        <h3 className={styles.cardTitle}>USB хабы</h3>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardPrice}>
                                <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                <p className={styles.cardPriceNum}>От 200 сом</p>
                            </div>
                        </div>
                    </div>
                     </Link>

                </div>

            </div>


        </section>
    );
};

export default Home;