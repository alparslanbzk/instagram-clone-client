import React from "react";


const createPost = () => {
    return (
        
         <div className="card  input-field" 
         style={{
             margin:"30px auto",
             maxWidth:"500px",
             padding:"20px",
             textAlign:"center"
         }}>
                <input
                type="text"
                placeholder="title"
                />
                <input
                type="text"
                placeholder="body"
                />
                <div className="file-field input-field">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                 <button class="btn waves-effect waves-light">Submit post</button>
                
            </div>
        
    )
}

export default createPost;