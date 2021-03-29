import React from "react";

import Create from './Create' ;
import ShowPost from './ShowPost';
import FileUpload from '../ProfileHome/FileUpload';

const Posts = () => {
  return (
    <div className="posts">
      <FileUpload/> 
      <ShowPost /> 
    </div>
  );
};

export default Posts;
