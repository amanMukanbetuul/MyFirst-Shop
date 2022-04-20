import React from 'react';
import styles from './footer.module.css'
import {GrInstagram} from 'react-icons/gr'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
    const {footer,footer_content,footer_contact,footer_text,footer_last_text,footer_icon,footer_icons,creators} = styles;

    return (
        <div className={footer}>
            <div className={footer_content}>

                <div className={footer_contact}>
                    <p>г.Бишкек, ТЦ Табылга 1-й этаж Б-132</p>
                    <p>Т:0702 887 899</p>
                    <p>Почта: kgfastcom@gmail.com</p>
                </div>
                <div className={footer_text}>
                    <h1>FastCom | Магазин компьютерной техники</h1>
                    <p>Уважаемые клиенты FastCom.kg, мы благодарны, что Вы покупаете у нас. Мы гарантируем Вам высокое качество обслуживания и выполнение всех ваших желаний. У нас вы можете бесплатно проконсультироваться, а так же мы поможем подобрать для Вас идеальный компьютер учитывая ваш бюджет. С уважением администрация FastCom.kg</p>
                    <div className={footer_icons}>
                        <span className={footer_icon}> <GrInstagram/> </span>
                        <span className={footer_icon}> <FaTelegramPlane/> </span>
                        <span className={footer_icon}> <BsWhatsapp/></span>
                        <span className={footer_icon}> <SiGmail/></span>
                    </div>
                </div>
                <div className={footer_last_text}>
                    <p>Все права защищены</p>
                    <p>FastCom.kg магазин компьютерной техники в Бишкеке</p>
                </div>

            </div>

            <div className={creators}>
                <p>CopyWrite @2022 <a href="https://www.youtube.com/">MukanbetUuluAman</a></p>
            </div>
        </div>
    );
};

export default Footer;