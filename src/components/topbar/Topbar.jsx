import React from 'react'
import './topbar.css'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Admin</span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                <NotificationsActiveIcon/>
                <span className="topIconBadge">1</span>
                </div>
                <div className="topbarIconContainer">
                <LanguageIcon/>
                </div>
                <div className="topbarIconContainer">
                <SettingsIcon/> 
                </div>
                <img 
                src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' 
                alt='' 
                className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}

export default Topbar