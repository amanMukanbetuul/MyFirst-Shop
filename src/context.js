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
      axios(`http://localhost:8080/sneakers?title_like=${title}`)
          .then(({data}) => setShoes(data))
          .catch((err) => alert('Error'))
    };

    const postFavourites = (item) => {
        axios.post('http://localhost:8080/favourites', {...item})
            .then(() => getAllFavourites())
    };

    const delFavourites = (id) => {
      axios.delete(`http://localhost:8080/favourites/${id}`)
          .then(() => getAllFavourites())
    };

    const getAllFavourites = () => {
        axios.get('http://localhost:8080/favourites')
            .then(({data}) => setFavourites(data))
            .catch((err) => alert('Error'))
    };

    const getAllOrders = () => {
        axios.get('http://localhost:8080/orders')
            .then(({data}) => setOrders(data))
            .catch((err) => alert('Error'))
    };

    const postOrders = (item) => {
        axios.post('http://localhost:8080/orders', {...item})
            .then(() => getAllOrders())
    };

    const getMonitors = (title = '') => {
        axios(`http://localhost:8080/Monitor?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getAmd = (title = '') => {
        axios(`http://localhost:8080/amdCPU?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getIntelCore = (title = '') => {
        axios(`http://localhost:8080/intelCore?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getPentium = (title = '') => {
        axios(`http://localhost:8080/pentium?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getCeleron = (title = '') => {
        axios(`http://localhost:8080/celeron?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };
    const getSocket1151 = (title = '') => {
        axios(`http://localhost:8080/socket1151?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocketLGA1700 = (title = '') => {
        axios(`http://localhost:8080/LGA1700?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };


    const getSocket1150 = (title = '') => {
        axios(`http://localhost:8080/socket1050?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocket1151Gen = (title = '') => {
        axios(`http://localhost:8080/socket1151Gen?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };


    const getSocketAMD = (title = '') => {
        axios(`http://localhost:8080/AMD?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSocketLGA= (title = '') => {
        axios(`http://localhost:8080/LGA1200?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr4= (title = '') => {
        axios(`http://localhost:8080/DDR4?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr5= (title = '') => {
        axios(`http://localhost:8080/DDR5?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDdr3= (title = '') => {
        axios(`http://localhost:8080/DDR3?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const addShoesInCart = (id) => {
        let idx = shoes.findIndex((item) => item.id === id);
        setCart([...cart, shoes[idx]])
    };

    const getSSD   = (title = '') => {
        axios(`http://localhost:8080/SSD?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getCases   = (title = '') => {
        axios(`http://localhost:8080/cases?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getVideo   = (title = '') => {
        axios(`http://localhost:8080/VideoCard?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getDvdrom  = (title = '') => {
        axios(`http://localhost:8080/Dvd?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getCooler  = (title = '') => {
        axios(`http://localhost:8080/Cooler?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getPowerUntil   = (title = '') => {
        axios(`http://localhost:8080/powerUntil?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getSound  = (title = '') => {
        axios(`http://localhost:8080/Sound?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getLaserPrinter = (title = '') => {
        axios(`http://localhost:8080/LaserPrinters?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getMfuPrinter = (title = '') => {
        axios(`http://localhost:8080/MFUPrinter?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getJetPrinter = (title = '') => {
        axios(`http://localhost:8080/JetPrinters?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getExternal = (title = '') => {
        axios(`http://localhost:8080/External?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getWebCam = (title = '') => {
        axios(`http://localhost:8080/WebCam?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getHubs = (title = '') => {
        axios(`http://localhost:8080/Hubs?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getKeyboard = (title = '') => {
        axios(`http://localhost:8080/Keyboards?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getMouse = (title = '') => {
        axios(`http://localhost:8080/mouses?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getUSB = (title = '') => {
        axios(`http://localhost:8080/usb?title_like=${title}`)
            .then(({data}) => setShoes(data))
            .catch((err) => alert('Error'))
    };

    const getMicroSd = (title = '') => {
        axios(`http://localhost:8080/MicroSD?title_like=${title}`)
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
        setBurgerMenu,
        getMouse,
        getUSB,
        getMicroSd

    };

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
};