
import React from 'react'
import { Avatar } from "@material-ui/core"
import "./header.css"

function HeaderOptions({Icon, title, avatar}) {
  return (
    <div className='header__options'>

        {
            Icon && <Icon></Icon>
        }
       {
        avatar && <Avatar name={avatar} />
       }
        <span>{title}</span>
    </div>
  )
}

export default HeaderOptions