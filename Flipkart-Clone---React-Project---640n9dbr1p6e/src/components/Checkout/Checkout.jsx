import React, { useContext, useState, useEffect } from 'react'
import './checkout.css';
import { Modal } from 'antd';
import BuyProduct from '../BuyProduct/BuyProduct';
import { DetailContext } from '../../Router';
import Header from '../Header/Header';
import { Link, Navigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

// import {HomeContext } from '../ProductPage/ProductDetails'

function Checkout() {
//    const [increase, setIncrease] = useState(1);
    const { detail } = useContext(DetailContext);
    const [addressmodal, setAddressmodal] = useState(false);
    console.log(detail);
    const handlePayment = () => {
        setAddressmodal(false);

    }

 const onCheckout = ()=>{
    
    if(localStorage.getItem("userLoggedIn") !== "aditya"){
        alert("You have to log in first");
        // Navigate("/");
    } else{
        setAddressmodal(true);
    }
    
 }

    return (
        <>
        <Header />
            {detail.length > 0 ? (<div className="checkout">
                <div className="left_page">
                    <div className="itemlist">
                        {detail.map((data) => <div className="itemcheckout">
                            <div>
                                <img height="150px" src={data.image} alt="" />
                                <div>
                                <span><RemoveCircleOutlineIcon /></span>
                                <input className='countinput' type="number" value={1} />
                                <span><AddCircleOutlineIcon /></span>
                                <span><button className='removebtn'>Remove</button></span>
                                </div>
                            </div>
                            <div className='titledetails'>
                                <p>{data.title}</p>
                                <h3>Black</h3>
                                <p>Seller:Noymi</p>
                                <p>रु{data.price}</p>
                            </div>
                        </div>
                        )}
                    </div>
                    <div className="right_page">
                        <span className='price_det'>PRICE DETAILS</span>
                        <div className="discount">
                            <div className="price_item">
                                <div>
                                    Price - 4 items
                                </div>
                                <div>
                                रु. 125
                                </div>
                            </div>
                            <div className="price_item">
                                <div>
                                    Discount
                                </div>
                                <div>
                                    - रु. 25
                                </div>
                            </div>
                            <div className="price_item">
                                <div>
                                    Delivery Charges
                                </div>
                                <div>
                                    Free
                                </div>
                            </div>
                            <div className=" item1">
                                <div>
                                    Total Amount
                                </div>
                                <div>
                                रु. 100
                                </div>
                            </div>

                        </div>
                        <div className="saverupee">
                            You will save रु. 15 on this order
                        </div>

                        <div className='btndetails'>
                            <button onClick={onCheckout}>CheckOut</button>
                            <Modal open={addressmodal} footer={null} bodyStyle={{ height: "500px" }} className="addressmodal">
                                <BuyProduct handlePayment={handlePayment} />
                            </Modal>
                        </div>
                    </div>
                </div>

            </div>) : (<div>
              
            <div className='emptymain'>
                <div className='empty2'>
                    <img src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
                    <div className='empty3'>Your cart is empty!</div>
                    <div className='empty4'>Add items to it now.</div>
                    <Link to={"/"}>
                    <button className='empty5'>Shop now</button>
                    </Link>
                </div>
            </div>
            </div>)
            }
        </>
    )
}

export default Checkout