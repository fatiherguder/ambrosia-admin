import React, { useEffect, useState } from 'react';
import './menu.css'
import { Card, Button } from 'react-bootstrap';
import { IoMdAdd } from 'react-icons/io';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore"
import { initializeApp } from "firebase/app";
import { Link } from 'react-router-dom';


const burger = '../../assets/img/burger.jpg';

export const Menu = () => {
  const [menuData, setMenuData] = useState([])
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
  

  const getMenuData = async () => {
    const docSnap = await getDoc(doc(db, "markets", "2WBgM5IxBtu4feMvPCvN"));
    console.log(docSnap.data().menu);
    setMenuData(docSnap.data().menu)
}

useEffect(() => {
  getMenuData()
  console.log(menuData);
},[menuData])

  return <div>
    <div className='addBtn'>
      <div className='btn'><Link to="/add-menu"><IoMdAdd color='white' size={'18px'}/></Link></div>
    </div>
      <div className='cardArea'>
      {
        menuData != null ? (
            menuData?.map(item => {
              return <Card style={{ width: '18rem', margin:'10px'}}>
              <Card.Img variant="top" src='https://firebasestorage.googleapis.com/v0/b/ambrosia-bef41.appspot.com/o/food-1.jpg?alt=media&token=984ced95-2861-4be4-a001-38d8f800b4f3'/>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Card.Text>{item.price}₺</Card.Text>
              </Card.Body>
            </Card>
            })
        ):null
      }
      </div>
  </div>;
};
