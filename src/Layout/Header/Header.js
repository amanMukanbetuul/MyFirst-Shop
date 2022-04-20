import React, {useContext, useState} from 'react';
import styles from './header.module.css'
import {MdOutlineLocalGroceryStore} from 'react-icons/md'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineShopping} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {CustomContext} from "../../context";
import Menu from "../../Menu/Menu";


const Header = ({isCart, setIsCart,}) => {


    const [menuActive, setMenuActive] = useState(false);

    const items = [{value: "Главная" , href: '/'},
        {value: "Контакты" , href: '/shop'},
        {value: "Наш адрес" , href: '/shop'},
        {value: "Избранные" , href: '/shop'},
        {value: "Корзина" , href: '/shop'},
        {value: "Мои покупки" , href: '/shop'},];

    const {header, headerNav, headerLeft, headerSubtitle, headerRight,header_icon, headerRightText, headerRightBasket,nav_bar,nav_bar_contact,burger_btn} = styles;

    const {cart, favourites} = useContext(CustomContext);

    return (
            <header className={header}>
                <nav className={headerNav}>
                    <Link to='/'>
                        <div className={headerLeft}>
                            <div>
                                <h1>FAST.COM</h1>
                                <span className={headerSubtitle}>Магазин компьютерной техники</span>
                            </div>
                        </div>
                    </Link>

                    <div className={burger_btn} onClick={() => setMenuActive(!menuActive)}>
                        <span/>
                    </div>

                    <div className={headerRight}>

                        <a className={nav_bar_contact} href="tel:+996700466412">0(700)466412</a>
                        <a className={nav_bar_contact} href="tel:+996700466412">0(700)466412</a>
                        <div className={headerRightBasket}>
                            <span style={{cursor: 'pointer'}} onClick={() => setIsCart(true)}>
                                <MdOutlineLocalGroceryStore/>
                            </span>
                            <p className={headerRightText}>{cart.reduce((acc, rec) => acc + rec.price, 0)} сом</p>
                        </div>

                       <Link to='/favourites'>
                           <div className={header_icon}>
                               <AiOutlineHeart/>
                               <sup style={{fontSize: '12px'}}>{favourites.length > 9 ? '9+' : favourites.length ? favourites.length : ''}</sup>
                           </div>
                       </Link>

                       <Link to='/buy'>
                           <div  className={header_icon}>
                               <AiOutlineShopping/>
                           </div>
                       </Link>
                    </div>
                </nav>
                <Menu active={menuActive} setActive={setMenuActive} mention={"FastCom"} items={items} />
            </header>
    );
};

export default Header;