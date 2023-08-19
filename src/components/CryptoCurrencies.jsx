import React ,{useState,useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'
import {Card,Row,Col,Input} from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { current } from '@reduxjs/toolkit'
import Loader from './Loader';



const CryptoCurrencies = ({simplified}) => {
  const count=simplified ? 10 : 100
  const {data:cryptosList,isFethcingh} =useGetCryptosQuery(count);
  const[cryptos,setCryptos]=useState([])
  
  const [searchTerm,setSearchTerm] = useState('')
  /*callback function and dependency array*/
  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);
  /*function gets executed whenever these two values cryptoList or search Temr changes*/
  
  /*allows to search for the details of the crypto coin being searched*/
  
  if (isFethcingh) return  <Loader/>

  return (
    <>
    {!simplified &&(
    <div className='search-crypto'>
      <input placeholder='Search CryptoCurrency' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/>

    </div>
    )}
    <Row gutter={[32,32]} className='crypto-card-container'>
      {cryptos?.map((currency)=>(
        /*instatntly returning so no curly brackets*/
        <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
          <Link to={`/crypto/${currency.id}`}>
            <Card title={`${currency.rank}.${currency.name}`}
            extra={<img className='crypto-image' src={currency.iconUrl}/>}
            hoverable
            /*making card hoverable*/
             /*milify to make the data readable*/
            >
              <p>Price :{millify(currency.price)}</p>
             
              <p>Market Cap :{millify(currency.marketCap)}</p>
              <p>Daily Change :{millify(currency.change)}</p>



            </Card>

          </Link>

        </Col>

      ))}
    </Row>
    </>
    
  )
}

export default CryptoCurrencies