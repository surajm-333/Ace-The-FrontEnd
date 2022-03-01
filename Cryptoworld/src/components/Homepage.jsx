import { Statistic, Typography, Row, Col } from 'antd'
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import { Cryptocurrencies, News} from "../components"
import {Link} from "react-router-dom"
import Loader from './Loader'


const Homepage = () => {

    const {data, isFetching} = useGetCryptosQuery(10);
    const globalStatus = data?.data?.stats
    if(isFetching) return <Loader />
    return (
        <div className='homepage__container'>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
                <Row>
                    <Col span={18}><Statistic className='subheading' title="Total CryptoCurrencies" value={globalStatus.total}></Statistic></Col>
                    <Col span={6}><Statistic className='subheading' title="Total Exchanges" value={millify(globalStatus.totalExchanges)}></Statistic></Col>
                    <Col span={18}><Statistic className='subheading' title="Total Marketcap" value={millify(globalStatus.totalMarketCap)}></Statistic></Col>
                    <Col span={6}><Statistic className='subheading' title="Total Markets" value={millify(globalStatus.totalMarkets)}></Statistic></Col>
                    <Col span={24}><Statistic className='subheading' title="Total 24h Volume" value={millify(globalStatus.total24hVolume)}></Statistic></Col>
                </Row>
                <div className='more-home-heading-container'>
                    <Typography.Title level={2} className='more-heading'>Top 10 CryptoCurrencies in the World</Typography.Title>
                    
                </div>
                <Cryptocurrencies simplified />
               <Typography.Title level={5} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Typography.Title> 
                <div className='more-home-heading-container'>
                    <Typography.Title level={2} className='more-heading'>Crypto News</Typography.Title>
                    
                </div>
                <News simplified />
                <Typography.Title level={5} className='show-more'><Link to='/news'>Show more</Link></Typography.Title>
        </div>
    )
}

export default Homepage
