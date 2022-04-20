import React, {useContext, useEffect, useState} from 'react';
import styles from "./Amd.module.css";
import {BsHeart} from 'react-icons/bs'
import {FcLike} from "react-icons/fc";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {CustomContext} from "../../../context";

const Amd = () => {

    const {shoes, addShoesInCart, cart, deleteShoesInCart, postFavourites, favourites, delFavourites,getAmd} = useContext(CustomContext);

    const [search, setSearch] = useState('');

    useEffect(() => {
        if (search !== '') {
            getAmd(search)
        } else  {
            getAmd()
        }
    }, [search]);
    return (
        <section>

            <div className={styles.action}>
                <h2 className={styles.title}>Процессоры AMD</h2>
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

export default Amd;