import { Blog } from "../hooks";
import { AppBar } from "./AppBar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 gap-4 px-10 w-full pt-200 max-w-screen-2xl pt-14">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold text-transform: capitalize ">
              {blog.title}
            </div>
            <div className="text-slate-500 pt-2">
              Posted on 2nd December 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4 w-full ">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex flex-row w-full pt-1">
              <div>
                <div className=" flex flex-col justify-center ">
                  <Avatar name={blog.author.name || "Anonymous"} size={"big"} />
                </div>
              </div>
              <div>
                <div className="pl-3 text-xl font-bold w-full text-transform: capitalize">
                  {blog.author.name || "Anonymous"}
                </div>
              </div>
              </div>
              <div className=" flex flex-row pt-4 text-slate-500 w-full">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Follow
                </button>
                <button
                  type="button"
                  className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-8 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
</svg>

                </button>
                
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
