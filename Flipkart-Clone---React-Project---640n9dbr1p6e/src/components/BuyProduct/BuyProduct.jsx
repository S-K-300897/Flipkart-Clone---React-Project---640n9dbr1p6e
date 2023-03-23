import React, { useState } from 'react';
import './buyProduct.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Modal } from 'antd';
import { MDBBtn,MDBRadio, MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import Payment from './Payment';

export default function BuyProduct({handlePayment}) {
  return (
    <>
    <div className="py-0" style={{ maxWidth: '1000px' }}>
      <div className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className="my-4 shadow-3">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-xl-block bg-image">
                <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Sample photo" fluid />
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                  <div className="justify-content-center align-items-center h-100">
                    <div className="text-center" style={{ marginTop: '220px' }}>
                      <MDBIcon fas icon="truck text-white" size="3x" />
                      <p className="text-white title-style">Flipkart delivery</p>
                      <p className="text-white mb-0"></p>

                      <figure className="text-center mb-0">
                        <blockquote className="blockquote text-white">
                          <p className="pb-3">
                            <MDBIcon fas icon="quote-left text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                            <span className="lead font-italic">Everything at your doorstep.</span>
                            <MDBIcon fas icon="quote-right text-primary" size="xs" style={{color: 'hsl(210, 100%, 50%)'}} />
                          </p>
                        </blockquote>
                      </figure>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol md="5">
                <MDBCardBody className="p-md-3 text-black">
                  <MDBTypography tag="h3" className="mb-4 text-uppercase">Delivery Info</MDBTypography>

                  <MDBRow>
                    <MDBCol md="6" className="mb-2">
                      <MDBInput label='First name' type='text' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <MDBInput label='Last name' type='text' size="lg" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput label='Address' type='text' className="mb-2" size="lg" />

                  <MDBRow>
                    <MDBCol md="6" className="mb-2">
                      <MDBInput label='State' type='text' size="lg" />
                    </MDBCol>
                    <MDBCol md="6" className="mb-2">
                      <MDBInput label='City' type='text' size="lg" />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput label='Zip' type='text' className="mb-2" size="lg" />

                  <MDBInput label='Email' type='text' className="mb-2" size="lg" />

                  <Payment handlePayment={handlePayment} />

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </div>
    </div>
     
   </>
  );
}