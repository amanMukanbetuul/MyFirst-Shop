import React from 'react';
import styles from './slider.module.css'
import asus from './image13.png'
import "swiper/css";
import "swiper/css/navigation";
const Slider = () => {

    const {slider, sliderLeft, sliderTitle, sliderBtn,sliderText, sliderRight, sliderContent, sliderRightImg} = styles;

    return (
        <section className={slider}>
                    <div className={sliderContent}>
                        <div className={sliderLeft}>
                                <h2 className={sliderTitle}>Неограниченная <span>свобода</span> творчества.</h2>
                                <p className={sliderText}>У нас есть уникальные решения, которые выведут вашу работу на новый уровень</p>
                                <button type='button' className={sliderBtn}>Смотреть</button>
                        </div>

                        <div className={sliderRight}>
                            <img className={sliderRightImg} src={asus} alt=""/>
                        </div>
                    </div>
        </section>
    );
};

export default Slider;