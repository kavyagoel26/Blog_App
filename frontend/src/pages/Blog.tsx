import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks";




export const Blog =() =>{
    const {loading, blog} = useBlog({id: "id" || ""});
    if(loading){ 
        return <div>
            ...loading
        </div>
    }
    return <div>
       <FullBlog blog={blog}/>
            
        </div>
}