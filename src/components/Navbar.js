import React from "react"
import '../App.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper white" style={{color:"black"}}>
                    <Link to="/" className="brand-logo left">İnstagram</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/signin">Signin</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/createPost">Create Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar