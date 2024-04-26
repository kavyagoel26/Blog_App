import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
// const appRouter = createBrowserRouter([{
//   path:"/",
//   element:<App/>,
//   children:[
//     {
//       path:"/signin",
//       element:<Signin/>,
//     },{
//       path:"/signup",
//       element:<Signup/>,
//     },{
//       path:"/blogs",
//       element:<Blogs/>,
//     },{
//       path:"/blog:id",
//       element:<Blog/>,
//     },{
//       path:"/publish",
//       element:<Publish/>
//     }
//   ],
//   //errorElement:<Error/>
// }    
// ]);

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//       <RouterProvider router={appRouter} />
//   </React.StrictMode>
// );

