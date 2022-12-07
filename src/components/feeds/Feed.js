import React from 'react'
import "./feed.css"
import { Avatar } from "@material-ui/core"
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';


function Feed() {
    return (
        <div className='feed'>
            <div className='feed__input'>
                <Avatar />
                <form>
                    <input text="text" placeholder="Start a post" />
                    <input type="submit" />
                </form>
            </div>

            <div className='feed__options'>
                <div className='option'>
                    <PhotoIcon />
                    <span>Photo</span>
                </div>

                <div className='option'>
                    <YouTubeIcon />
                    <span>Video</span>
                </div>

                <div className='option'>
                    <BusinessCenterIcon/>
                    <span>Jobs</span>
                </div>
                <div className='option'>
                    <AssignmentIcon/>
                    <span>Write article</span>
                </div>
            </div>

        </div>
    )
}

export default Feed