import React from 'react'
import './post.css'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';

function Post() {
    return (
        <div className="posts">
            <div className='post__header'>
                <div className='post__headerLeft'>
                    <Avatar />
                    <div className='post_profile_details'>
                        <h3>Ignatius Mafahla</h3>
                        <p>we are learning react js</p>
                    </div>
                </div>

                <MoreVertIcon />
                {/* <div className='post__headerRight'>
                </div> */}
            </div>

            <div className='post__body'>
                <p> At FNB, we are committed to realising your potential. 
                    Changeables understand that opportunities to learn, grow, and 
                    transform are catalysts for thriving in their careers.</p>
            </div>

            <div className='post__footer'>
                <div className='post__footer__options'>
                    <ThumbUpIcon />
                    <span> Like</span>
                </div>

                <div className='post__footer__options'>
                    <CommentIcon/>
                    <span> Comment</span>
                </div>

                <div className='post__footer__options'>
                    <ShareIcon />
                    <span> Share</span>
                </div>

                <div className='post__footer__options'>
                    <SendIcon />
                    <span> Send</span>
                </div>
            </div>


        </div>
    )
}

export default Post