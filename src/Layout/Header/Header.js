import React, {useContext, useState} from 'react';
import styles from './header.module.css'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {CustomContext} from "../../context";
import Menu from "../../Menu/Menu";
import burger from '../../Assets/Burger2.png'


const Header = ({isCart, setIsCart,}) => {


    const [menuActive, setMenuActive] = useState(false);

    const items = [{value: "Главная" , href: '/'},
        {value: "Контакты" , href: '/shop'},
        {value: "Наш адрес" , href: '/shop'},
        {value: "Избранные" , href: '/favourites'},
        {value: "Корзина" , href: '/shop'},
        {value: "Мои покупки" , href: '/order'},];

    const {header, headerNav, headerLeft, headerSubtitle, headerRight,header_icon, header_list, headerRightBasket,ul_list,burger_btn,header_flex} = styles;

    const {cart, favourites} = useContext(CustomContext);

    return (
        <header className={header}>
            <nav className={headerNav}>
                <Link to='/'>
                    <div className={headerLeft}>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 37" svg-inline=""
                                 src="@images/logo/logo-rog.svg" alt="ROG - Republic of Gamers" role="presentation"
                                 focusable="false" className={header_icon}>
                                <path
                                    d="M22.2 29.1c.8.5 1.6 1 2.4 1.4 8.6 3.8 21.3 6.1 23.7 5.3C55 33.6 62.5 19.5 64.8 13c0 0-7 2.8-14.1 6.1-5.9 2.8-12.4 6-12.4 6l16.5-5s-4.4 10.4-10.2 11.6c-5.8 1.2-16-2.9-16-2.9.8-.7 11.6-8.6 36.8-18.9 1.1-.8 1.8-2.1 2-3.4-5.8.6-11.4 2.3-16.7 4.8-10.6 5-28.5 17.8-28.5 17.8zM3.8 24c1.8 2.3 9.2 4.2 10.2 4.4-4.6-3.2-14-12-14-12 1 2.7 2.3 5.2 3.8 7.6z"></path>
                                <path
                                    d="M25.6 22.9C30.5 19.3 47.9 4.6 64.7.6c0 0-8.8-1.4-21.3 2.5-4.5 1.4-11 7.7-23.1 19.4-1.6.9-7.5-2.5-10.9-4.1 0 0 5.6 8.9 7.6 11.5 3 4.1 8.5 6.5 8.5 6.5-.5-.5-4.3-4.5-5.4-6.8-.7-1.1.1-2.7 5.5-6.7zM127.9 6.8h-3v8.9h-5.6V6.8h-3v10.4h11.6zM152.9 15.6h-7.5V6.8h-3.1v10.4h9.2zM154.2 6.8h3.1v10.4h-3.1zM191.7 8.3h6.9l1.4-1.5h-11.4v10.4h3.1v-5.1h6.7l1.2-1.6h-7.9zM106.6 13.8h8.3V7.6c0-.4-.3-.8-.7-.8h-10.7v10.3h3.1v-3.3zm0-5.5h5c.1 0 .3 0 .3.5v3.5h-5.3v-4zM140.7 10.8h-.9v-3c0-.6-.3-1-.8-1h-9.7v10.4h11.3l.1-6.4zm-3.1 4.8h-5.2v-3.3h5.2v3.3zm0-4.8h-5.2V8.3h4.9c.3 0 .3.4.3.5v2zM100.5 8.3l1.6-1.5H90.5v10.3h11.6l-1.6-1.5h-6.9v-2.8h7.8v-1.7h-7.8V8.3zM162 8.3h7l1.5-1.5h-11.6v10.3H169l1.5-1.5H162zM154 24.5l1.3-1.5h-11.8v5.6h8.5v3.1h-8.9l1.9 1.6h10.2V27h-8.6v-2.5zM100.6 23h-11v10.3h3.1v-4.4h5.5v4.4h3.1v-9.4c.1-.4-.2-.8-.7-.9zm-2.4 4.4h-5.4v-2.9h5.1c.3 0 .3.3.3.5v2.4zM127.2 24.5l1.6-1.5h-11.7v10.3h11.7l-1.6-1.5h-7V29h7.9v-1.7h-7.9v-2.8zM86.4 24.6L88 23H75.8v10.3h11.8v-5.6h-3.1v4.1H79v-7.2zM103 23v10.4h3.2v-6l3 2.1 3.1-2.1v6h3.1V23l-6.2 4.1zM141.8 28.9v-5c0-.5-.3-1-.8-1h-11.2v10.4h3.1v-8.8h5.4c.3 0 .3.3.3.5v2h-5.1l5.6 6.3h3.7l-3.9-4.4h2.9zM88.7 14.1V7.8c0-.5 0-1-.6-1H75.8V14l3.2 3.5V8.3h6c.4 0 .5.1.5.5v3.3h-5.3l8.5 8.9v-3.5L85.5 14h3.2zM186.1 6.8h-10.5v7.5l2.5 2.9h8.7V7.6c0-.4-.3-.8-.7-.8zm-2.4 8.8h-3.3l-1.7-2V8.3h5v7.3z"></path>
                            </svg>
                            <span className={headerSubtitle}>Магазин компьютерной техники</span>
                        </div>
                    </div>
                </Link>

                <div className={burger_btn}>
                    <div className={header_flex}>
                        <img src={burger} alt=""   onClick={() => setMenuActive(!menuActive)}/>
                        <div className={headerRightBasket}>
                            <span style={{cursor: 'pointer'}} onClick={() => setIsCart(true)}>
                                <MdOutlineLocalGroceryStore/>
                            </span>
                        </div>
                    </div>

                </div>

                <div className={header_list}>
                    <ul className={ul_list}>
                        <li>PRODUCT</li>
                        <li>INNOVATION</li>
                        <li>DOWNLOADS</li>
                        <li>COMMUNITY</li>
                        <li>WHAT`S HOT</li>
                        <li>SUPPORT</li>
                    </ul>
                </div>


                <div className={headerRight}>
                    <div className={headerRightBasket}>
                            <span style={{cursor: 'pointer'}} onClick={() => setIsCart(true)}>
                                <MdOutlineLocalGroceryStore/>
                            </span>
                        <sup
                            style={{fontSize: '12px'}}>{cart.length > 9 ? '9+' : cart.length ? cart.length : ''}
                        </sup>
                    </div>

                    <Link to='/favourites'>
                        <div className={header_icon}>
                            <AiOutlineHeart/>
                            <sup
                                style={{fontSize: '12px'}}>{favourites.length > 9 ? '9+' : favourites.length ? favourites.length : ''}
                            </sup>
                        </div>
                    </Link>

                    <Link to='/buy'>
                        <div className={header_icon}>
                            <AiOutlineShopping/>
                        </div>
                    </Link>
                </div>
            </nav>
            <Menu active={menuActive} setActive={setMenuActive} mention={"FastCom"} items={items}/>
        </header>
    );
};

export default Header;