import { useParams } from "react-router-dom";
import { AppBar } from "../components/AppBar";
import { FullBlog } from "../components/FullBlog";
import { Spinner } from "../components/Spinner";
import { useBlog } from "../hooks";


export const Blog =() =>{
     const {id} =useParams();
    const {loading, blog} = useBlog({id: id || ""});
    
    if(loading  || !blog){ 
        return <><div>
            <AppBar />
        </div><div className="h-screen flex flex-col justify-center">
                <div className="flex justify-center">
                    <Spinner />
                </div>
            </div></>
    }
    return <div>
       <FullBlog blog={blog}/>
            
        </div>
}