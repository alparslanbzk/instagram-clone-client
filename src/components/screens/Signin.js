import React from "react";
import {Link} from "react-router-dom"

const Signin = () => {
    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className="card" >
                <h4>İnstagram</h4>
                <input
                type="text"
                placeholder="email"
                />
                <input
                type="text"
                placeholder="password"
                />
                 <button class="btn waves-effect waves-light">Submit</button>
                 <Link to="/signup"  >
                     <h4>Dont have an account</h4>
                 </Link>
            </div>
        </div>
    )
}

export default Signin;