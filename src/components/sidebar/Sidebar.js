import React from 'react'
import "./sidebar.css"
import {Avatar} from "@material-ui/core"
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src='https://cdn.wallpapersafari.com/44/56/CVdBxP.jpg' />

            <div className='profile__details'>
                <Avatar />
                <h4 >Ignatius Mafahla</h4>
                <p>Full-Stack Developer</p>
            </div>

            <div className='profile__stats'>
                <span>Who's viewed your profile</span>
                <span className='stats__number'>  41</span>
            </div>
            <div className='profile__stats'>
                <span>Impressions of your post</span>
                <span className='stats__number'>  392</span>
            </div>

        </div>
        <div className='sidebar__recent'>
        <p >Recent</p>
        <p className='hash'><span><CalendarTodayIcon /></span>redux</p>
        <p className='hash'><span><CalendarTodayIcon /></span>mySql</p>
        <p className='hash'><span><CalendarTodayIcon /></span>web_development</p>
        <p className='hash'><span><CalendarTodayIcon /></span>reactjs</p>
        <p className='hash'><span><CalendarTodayIcon /></span>anngular</p>
        <p className='hash'><span><CalendarTodayIcon /></span>nodejs</p>
        <div className='discover'>
        </div>
            <div className='profile__stats'>
               <p>Discover More</p>
            </div>
        </div>

        
        {/* <div className='sidebar__recent'>
        <p>Recent</p>
        <p className='hash'><span><CalendarTodayIcon /></span>redux</p>
        <p className='hash'><span><CalendarTodayIcon /></span>mySql</p>
        <p className='hash'><span><CalendarTodayIcon /></span>web_development</p>
        <p className='hash'><span><CalendarTodayIcon /></span>reactjs</p>
        <p className='hash'><span><CalendarTodayIcon /></span>anngular</p>
        <p className='hash'><span><CalendarTodayIcon /></span>nodejs</p>
        </div> */}



    </div>

    



  )
}

export default Sidebar