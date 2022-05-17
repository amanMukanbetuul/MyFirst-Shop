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

    const {header, headerNav, headerLeft, headerSubtitle, headerRight,header_icon, headerRightText, headerRightBasket,nav_bar_contact,burger_btn,header_flex} = styles;

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