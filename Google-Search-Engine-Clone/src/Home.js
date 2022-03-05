import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core"; 
import Search from "./Search";

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <a href="https://about.google/">About</a>
                    <a href="https://store.google.com/">Store</a>
                </div>
                <div className="home__headerRight">
                    <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">Gmail</a>
                    <a href="https://www.google.co.in/imghp?hl=en&tab=wi&ogbl">Images</a>
                    <AppIcon />
                    <Avatar />
                </div>
            </div>

            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" 
                     alt="" 
                />
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
