import './sidebar.css'
import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ReportIcon from '@mui/icons-material/Report';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to='/' className='link'>
                    <li className="sidebarListItem active">
                      <LineStyleIcon className='sidebarIcon'/>
                      Home
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                      <TimelineIcon className='sidebarIcon'/>
                      Analytics
                    </li>
                    <li className="sidebarListItem">
                      <TrendingUpIcon className='sidebarIcon'/>
                      Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                   <Link to="/users" className='link'>
                    <li className="sidebarListItem">
                      <PersonOutlineOutlinedIcon className='sidebarIcon'/>
                      Users
                    </li>
                    </Link>
                    <Link to="/products" className='link'>
                    <li className="sidebarListItem">
                      <StorefrontOutlinedIcon className='sidebarIcon'/>
                      Products
                    </li>
                    </Link>
                    <li className="sidebarListItem">
                      <AttachMoneyOutlinedIcon className='sidebarIcon'/>
                      Transactions
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <MailOutlineOutlinedIcon className='sidebarIcon'/>
                      Mail
                    </li>
                    <li className="sidebarListItem">
                      <DynamicFeedOutlinedIcon className='sidebarIcon'/>
                      Feedback
                    </li>
                    <li className="sidebarListItem">
                      <ChatBubbleOutlineOutlinedIcon className='sidebarIcon'/>
                      Messages
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <WorkOutlineOutlinedIcon className='sidebarIcon'/>
                      Manage
                    </li>
                    <li className="sidebarListItem">
                      <TimelineIcon className='sidebarIcon'/>
                      Analytics
                    </li>
                    <li className="sidebarListItem">
                      <ReportIcon className='sidebarIcon'/>
                      Report
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Sidebar