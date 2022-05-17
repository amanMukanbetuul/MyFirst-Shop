import React from 'react';
import styles from './slider.module.css'
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import slider1 from './fwebp.webp'
import second from './6bstc2jaxi3dicfl-0_0_desktop_1X.webp'
import third from './3s1i3dtk8v2psxlz-0_0_desktop_1X.jpg'
import img3 from './img3.webp'
import img4 from './img4.webp'
import img5 from './img5.webp'

const Slider = () => {


    const {slider,slider_img} = styles;

    return (
        <section className={slider}>
            <Swiper loop={true} autoplay={{
                delay: 5,
                disableOnInteraction: true
            }} className='mySwiper'>
                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <img className={slider_img} src={slider1} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <img className={slider_img} src={second} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.sliderContent}>
                        <div className={styles.sliderLeft}>
                            <img className={slider_img} src={third} alt=""/>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </section>
    );
};

export default Slider;