import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import "./header.css"
import HeaderOptions from './HeaderOptions'
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from "@material-ui/core"
function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src='https://cdn-icons-png.flaticon.com/512/38/38669.png'/>
            </div>
            <div className='header__search'>
                <SearchIcon />
                <input type="text" placeholder="Search" />
            </div>
        </div>

        <div className='header__right'>
            <HeaderOptions Icon={HomeIcon} title="Home" />
            <HeaderOptions Icon={PeopleIcon} title="My Network" />
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOptions Icon={MessageIcon} title="Messaging" />
            <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
            <HeaderOptions avatar={ Avatar } title="Me" />
        </div>
    </div>

  )
}

export default Header
