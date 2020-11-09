import React,{useContext} from "react"
import '../App.css'
import {Link} from 'react-router-dom'
import { UserContext } from "../App"

const NavBar = () => {
    const {state,dispatch} = useContext(UserContext)

    const RenderList = () => {
        if(state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createPost">Create Post</Link></li>
            ]
        }else {
            return [
                <li><Link to="/signin">Signin</Link></li>,
                <li><Link to="/signup">Signup</Link></li>
            ]
        }
    }

    return (
        <div>
            <nav>
                <div className="nav-wrapper white" style={{color:"black"}}>
                    <Link to={state?"/":"/signin"} className="brand-logo left">İnstagram</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {RenderList()}
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar