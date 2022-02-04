import React from 'react';
import './orderCard.css'

export const OrderCard = ({name,adress,phone,order}) => {


  return (
    <>
    <div className='card-area'>
        <div className='title-area'>
            <p className='title'>{name}</p>
        </div>
        <div className='info-area'>
            <p className='info-text'><b>Adress:</b> {adress}</p>
            <p className='info-text'><b>Telefon:</b> {phone}</p>
        </div>
        <div className='order-list-area'>
            <p className='info-text'><b>Order:</b></p>
            {console.log(order)}
            <ul>
                {
                    order?.map(item => {
                        return <li>{item?.title} <p>{item.price}₺</p></li>
                    })
                }
            </ul>
        </div>
    </div>
  </>
  )
  
};
