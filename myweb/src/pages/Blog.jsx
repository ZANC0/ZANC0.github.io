import { useState } from "react"
import { createRequestHandler } from "react-router-dom"
import "./Blog.css"
import posts from "../posts.json"
function Blog(){
    const [showdata, setdata] = useState(posts)
    const logdata = () => {
        console.log(showdata)
    }

    return(
        <>
            <div>
                <h1>Blog</h1>
                {
                    showdata.posts.map((item, index)=>{
                        return(
                            <div key={index} className="post">
                                <p className="post-date">{item.date}</p>
                                <h1 className="post-title">{item.title}</h1>
                                <p className="post-content">{item.content}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
        </>
    )
}
export default Blog