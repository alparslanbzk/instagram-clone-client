import React, {useState} from "react";
import {Link,useHistory} from 'react-router-dom'


const Signup = () => {
    const History = useHistory()
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            return console.log("doğru bir email giriniz")
        }
        
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data.error){
                return console.log(data.error)
            }
            console.log(data.message)
            History.push("/")
        })
        
    }


    return (
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <div className="card" >
                <h4>İnstagram</h4>
                <input
                type="text"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                 <button className="btn waves-effect waves-light" onClick={() => PostData()}>Signup</button>
                 <Link to="/signin" >
                     <h4>Already have an account</h4>
                 </Link>
            </div>

        </div>
    )
}

export default Signup;