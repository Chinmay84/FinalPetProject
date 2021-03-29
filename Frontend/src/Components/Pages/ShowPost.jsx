import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaRegThumbsUp, FaRegCommentAlt, FaShareAlt, FaDownload } from "react-icons/fa";
import {getPost} from '../Frontpages/RegisterAxios'
import { useSelector } from "react-redux";


const ShowPost = () => {
   
  
     const path=process.env.PUBLIC_URL + "/ServerImages/"
     const [posts, setposts] = useState([]);
     const {userSignIn} = useSelector(state => state.loginState);
 

useEffect(() => {
  getPost().then((res)=>{
    console.log(res.data);
    setposts(res.data);
  });

}, [])



return(

  <div className="show" >
      {
      posts.map((post) => (
        <div key={post.postid} className="empty">
          <div className="show__header">
            <div className="show__header-name">
              {post.username}
            </div>
          </div>


          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={path+post.name} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>


        </div>
      ))}
     
  </div>
  
  
  );
  
/*
  return (
    <div className="show">
      {posts.map((post) => (
        <div key={post.id} className="empty">
          <div className="show__header">
            <div className="show__header-img">
              <img src={post.userImg} alt="user" />
            </div>
            <div className="show__header-name">
              {post.name} <div className="date">{post.time}</div>
            </div>
          </div>
          <div className="show__body">
            <div className="show__body-text">{post.text}</div>
            <div className="show__body-img">
              <img src={post.postImg} alt="post" />
            </div>
          </div>
          <div className="show__reactions">
            <span className="reactions">
              <FaRegThumbsUp /> <span className="reactions-text">Like</span>
            </span>
            <span className="reactions">
              <FaRegCommentAlt />{" "}
              <span className="reactions-text">Comments</span>
            </span>
            <span className="reactions">
              <FaShareAlt /> <span className="reactions-text">Share</span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
  <img src={path+"download.jpg"} alt="post" />
 */ 
};

export default ShowPost;
