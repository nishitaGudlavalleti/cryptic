import React from 'react'
import {Button,Memu,Typography,Avatar, Menu} from 'antd'
import {Link} from 'react-router-dom'
import {HomeOutlined,MoneyCollectOutlined,BulbOutlined,FundOutlined,MenuOutlined} from '@ant-design/icons'
import icon from '../imgs/logo.png'
const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size ="large"/>
            <Typography.Title level={2} className='logo' >
                <Link to='/'>Cryptic</Link>

            </Typography.Title>
            <Button className='menu-control-container'></Button>

        </div>
        <Menu className='theme'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to='/'>Home</Link>

          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to='/cryptocurrencies'>CyptoCurrencies</Link>

          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to='/exchanges'>Exchanges</Link>

          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to='/news'>News</Link>
          </Menu.Item>

        </Menu>
    </div>
  )
}

export default Navbar