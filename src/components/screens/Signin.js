import React, {useState} from "react";
import {Link} from "react-router-dom"

const Signin = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] =useState("")

    const PostData = () => {
        console.log(email,password)
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return console.log("doğru bir email giriniz")
        }

        fetch("/signin",{
            method:"post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error) {
                console.log(data.error)
            }
            else {
                console.log(data.token)
            }
        })
    }
 

    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className="card" >
                <h4>İnstagram</h4>
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                 <button className="btn waves-effect waves-light" onClick={() => PostData()}>Submit</button>
                 <Link to="/signup"  >
                     <h4>Dont have an account</h4>
                 </Link>
            </div>
        </div>
    )
}

export default Signin;