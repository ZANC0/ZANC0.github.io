import { useState } from "react"
import { createRequestHandler } from "react-router-dom"
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
                            <div key={index}>
                                <p>{item.title}</p>
                                <p>{item.date}</p>
                                <p>{item.content}</p>
                            </div>
                        )
                        
                    })
                }
            </div>
        </>
    )
}
export default Blog