import React, { useState , useEffect} from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import Loader from './Loader'
import millify from "millify"
import { Card, Row, Col, Input } from "antd";
import { Link } from "react-router-dom"

const Cryptocurrencies = ({simplified}) => {

    const count = simplified ? 10 : 100;
    const {data: CryptoList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleChange=(e) => {
        setSearchTerm(e.target.value);
    }

    useEffect(() => {
       const filterData = CryptoList?.data?.coins.filter((coins) => coins.name.toLowerCase().includes(searchTerm.toLowerCase()));
       setCryptos(filterData);
    }, [CryptoList , searchTerm]);

    if(isFetching) return <Loader />


    return (
        <div className='crypto-container'>
            {!simplified && (
                <div className='search-crypto' >
                    <Input placeholder='Search Cryptocurrency' onChange={handleChange} />
                </div>
            )}
            
            <Row gutter={[32,32]} className='crypto-card-container'>
               {cryptos?.map((currency) => (
                   <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.uuid}>
                        <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                           <Card 
                                title ={`${currency.rank}. ${currency.name}`}
                                extra= {<img className='crypto-image' src={currency.iconUrl} alt='imageofCrypto' />}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>
                           </Card>
                        </Link>
                   </Col>
               ))}
            </Row>
        </div>
    )
}

export default Cryptocurrencies
