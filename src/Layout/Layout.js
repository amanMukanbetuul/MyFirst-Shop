import React, {useContext, useEffect, useState} from 'react';
import Header from "./Header/Header";
import {Routes, Route} from 'react-router-dom'
import {CustomContext} from "../context";
import Home from "../pages/Home/Home";
import Buy from "../pages/Buy/Buy";
import Favourites from "../pages/Favourites/Favourites";
import styles from './layout.module.css'
import Cart from "./Cart/Cart";
import axios from "axios";
import Order from "../pages/Order/Order";


import Pc from "../pages/PC/Pc";
import Monitor from "../pages/Monitors/Monitor";
import Cpu from "../pages/CPU/CPU";
import Amd from "../pages/CPU/Amd/Amd";
import IntelCore from "../pages/CPU/CoreI5/intelCore";
import Pentium from "../pages/CPU/Pentium/Pentium";
import Celeron from "../pages/CPU/Celeron/Celeron";
import Mb from "../pages/MotherBoard/MB";
import Socket1151 from "../pages/MotherBoard/Socket1151/Socket1151";
import Lga1700 from "../pages/MotherBoard/SocketLGA/LGA1700";
import Socket1150 from "../pages/MotherBoard/Socket1150/Socket1150";
import Socket1151Gen from "../pages/MotherBoard/Socket1151Gen/Socket1151Gen";
import SocketAmd from "../pages/MotherBoard/SocketAMD/SocketAMD";
import SocketLGA1200 from "../pages/MotherBoard/SocketLGA1200/SocketLGA1200";
import Ozu from "../pages/DDR/OZU";
import Ddr4 from "../pages/DDR/DDR4/ddr4";
import Ddr5 from "../pages/DDR/DDR5/DDR5";
import Ddr3 from "../pages/DDR/DDR3/DDR3";
import Ssd from "../pages/SSD/SSD";
import Cases from "../pages/Cases/Cases";
import PowerUntil from "../pages/PowerUntil/PowerUntil";
import VideoCard from "../pages/VideoCard/VideoCard";
import Sound from "../pages/Sound/Sound";
import DvdRom from "../pages/DvdRom/DvdRom";
import Cooler from "../pages/Cooler/Cooler";
import Printer from "../pages/printer/Printer";
import LaserPr from "../pages/printer/LaserPrinter/LaserPr";
import Mfu from "../pages/printer/MFU/MFU";
import Jet from "../pages/printer/Jet/Jet";
import External from "../pages/ExternalHDD/External";
import WebCam from "../pages/WebCam/WebCam";
import Hub from "../pages/Hubs/Hub";


const Layout = () => {
    const {layout} = styles;

    const [isCart, setIsCart] = useState(false);
    const {getAllFavourites} = useContext(CustomContext);


    useEffect(() => {
      getAllFavourites()
    }, []);


    return (
        <div className={layout}>
            <Header isCart={isCart} setIsCart={setIsCart}/>

            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/buy' element={<Buy/>}/>
                <Route path='/favourites' element={<Favourites/>}/>
                <Route path='/order' element={<Order/>}/>
                <Route path='/pc' element={<Pc/>}/>
                <Route path='/monitor' element={<Monitor/>}/>
                <Route path='/CPU' element={<Cpu/>}/>
                <Route path='/Amd' element={<Amd/>}/>
                <Route path='/IntelCore' element={<IntelCore/>}/>
                <Route path='/Pentium' element={<Pentium/>}/>
                <Route path='/Celeron' element={<Celeron/>}/>
                <Route path='/MotherBoard' element={<Mb/>}/>
                <Route path='/Socket1151' element={<Socket1151/>}/>
                <Route path='/SocketLGA1700' element={<Lga1700/>}/>
                <Route path='/Socket1150' element={<Socket1150/>}/>
                <Route path='/Socket1151Gen' element={<Socket1151Gen/>}/>
                <Route path='/SocketAMD' element={<SocketAmd/>}/>
                <Route path='/SocketLGA1200' element={<SocketLGA1200/>}/>
                <Route path='/OZU' element={<Ozu/>}/>
                <Route path='/ddr4' element={<Ddr4/>}/>
                <Route path='/ddr5' element={<Ddr5/>}/>
                <Route path='/ddr3' element={<Ddr3/>}/>
                <Route path='/SSDs' element={<Ssd/>}/>
                <Route path='/Casess' element={<Cases/>}/>
                <Route path='/Power' element={<PowerUntil/>}/>
                <Route path='/Video' element={<VideoCard/>}/>
                <Route path='/Sounds' element={<Sound/>}/>
                <Route path='/CdRom' element={<DvdRom/>}/>
                <Route path='/Coolers' element={<Cooler/>}/>
                <Route path='/Printers' element={<Printer/>}/>
                <Route path='/LaserPrinters' element={<LaserPr/>}/>
                <Route path='/MFUPrinters' element={<Mfu/>}/>
                <Route path='/JetPrinters' element={<Jet/>}/>
                <Route path='/ExternalHDD' element={<External/>}/>
                <Route path='/WebCams' element={<WebCam/>}/>
                <Route path='/Hub' element={<Hub/>}/>




            </Routes>
            <Cart isCart={isCart} setIsCart={setIsCart}/>
        </div>
    );
};

export default Layout;