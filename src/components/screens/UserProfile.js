import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../../App";
import {useParams} from "react-router-dom"


const Profile = () => {
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()
    console.log(userid)
    console.log(userProfile)
    

    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
          
             setProfile(result)
             console.log(userProfile)
        })
     },[])

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
                        <span>40 followers</span>
                        <span>40 following</span>
                    </div>
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