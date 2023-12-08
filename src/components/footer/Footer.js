import React from 'react'
import "./Footer.css"
import { FaApple, FaGooglePlay } from "react-icons/fa";
import insta from "../../assets/instagram-logo-svg-vector-for-print.svg"
import tg from "../../assets/tg-svg.png"
import yt from "../../assets/Youtube.svg"
import fb from "../../assets/Facebook_icon_2013.svg.png"
import { useLocation } from 'react-router-dom';

function Footer() {
    const { pathname } = useLocation()
    console.log(pathname);
    if(pathname.includes("login")){
      return <></>
    }
  return (
    <div className='container'> 
         <div className="footer">
            <div className="footer__with__boxes">
                <div className="footer__box">
                    <b>Biz haqimizda</b>
                    <span>Topshirish punktlari</span>
                    <span>Vakansiyalar</span>
                </div>
                <div className="footer__box">
                    <b>Foydalanuvchilarga</b>
                    <span>Biz bilan bog'lanish</span>
                    <span>Savol-Javob</span>
                </div>
                <div className="footer__box">
                    <b>Tadbirkorlarga</b>
                    <span>Uzumda soting</span>
                    <span>Sotuvchi kabinetga kirish</span>
                </div>
                <div className="footer__box">
                    <b>Ilovani yuklab olish</b>
                    <div className="src">
                    <div className="app">
                        <FaApple className='apple'/>
                        <p>AppStore</p>
                    </div>
                    <div className="app">
                        <FaGooglePlay className='gplay'/>
                        <p>Google Play</p>
                    </div>
                    </div>
                    <b className='uzum'>Uzum ijtimoiy tarmoqlarda</b>
                    <div className="platforms">
                        <img src={insta} alt="" />
                        <img src={tg} alt="" />
                        <img src={yt} alt="" />
                        <img src={fb} alt="" />
                    </div>
                </div>
                
            </div>
            <div className="footer__bottom">
                <div className="about">
                    <p>Maxfiylik kelishuvi</p>
                    <p>Foydalanuvchi kelishuvi</p>
                </div>
                <span>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</span>
            </div>
        </div>
    </div>
  )
}

export default Footer