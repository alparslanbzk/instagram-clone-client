import React , {useState} from "react";
import {useHistory} from "react-router-dom"

const CreatePost = () => {
    const History = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const PostDetails = () => {
        fetch("/createPost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                title,
                body
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                console.log(data.error)
            }
            else{
                History.push("/")
                console.log(data)}
            
                
        }).catch(err => {
            console.log(err)
        })
    }


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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                type="text"
                placeholder="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <div className="file-field input-field">
                    <span>Upload Image</span>
                    <input type="file" />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                 <button className="btn waves-effect waves-light" onClick={() => PostDetails()}>Submit post</button>
                
            </div>
        
    )
}

export default CreatePost;