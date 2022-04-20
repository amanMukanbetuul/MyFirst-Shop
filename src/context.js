 import React, {createContext, useContext, useState} from "react";
import axios from "axios";

export const CustomContext = createContext();

export const Context = (props) => {

    const [shoes, setShoes] = useState([]);
    const [monitors, setMonitors] = useState([]);
    const [cart, setCart] = useState([]);
    const [burgerMenu, setBurgerMenu] = useState([]);

    const [favourites, setFavourites] = useState([]);
    const [orders, setOrders] = useState([]);

    const [amd, setAmd] = useState([]);

    const [coreI5, setCoreI5] = useState([]);

    const [pentium, setPentium] = useState([]);

    const [celeron, setCeleron] = useState([]);

    const [socket1151, setSocket1151] = useState([]);

    const [socket1700, setSocket1700] = useState([]);

    const [socket1150, setSocket1150] = useState([]);

    const [socket1151Gen, setSocket1151Gen] = useState([]);

    const [socketAMD, setSocketAMD] = useState([]);

    const [socketLGA, setSocketLGA] = useState([]);

    const [ddr4, setDdr4] = useState([]);

    const [cooler, setCooler] = useState([]);


    const getAllShoes = (title = '') => {
      axios(`https://myfirst-shop.herokuapp.com/api?title_like=${title}`)
          .then(({data}) => setShoes(data))
          .catch((err) => alert('Error'))
    };

    const postFavourites = (item) => {
        axios.post('https://myfirst-shop.herokuapp.com/api/favourites', {...item})
            .then(() => getAllFavourites())
    };

    const delFavourites = (id) => {
      axios.delete(`https://myfirst-shop.herokuapp.com/api/favourites/${id}`)
          .then(() => getAllFavourites())
    };

    const getAllFavourites = () => {
        axios.get('https://myfirst-shop.herokuapp.com/api/favourites')
            .then(({data}) => setFavourites(data))
            .catch((err) => alert('Error'))
    };

    const getAllOrders = () => {
        axios.get('https://myfirst-shop.herokuapp.com/api/orders')
            .then(({data}) => setOrders(data))
            .catch((err) => alert('Error'))
    };

    const postOrders = (item) => {
        axios.post('https://myfirst-shop.herokuapp.com/api/orders', {...item})
            .then(() => getAllOrders())
    };

    const getMonitors = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Monitor?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getAmd = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/amdCPU?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getIntelCore = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/intelCore?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getPentium = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/pentium?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getCeleron = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/celeron?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getSocket1151 = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/socket1151?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocketLGA1700 = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/LGA1700?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };


    const getSocket1150 = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/socket1050?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocket1151Gen = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/socket1151Gen?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };


    const getSocketAMD = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/AMD?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocketLGA= (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/LGA1200?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr4= (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/DDR4?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr5= (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/DDR5?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr3= (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/DDR3?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const addShoesInCart = (id) => {
        let idx = shoes.findIndex((item) => item.id === id);
        setCart([...cart, shoes[idx]])
    };

    const getSSD   = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/SSD?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getCases   = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/cases?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getVideo   = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/VideoCard?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDvdrom  = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Dvd?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getCooler  = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Cooler?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getPowerUntil   = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/powerUntil?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSound  = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Sound?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getLaserPrinter = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/LaserPrinters?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getMfuPrinter = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/MFUPrinter?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getJetPrinter = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/JetPrinters?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getExternal = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/External?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getWebCam = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/WebCam?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getHubs = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Hubs?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getKeyboard = (title = '') => {
        axios(`https://myfirst-shop.herokuapp.com/api/Keyboards?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const deleteShoesInCart = (id) => {
        setCart(cart.filter((item) => {
            return item.id !== id;
        }))
    };


    const value = {
        shoes,
        setShoes,
        getAllShoes,
        cart,
        setCart,
        addShoesInCart,
        deleteShoesInCart,
        postFavourites,
        favourites,
        setFavourites,
        getAllFavourites,
        delFavourites,
        postOrders,
        orders,
        getAllOrders,
        monitors,
        setMonitors,
        getMonitors,
        amd,
        setAmd,
        getAmd,
        getIntelCore,
        coreI5,
        setCoreI5,
        pentium,
        setPentium,
        getPentium,
        celeron,
        setCeleron,
        getCeleron,
        getSocket1151,
        socket1151,
        setSocket1151,
        getSocketLGA1700,
        socket1700,
        setSocket1700,
        getSocket1150,
        socket1150,
        setSocket1150,
        getSocket1151Gen,
        socket1151Gen,
        setSocket1151Gen,
        getSocketAMD,
        socketAMD,
        setSocketAMD,
        getSocketLGA,
        setSocketLGA,
        socketLGA,
        getDdr4,
        setDdr4,
        ddr4,
        getDdr5,
        getDdr3,
        getSSD,
        getCases,
        getPowerUntil,
        getVideo,
        getDvdrom,
        getCooler,
        cooler,
        setCooler,
        getSound,
        getLaserPrinter,
        getMfuPrinter,
        getJetPrinter,
        getExternal,
        getWebCam,
        getHubs,
        getKeyboard,
        burgerMenu,
        setBurgerMenu

    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};