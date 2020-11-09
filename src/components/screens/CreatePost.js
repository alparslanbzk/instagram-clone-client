import React , {useState} from "react";
import {useHistory} from "react-router-dom"

const CreatePost = () => {
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    fetch("/createPost",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
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
        else(
            console.log(data.message)
        )
    }).catch(err => {
        console.log(err)
    })


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
                 <button className="btn waves-effect waves-light">Submit post</button>
                
            </div>
        
    )
}

export default CreatePost;