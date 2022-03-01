import React , { useState } from 'react'
import { useGetCryptosNewsQuery } from '../services/cryptoNewsApi'
import { useGetCryptosQuery } from '../services/cryptoApi';
import { Typography, Row, Col, Avatar, Card, Select} from 'antd';
import Loader from './Loader';
import { Option } from 'antd/lib/mentions';
import moment from 'moment'
const alternateNews = 'https://cdns-images.dzcdn.net/images/talk/2af237ee65f0d43db6eff4a1e98b1f67/1000x1000.jpg'
const News = ({simplified}) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data: cryptoNews} = useGetCryptosNewsQuery({newsCategory , count: simplified ? 6 : 12 });
    const {data} = useGetCryptosQuery(100);
    if(!cryptoNews?.value) return <Loader />;
    
    return (
        <div >
            <Row gutter={[24 , 24 ]}>

                {!simplified && (
                  
                    <Col span={24}>
                        <Select
                            showSearch
                            className='select-news'
                            placeholder='Search a Crypto'
                            optionFilterProp='children'
                            onChange={(value) => setNewsCategory(value)}
                            filterOption = {(input , option) => option.children.toLowerCase().indexOf(input.toLowerCase())}
                        >
                        <Option value='Cryptocurrency'>Cryptocurrency</Option>
                        {data?.data?.coins.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
                        </Select>
                    </Col>
                   
                )}
                {cryptoNews.value.map((news,i) => (
                    <Col xs={24} sm={12} lg={6} key={i}>
                        <Card hoverable className='card-container'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className='news-image-container'>
                                    <Typography.Title className='news-title' level={4}>{news.name}</Typography.Title>
                                    <img style={{maxWidth:'250px', maxHeight:'100px'}} src={news?.image?.thumbnail?.contentUrl || alternateNews} alt='news' />
                                </div>
                                <p>
                                    {news.description >100 ? `${news.description.substring(0 , 100 )}` : news.description}
                                </p>
                                <div className='provider-conatiner'>
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl} />
                                        <Typography.Text className='provider-name' >{news.provider[0]?.name}</Typography.Text>
                                    </div>   
                                    <Typography.Text className='news-date-time' >{moment(news.datePublished).startOf('ss').fromNow()}</Typography.Text>                                  
                                </div>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default News
