import React from 'react';
import Slider from "./Slider/Slider";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {Link} from 'react-router-dom'
import styles from './home.module.css'


import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation, Autoplay} from "swiper";
import "swiper/css";
import "swiper/css/autoplay";



import Case from './mainMenu/Case.jpg'
import Headphone from './mainMenu/Headphone.jpg'
import Keyboard from './mainMenu/Keyboard.jpg'
import Monitor from './mainMenu/Monitor.jpg'
import Mouse from './mainMenu/Mouse.jpg'
import Sound from './mainMenu/Sound.jpg'
import Connectors from './mainMenu/Connectors.jpg'
import Core from './mainMenu/Core.jpg'
import Discovod from './mainMenu/Discovod.jpg'
import External from './mainMenu/External.jpg'
import HUB from './mainMenu/HUB.jpg'
import MicroSd from './mainMenu/MicroSd.jpg'
import Mother from './mainMenu/MotherBoard.jpg'
import OZU from './mainMenu/OZU.jpg'
import PowerUntill from './mainMenu/PowerUntil.jpg'
import Printer from './mainMenu/Printer.jpg'
import Router from './mainMenu/Router.jpg'
import Security from './mainMenu/SecurityPower.jpg'
import SSD from './mainMenu/SSD.jpg'
import USB from './mainMenu/USB.jpg'
import VideoCard from './mainMenu/VideoCard.jpg'
import WebCam from './mainMenu/WebCam.jpg'
import Cooler from './mainMenu/Cooler.jpg'
import Notebook from './mainMenu/Notebook.png'
import Arrow from './mainMenu/Arrow.png'

import Mothers from  './mainMenu/Mother.png'
import Video from  './mainMenu/Video.png'
import Monitors from  './mainMenu/monitors.png'
import phones from  './mainMenu/phones.png'
import cooling from  './mainMenu/cooling.png'




const Home = () => {

    return (
        <section>
            <Slider/>
            <div className={styles.action}>
                <h2 className={styles.title}>Каталог товаров</h2>
            </div>

            <Swiper loop={true} autoplay={{
                delay: 50,
                disableOnInteraction: false
            }} className='mySwiper'>
                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <div className={styles.carousel}>
                                <img src={Video} alt=""/>
                                <p>Graphics Card</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Monitors} alt=""/>
                                <p>Monitors</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={phones} alt=""/>
                                <p>Phones</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={cooling} alt=""/>
                                <p>Cooling</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Mothers} alt=""/>
                                <p>Motherboard</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <div className={styles.carousel}>
                                <img src={Video} alt=""/>
                                <p>Graphics Card</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Monitors} alt=""/>
                                <p>Monitors</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={phones} alt=""/>
                                <p>Phones</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={cooling} alt=""/>
                                <p>Cooling</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Mothers} alt=""/>
                                <p>Motherboard</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <div className={styles.carousel}>
                                <img src={Video} alt=""/>
                                <p>Graphics Card</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Monitors} alt=""/>
                                <p>Monitors</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={phones} alt=""/>
                                <p>Phones</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={cooling} alt=""/>
                                <p>Cooling</p>
                            </div>
                            <div className={styles.carousel}>
                                <img src={Mothers} alt=""/>
                                <p>Motherboard</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


            <div className={styles.mainMenuContent}>

                <div className={styles.row}>

                    <Link to='/Pc'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Ноутбуки</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Notebook} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/monitor'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Мониторы</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Monitor} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/CPUs'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Процессоры</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Core} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>


                    <Link to='/MotherBoard'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Материнские платы</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Mother} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/OZU'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Опер. память</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={OZU} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='SSDs'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Жеские и SSD диски</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={SSD} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Casess'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Корпуса для ПК</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Case} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Power'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Блоки питания</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={PowerUntill} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Video'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Видеокарты</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={VideoCard} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/CdRom'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Оптические приводы</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Discovod} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Coolers'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Системы охлаждения</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Cooler} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>


                    <Link to='/Sounds'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Колонки (акустика)</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Sound} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='/Keyboard'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Клавиатруы</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Keyboard} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <Link to='Mouses'>
                    <div className={styles.card}>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Мышки</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Mouse} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </div>
                     </Link>



                    <Link to='/Printers'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Принтеры</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={Printer} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>


                    <Link to='ExternalHDD'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>Внешние жеские диски</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={External} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>


                    <Link to='Usbs'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>Флеш-карты USB (флешки)</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={USB} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                    </Link>


                    <Link to='/Microsds'>
                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>SD, MicroSD, Card Reader</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={MicroSd} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                    </Link>



                    <Link to='/WebCams'>
                        <div className={styles.card}>
                            <div>
                                <h1 className={styles.title}>WEB камеры</h1>
                                <p className={styles.price}>От 26.000 сом</p>
                            </div>
                            <div className={styles.cardFlex}>
                                <img className={styles.image} src={WebCam} alt=""/>
                                <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                            </div>
                        </div>
                    </Link>

                    <div className={styles.card}>
                        <div>
                            <h1 className={styles.title}>Наушники</h1>
                            <p className={styles.price}>От 26.000 сом</p>
                        </div>
                        <div className={styles.cardFlex}>
                            <img className={styles.image} src={Headphone} alt=""/>
                            <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                        </div>
                    </div>
                    
                     <Link to='/Hub'>
                         <div className={styles.card}>
                             <div>
                                 <h1 className={styles.title}>Хабы</h1>
                                 <p className={styles.price}>От 26.000 сом</p>
                             </div>
                             <div className={styles.cardFlex}>
                                 <img className={styles.image} src={HUB} alt=""/>
                                 <button className={styles.CardBtn}><img src={Arrow} alt=""/></button>
                             </div>
                         </div>
                     </Link>

                </div>

            </div>


        </section>
    );
};

export default Home;