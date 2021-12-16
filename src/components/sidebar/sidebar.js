import React from 'react'
import './sidebar.css'

export const Sidebar = () => {
    return (
        <div className='sidebar-area'>
            <div className='list-item-area'><p className='list-item'>Siparişler</p></div>
            <div className='list-item-area'><p className='list-item'>Üye Ekle</p></div>
            <div className='list-item-area'><p className='list-item'>Menü</p></div>
        </div>
    )
}
