import React, { useEffect, useState ,useContext} from "react";
import {UserContext} from "../../App"
import {Link} from "react-router-dom"
const Home = () => {
    const [data, setData] = useState([]);
    const {state,dispatch} = useContext(UserContext)

    useEffect(() => {
        fetch("/allpost", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                //console.log(result.posts[0].title)
                setData(result.posts)
            })
    }, [data])

    const likePost = (id) => {
        
        fetch("/like",{
            method:"put",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body : JSON.stringify({
                postId: id
            })
        }).then(res=>res.json())
        .then(result=> {

            const newData = data.map(item=>{
                if(item._id == result._id){
                    return result
                }else{
                    return item
                }
            })
            console.log(newData)
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const unlikePost = (id) => {
        console.log("çalışıyor")
        fetch("/unlike",{
            method:"put",
            headers: {
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body : JSON.stringify({
                postId: id
            })
        }).then(res=>res.json())
        .then(result=> {

            console.log(result)
            const newData = data.map(item=> {
                if(item._id==result._id){
                    return result
                }else {
                    return item
                }
            })
            console.log(newData)
            setData(newData)
        }).catch(err=>{
            console.log(err)
        })
    }

    const makeComment = (text,postId) => {
        fetch("/comment",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                text,
                postId
            })
        }).then(res=>res.json())
        .then(result => {
            console.log(result)
            const newData = data.map(item=> {
                if(item._id==result._id){
                    return result
                }else {
                    return item
                }
            })

            setData(newData)
        })
    }

    const deletePost = (postid) => {
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result => {
            console.log(result)
            const newData = data.filter(item=> {
                if(item._id !== result._id){
                    return result
                }else {
                    return item
                }
            })

            setData(newData)
        })
    }

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item._id} style={{width:"70%"}}>
                            <h5><Link to={item.postedBy._id !== state._id ?"/profile/"+item.postedBy._id:"/profile"}>
                            {item.postedBy.name}
                            </Link> {item.postedBy._id == state._id 
                            && <i className="material-icons" style={{
                                float:"right"
                            }}
                            onClick={()=> deletePost(item._id)} 
                            >delete</i>
                
                            }</h5>
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                {item.likes.includes(state._id) 
                                ?<i className="material-icons" style={{ color: "black" }} onClick={() => unlikePost(item._id)}>thumb_down</i>
                                :<i className="material-icons" style={{ color: "black" }} onClick={() => likePost(item._id)}>thumb_up</i>                      
                            }
                                
                                <h6>{item.likes.length}</h6>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                {item.comments.map(record=>{
                                   return (
                                   <p>
                                    <a style={{fontWeight:"500"}} href="#">{record.postedBy.name}</a>
                                       <span >{record.text}</span> 
                                   </p>)
                                })}
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
                                    <input type="text" placeholder="add a comment" />
                                </form>
                                
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;