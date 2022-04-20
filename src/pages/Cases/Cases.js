import React, {useEffect, useContext, useState} from 'react';
import {CustomContext} from "../../context";
import { BsCheck } from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import {FcLike} from "react-icons/fc";
import {LazyLoadImage} from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from '../../pages/pc.module.css'


const Cases = () => {

    const {getCases, shoes, addShoesInCart, cart, deleteShoesInCart, postFavourites, favourites, delFavourites} = useContext(CustomContext);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search !== '') {
            getCases(search)
        } else  {
            getCases()
        }
    }, [search]);

    return (
        <section>

            <div className={styles.action}>
                <h2 className={styles.title}>Ноутбуки</h2>
                <input onChange={(e) => setSearch(e.target.value)} type="search" className={styles.search}
                       placeholder='Поиск...'/>
            </div>


            <div className={styles.row}>


                {shoes.map((item) => (

                    <div className={styles.card} key={item.id}>

                        <div className={styles.pageContent}>

                            <div className={styles.imageContent}>
                                <LazyLoadImage effect='blur' src={item.imageUrl} alt="img" className={styles.cardImg}/>
                            </div>

                            <div className={styles.priceContent}>
                                <div className={styles.cardTitle}>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <div className={styles.fullDiscr}>
                                        <p className={styles.discription}>Диагональ/разрешение <span>{item.diagonal}</span></p>
                                        <p className={styles.discription}>Процессор <span>{item.cpu}</span></p>
                                        <p className={styles.discription}>Оперативная память <span>{item.ram}</span></p>
                                        <p className={styles.discription}>Графический контроллер<span> {item.videoCard}</span></p>
                                        <p className={styles.discription}>Объем <span>{item.Gigabyte}</span></p>
                                    </div>

                                </div>
                            </div>
                            <div className={styles.cardPrice}>
                                <p className={styles.cardPriceNum}>{item.price.toString().slice(0, -3)} {item.price.toString().substr(-3,)} сом</p>
                                <div className={styles.buyLike}>
                                    {
                                        cart.filter((el) => el.id === item.id).length ?
                                            <button type='button' className={styles.cardBtnCheck}
                                                    onClick={() => deleteShoesInCart(item.id)}>В корзине</button>
                                            :
                                            <button type='button' className={styles.cardBtn}
                                                    onClick={() => addShoesInCart(item.id)}>В корзину</button>
                                    }{
                                    favourites.filter((element) => element.id === item.id).length
                                        ? <button type='button' className={styles.cardLike}
                                                  onClick={() => delFavourites(item.id)}><FcLike/></button>
                                        : <button type='button' className={styles.cardLike}
                                                  onClick={() => postFavourites(item)}><BsHeart/></button>
                                }
                                </div>
                            </div>






                        </div>
                        <hr/>
                    </div>

                ))}
            </div>

        </section>
    );
};

export default Cases;