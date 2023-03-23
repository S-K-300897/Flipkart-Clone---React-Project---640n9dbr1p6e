import React, { useState, useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import MoreT from '../MoreT/MoreT';
import LoginT from '../Login/LoginT';
import 'tippy.js/themes/light.css';
import { Modal, Badge } from 'antd';
import './header.css'
import LoginPage from '../LoginPage/LoginPage';
import { Link } from 'react-router-dom'
import { DetailContext } from '../../Router';
const Header = () => {
  const [openmodal, setOpenModal] = useState(false);
  const handleCapture = () => {
    setOpenModal(false);
  }
  const { detail } = useContext(DetailContext);
  // const name = localStorage.getItem('name');
  // const onlogout =()=> {
  //   localStorage.removeItem('userLoggedIn');

  // }
  return (
    <div className="header" >
      <Link className="header_first" to={'/'}>
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart logo" />
        <div className="header_first1">
          <span style={{ fontSize: "11px", color: "white", fontStyle: "italic" }} >Explore</span>
          <span style={{ color: "#f9e107", fontSize: "11px", fontStyle: "italic" }}>Plus</span>
          <span>
            <img
              width="10px"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="" />
          </span>
        </div>
      </Link>
      <div className="header_second">
        <input type="text" placeholder='Search for products, brands and more' />
        <SearchIcon />
      </div>
      <div className="header_third">
        <Tippy
          content={<LoginT></LoginT>}
          theme="light"
          interactive={true}
          offset={[5, 18]}
        >
          <div className='header_third1'>

            {localStorage.getItem('userLoggedIn')=="aditya"? (<><span className='welcome'>Welcome Aditya</span><button onClick={()=>localStorage.removeItem('userLoggedIn')}><Link to={'/'}>Logout</Link></button></>)
           : ( <button onClick={() => setOpenModal(true)}>Login</button>) 
           
            }
            <Modal footer={false}
              open={openmodal} maskClosable={true} width={800} onCancel={() => setOpenModal(false)} bodyStyle={{ height: "500px", width: "600px" }}>
              <LoginPage handleCapture={handleCapture} />
            </Modal>
          </div>
        </Tippy>
      </div>
      <div className="header_fourth">
        <Tippy content={<MoreT></MoreT>}
          interactive={true}
          theme="light"
          offset={[5, 18]}
        >

          <span>More</span>
        </Tippy>
        <ExpandMoreIcon />
      </div>
      <Link className="header_fifth" to={'/cart'}>
        <Badge count={detail.length}>
          <ShoppingCartIcon style={{ color: "white" }} />
        </Badge>
        <p>Cart</p>
      </Link>
    </div>
  )
}

export default Header