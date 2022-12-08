import React from 'react'
import './post.css'
import {Avatar} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert'

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
                


                <div className='post__headerRight'>

                </div>

            </div>
        </div>
    )
}

export default Post