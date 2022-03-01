import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useGetCryptosDetailsQuery, useGetCryptosHistroyDetailsQuery } from '../services/cryptoApi'
import millify from 'millify';
import Loader from './Loader'
// import Linechart from './Linechart';
import { DollarCircleOutlined , ThunderboltOutlined, FundOutlined, MoneyCollectOutlined, ExclamationCircleOutlined, StopOutlined, NumberOutlined, CheckOutlined, TrophyOutlined } from '@ant-design/icons'
import {Typography, Row, Col} from 'antd'


const CryptoDetails = () => {

    const { coinId } = useParams();
    const [timeperiod, setTimeperiod] = useState('7d');
    const { data , isFetching } = useGetCryptosDetailsQuery(coinId);
    const { data:coinHistory } = useGetCryptosHistroyDetailsQuery({coinId ,timeperiod});
    console.log(coinHistory);
    if( isFetching ) return <Loader />;
    const cryptoDetails = data?.data?.coin ;

    //const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    const stats = [
        { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
        { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
        { title: '24h Volume', value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`, icon: <ThunderboltOutlined /> },
        { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
        { title: 'All-time-high(daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
      ];
    
      const genericStats = [
        { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
        { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
        { title: 'Aprroved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
        { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
        { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
      ];

    return (
        <Col className='coin-detail-container'>
            <Col className='coin-detail'>
                <Typography.Title className='coin-title'>
                    {<img className='crypto-image' src={cryptoDetails.iconUrl} alt=''/>} {cryptoDetails.name} Price
                </Typography.Title>
                <p>{cryptoDetails.name} Live Price in USD</p>
            </Col>
            {/* <Select defaultValue='7d' placeholder='Select Time Period' style={{width:'200px'}} onChange={(value) => setTimeperiod(value)}>
                {time.map((date) => (
                    <Option key={date}>{date}</Option>
                ))}
            </Select> */}
            {/* <Linechart coinHistory = {coinHistory} currentPrice = {millify(cryptoDetails.price)} cryptoName = {cryptoDetails.name} /> */}
            <Col className='stats-container'>
                <Col className='coin-stats'>
                    <Col className='coin-stats-heading'>
                        <Typography.Title level={2} className='coin-stats-detail-heading'>
                            {cryptoDetails.name} Value Statistics
                        </Typography.Title>
                        <p>
                            Some More Detials Of {cryptoDetails.name}
                        </p>
                    </Col>
                    {stats?.map(({title,value,icon}) =>(
                        <Col className='coin-details'>
                            <Col className='coin-details-name'>
                                <Typography.Text>{icon}</Typography.Text>
                                <Typography.Text>{title}</Typography.Text>
                            </Col>
                                <Typography.Text className='stats'>{value}</Typography.Text>
                        </Col>
                    ))}
                </Col>
                <Col className='coin-stats'>
                    <Col className='coin-stats-heading'>
                        <Typography.Title level={2} className='coin-stats-detail-heading'>
                            Other Statistics Values
                        </Typography.Title>
                        <p>
                            Some more information about the Cryptocurrency
                        </p>
                    </Col>
                    {genericStats.map(({title,value,icon}) =>(
                        <Col className='coin-details'>
                            <Col className='coin-details-name'>
                                <Typography.Text>{icon}</Typography.Text>
                                <Typography.Text>{title}</Typography.Text>
                            </Col>
                                <Typography.Text className='stats'>{value}</Typography.Text>
                        </Col>
                    ))}
                </Col>
            </Col>
            <Col className='specific-crypto-detail'>
                <Row className='detail'>
                    <Typography.Title className='specific-crypt-detail-heading' level={1}>
                        More About {cryptoDetails.name} 
                        <Typography.Text className='specific-description'>{HTMLReactParser(cryptoDetails.description)} </Typography.Text> 
                    </Typography.Title>   
                </Row>
            </Col>
        </Col>
    )
}

export default CryptoDetails
