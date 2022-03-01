import React from 'react'
import {Switch , Route , Link} from "react-router-dom";
import {Layout, Typography , Space} from "antd";
import { Navbar, Cryptocurrencies, Homepage , CryptoDetails, News } from "./components/index"
import "./App.css"

function App() {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar />
            </div>

            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Switch>
                            <Route exact path="/">
                                <Homepage/>
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies/>
                            </Route>
                            <Route exact path="/crypto/:coinId">
                                <CryptoDetails/>
                            </Route>
                            <Route exact path="/news">
                                <News/>
                            </Route>
                        </Switch>
                    </div>
                </Layout>
            </div>

            <div className='footer'>
                <Typography.Title level={5} className='copyright' style={{color:"black", textAlign:"center"}}>
                    <span>CryptoRush</span> <br/>
                    All Right Reserved
                </Typography.Title>
                <Space className='footer-text'>
                    <Link to="/">Home</Link>
                    <Link to="/cryptocurrencies">Cryptocurrencies</Link>
                    <Link to="/news">News</Link>
                </Space>
                <p>Made with 💖 By Abhishek</p>
            </div>
        </div>
    )
}

export default App
