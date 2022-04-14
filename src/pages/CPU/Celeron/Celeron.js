import React, {useContext, useEffect, useState} from 'react';
import {CustomContext} from "../../../context";
import { BsCheck } from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import {FcLike} from "react-icons/fc";
import styles from "./Celeron.module.css";
import {LazyLoadImage} from "react-lazy-load-image-component";

const Celeron = () => {

    const {shoes, addShoesInCart, cart, deleteShoesInCart, postFavourites, favourites, delFavourites,getCeleron} = useContext(CustomContext);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search !== '') {
            getCeleron(search)
        } else  {
            getCeleron()
        }
    }, [search]);
    return (


        <section>

            <div className={styles.action}>
                <h2 className={styles.title}>Процессоры Pentium</h2>
                <input onChange={(e) => setSearch(e.target.value)} type="search" className={styles.search} placeholder='Поиск...'/>
            </div>



            <div className={styles.row}>


                {shoes.map((item) => (

                    <div className={styles.card} key={item.id}>
                        {
                            favourites.filter((element) => element.id === item.id).length
                                ? <button type='button' className={styles.cardLike} onClick={() => delFavourites(item.id)}><FcLike /></button>
                                : <button type='button' className={styles.cardLike} onClick={() => postFavourites(item)}><BsHeart /></button>
                        }
                        <div className={styles.pageContent}>

                            <div className={styles.imageContent}>
                                <LazyLoadImage effect='blur' src={item.imageUrl} alt="img" className={styles.cardImg}/>
                            </div>

                            <div className={styles.priceContent}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>

                                <div className={styles.cardFooter}>
                                    <div className={styles.cardPrice}>
                                        <h4 className={styles.cardPriceTitle}>Цена:</h4>
                                        <p className={styles.cardPriceNum}>{item.price.toString().slice(0, -3)}, {item.price.toString().substr(-3,)} .сом</p>
                                    </div>
                                    {
                                        cart.filter((el) => el.id === item.id).length ?
                                            <button type='button' className={styles.cardBtnCheck} onClick={() => deleteShoesInCart(item.id)}> <BsCheck/> </button>
                                            :
                                            <button type='button' className={styles.cardBtn} onClick={() => addShoesInCart(item.id)}>Купить</button>
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

export default Celeron;