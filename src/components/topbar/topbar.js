import React from 'react'
import './topbar.css'
import { FiLogOut } from 'react-icons/fi';

import logo from '../../assets/logo.png';

export const Topbar = () => {
    return (
        <div className='topbar-area'>
            <div className='logo-area'>
                <img src={logo} className='logo'/>
                <p className='title'>Ambrosia</p>
            </div>
            <div className='icon-area'>
                <FiLogOut color='white' size='1.5em'/>
            </div>
        </div>
    )
}
