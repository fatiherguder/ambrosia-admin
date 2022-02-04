import React from 'react'
import './sidebar.css'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export const Sidebar = () => {
    return (
        <div className='sidebar-area'>
            <div className='list-item-area'><Link to="/order" className='list-item'>Siparişler</Link></div>
            <div className='list-item-area'><Link to="/add-customer" className='list-item'>Üye Ekle</Link></div>
            <div className='list-item-area'><Link to="/menu" className='list-item'>Menü</Link></div>
        </div>
    )
}
