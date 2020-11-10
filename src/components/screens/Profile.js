import React,{useState,useEffect,useContext} from "react";
import { UserContext } from "../../App";



const Profile = () => {
    const [myPics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)


    useEffect(() => {
        fetch("/mypost",{
            headers: {
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(data => {
            //console.log(data.mypost[0].title)
            //console.log(data.mypost)
            setPics(data.mypost)
        })
    },[])

    return (
        <div className="profileTop" style={{width:"100%"}}>
        <div className="profile">
            <div className="profile-text">
                <img className="profile-image" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                <div>
                    <h5>{state?state.name:"loading"}</h5>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                        <span>40 posts</span>
                        <span>40 followers</span>
                        <span>40 following</span>
                    </div>
                </div>

            </div>
            <div className="gallery">
                {myPics.map(item=> {
                    return(
                        <img className="item" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>

                    )

                })}
                

            </div>
        </div>
        </div>
    )
}

export default Profile;