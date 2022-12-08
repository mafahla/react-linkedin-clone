import React from 'react'
import "./feed.css"
import { Avatar } from "@material-ui/core"
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from '../post/Post'


function Feed() {
    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                <Avatar />
                <form>
                    <input type="text" placeholder="Start a post" />
                    <input type="submit" />
                </form>
                </div>

            <div className='feed__options'>
                <div className='option'>
                    
                    <PhotoIcon style={{color: '#378fe9'}} />
                    
                    <span>Photo</span>
                    
                </div>

                <div className='option'>
                
                    <YouTubeIcon style={{color: '#5f9b41'}} />
                    
                    <span>Video</span>
                </div>

                <div className='option'>
               
                    <BusinessCenterIcon style={{color: '#a872e8'}} />
                    
                    <span>Jobs</span>
                </div>

                <div className='option'>
               
                    <AssignmentIcon style={{color: '#e16745'}} />
                   
                    <span>Write article</span>
                </div>
            </div>

            </div>
            
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>



        </div>
    )
}

export default Feed