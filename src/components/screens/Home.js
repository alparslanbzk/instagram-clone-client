import React, { useEffect, useState } from "react";


const Home = () => {
    const [data, setData] = useState([]);

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
    }, [])

    return (
        <div className="home">
            {
                data.map(item => {
                    return (
                        <div className="card home-card" key={item.id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>
                            </div>
                            <div className="card-content">
                                <i className="material-icons" style={{ color: "red" }}>favorite</i>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home;