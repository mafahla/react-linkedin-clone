import React, { useEffect, useState } from 'react'
import "./feed.css"
import { Avatar } from "@material-ui/core"
import PhotoIcon from '@material-ui/icons/Photo';
import YouTubeIcon from '@material-ui/icons/YouTube';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import TodayIcon from '@material-ui/icons/Today';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from '../post/Post';
import firebase from "./firebase";
// import * as firebase from "firebase/app"
import { db } from './firebase';

function Feed() {

const [posts,setPost] = useState([]);
const[input,setInput] = useState();

const submitPost=(e)=>{
  
    e.preventDefault();
    db.collection("posts").add({
        name: "mafahla",
        description:"kjghghjikoihghjk",
        message:input,
        photoUrl:"https://play-lh.googleusercontent.com/kHRf85euDvW-Kg7ThXK2vv-J-Yye9uxoo6GQvUcAwudNRz1sQvXubAl_m2bu6KJofA",
        timestamp:firebase.firestore.fieldValue.serverTimestamp()
    })
    setInput(" ")
}
useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapShot(snapshot =>{
        setPost(snapshot.docs.map(doc=>({
            id:doc.id,
            data:doc.data()
        })))
    })
},[])

console.log(posts);

    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className='feed__form'>
                <Avatar />
                <form onSubmit={submitPost}>
                    <input type="text" placeholder="Start a post" value={input} onChange={e=>setInput(e.target.value)}/>
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
            
            <Post name="Ignatius Mafahla" description="this is a clone test" message=" At FNB, we are committed to realising your potential. 
                    Changeables understand that opportunities to learn, grow, and 
                    transform are catalysts for thriving in their careers." 
            photoUrl="https://cdn.pixabay.com/photo/2018/07/31/22/08/lion-3576045__480.jpg"/>
            
            



        </div>
    )
}

export default Feed