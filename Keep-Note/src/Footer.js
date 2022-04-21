import React from 'react';
import "./style.css";

const Footer = () =>{
    const year = new Date().getFullYear();

    return <>
        <footer>
        <p>copyright Ⓒ {year}</p>
        </footer>
    </>

};

export default Footer;