import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../../App";
import {useParams} from "react-router-dom"


const Profile = () => {
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    

    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            //console.log(result)
          
             setProfile(result)
             console.log(userProfile)
        })
     },[])

     const followUser = () => {
         fetch("/follow",{
             method:"put",
             headers:{
                  "Content-Type":"application/json",
                  "Authorization":localStorage.getItem("jwt")  
             },
             body:JSON.stringify({
                 followId:userid
             })
         }).then(res=>res.json())
         .then(data => {
             console.log(data)
             dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
             localStorage.setItem("user",JSON.stringify(data))

             setProfile((prevState)=>{
                return {
                    ...prevState,
                    user:{
                        ...prevState.user,
                        followers:[...prevState.user.followers,data._id]
                       }
                }
            })
         })
     }





    return (
        userProfile ? 
        <div className="profileTop" style={{width:"100%"}}>
        <div className="profile">
            <div className="profile-text">
                <img className="profile-image" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                <div>
                    <h5 >{userProfile.user.name}</h5>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>{userProfile.posts.length} posts</span>
                        <span>{userProfile.user.followers.length} followers</span>
                        <span>{userProfile.user.following.length} following</span>
                    </div>


                   
                   <button style={{
                       margin:"10px"
                   }} className="btn waves-effect waves-light #64b5f6 blue darken-1"
                    onClick={()=>followUser()}
                    >
                        Follow
                    </button>
                    
                    


                </div>

            </div>
            <div className="gallery">
                {userProfile.posts.map(item=> {
                    return(
                        <img key={item._id} className="item"  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>

                    )

                })}
                

            </div>
        </div>
        </div> : <div>"loading"</div>
    )
}

export default Profile;