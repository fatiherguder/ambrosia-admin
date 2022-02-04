import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { OrderCard } from '../../components/orderCard/orderCard';
import './order.css'

export const Order = () => {

    const id = "2WBgM5IxBtu4feMvPCvN"
    const firebaseConfig = {
        apiKey: "AIzaSyBE_-xpFeQYe1TOE9DzHPtJNFoyN-2ZlUA",
        authDomain: "ambrosia-bef41.firebaseapp.com",
        projectId: "ambrosia-bef41",
        storageBucket: "ambrosia-bef41.appspot.com",
        messagingSenderId: "278877228571",
        appId: "1:278877228571:web:87c5e693bb5e48fc00b2be",
        measurementId: "${config.measurementId}"
      };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();
    const [marketData, setMarketData] = useState([])
    const [orderData, setOrderData] = useState([])

    const fetchData = async() => {
        await getDoc(doc(db, "markets", id)).then(data=>{
            setOrderData(data.data().orders)
            })
        //await setOrderData(marketData.orders)
        //console.log(orderData);   
    }

    useEffect(() => {
        fetchData()
    },[])


  return <div className='order-area'>
      {
          orderData?.map(item => {
              return <OrderCard name={item?.name} adress={item?.adress} phone={item?.phone} order={item?.cart}/>
          })
      }
  </div>;
};
