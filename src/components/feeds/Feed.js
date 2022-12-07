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
                <div className='feed__form'>
                <Avatar />
                <form>
                    <input type="text" placeholder="Start a post" />
                    <input type="submit" />
                </form>
                </div>

            <div className='feed__options'>
                <div className='option'>
                    <div className='color'>
                    <PhotoIcon />
                    </div>
                    <span>Photo</span>
                    
                </div>

                <div className='option'>
                <div className='color2'>
                    <YouTubeIcon />
                    </div>
                    <span>Video</span>
                </div>

                <div className='option'>
                <div className='color3'>
                    <BusinessCenterIcon/>
                    </div>
                    <span>Jobs</span>
                </div>

                <div className='option'>
                <div className='color4'>
                    <AssignmentIcon/>
                    </div>
                    <span>Write article</span>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Feed