import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"
 
export const AppBar = () =>{
    return <div className=" border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center font-bold cursor-pointer">
            GrabInfo  
        </Link>
        <div> 
            <Link to={'/publish'}>
            <button type="button" className="text-gray-900
             bg-white border border-gray-300 
             focus:outline-none hover:bg-gray-100
              focus:ring-4 focus:ring-gray-100 
              font-medium rounded-full text-sm px-5
            py-2.5 me-2 mb-2 mr-4">New</button>
            </Link>
            <Avatar  size={"big"} name="Harkirat"/> 
        </div>

    </div>
}