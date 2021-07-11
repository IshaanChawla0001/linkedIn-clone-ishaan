import React from 'react'
import './Header.css'
import linkedin from '../../Images/linkedin.png'
import profile from '../../Images/profile.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';

function Header() {
    return (
        <div className='header'>
            <div className='header_left'> 
                <img src={linkedin} alt='LinkedIn'/>
            

            <div className='header_search'> 
                <SearchIcon />
                <input type='text' placeholder='Search'/>
            </div>

            </div>

            <div className='header_right'> 
                <HeaderOptions Icon={HomeIcon} title='Home' />
                <HeaderOptions Icon={SupervisorAccountIcon} title='My Network'/>
                <HeaderOptions Icon={BusinessCenterIcon} title='Jobs'/>
                <HeaderOptions Icon={ChatIcon} title='Messaging'/>
                <HeaderOptions Icon={NotificationsIcon} title='Notifications'/>
                <HeaderOptions avatar={profile} title='Me'/>
            </div>
        </div>
    )
}

export default Header
