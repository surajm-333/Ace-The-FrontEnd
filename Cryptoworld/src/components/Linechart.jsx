import React from 'react'
import { Line } from 'react-chartjs-2'
import {Col , Row, Typography} from 'antd'

const Linechart = ({coinHistory, currentPrice, cryptoName}) => {

    const coinPrice = [];
    const cointimeStamp = [];

    for(let i=0; i < coinHistory?.data?.history?.length ; i+=1){
        coinPrice.push(coinHistory?.data?.history[i].price);
        
    }
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        cointimeStamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      }


    const data = {
        labels: cointimeStamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      }
    

      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
            },
          ],
        },
      };

      console.log(data);
     
   

    return (
        <>
            <Row className='chart-heading-container'>
                <Typography.Title className='coin-name'>{cryptoName}</Typography.Title>
                <Col className='history-detail'>
                    <Typography.Text className='coin-history'>Change: {coinHistory?.data?.change}%</Typography.Text>
                    <Typography.Text className='current-price'>Current{cryptoName} Price: ${currentPrice}</Typography.Text>
                </Col>
            </Row>
            {/* <Line data={data} options={options} /> */}
           
        </>
            
    )
}

export default Linechart
