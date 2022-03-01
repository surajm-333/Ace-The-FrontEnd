import React from 'react'
import {Typography } from 'antd';
import {Link} from "react-router-dom";
import {HomeOutlined , MoneyCollectOutlined, BulbOutlined } from "@ant-design/icons";
import icon from "../image/shiba.png"

const Navbar = () => {
    return (
        <div className='nav__container'>
            <div className='logo__container'>
                {<img src={icon} className='logo-image' alt='logo'/>}
                <Typography.Title level={2}  >
                    <Link to="/" style={{color:"black"}} className='logo'>CRYPTORUSH</Link>
                </Typography.Title>
            </div>
            <div className='navbar__items'>
                <ul>
                    <Link to="/"><li>{<HomeOutlined/>} Home</li></Link>
                    <Link to="/cryptocurrencies"><li>{<MoneyCollectOutlined/>} Cryptocurrencies</li></Link>
                    <Link to="/news"><li>{<BulbOutlined/>} News</li></Link>
                </ul>
            </div>   
            

        </div>
    )
}

export default Navbar
