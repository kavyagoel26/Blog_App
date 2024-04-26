

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { Blogs } from './pages/Blogs'
import { Publish } from './pages/Publish'
import { Blog } from './pages/Blog'

// import './App.css'
function App() {
  return(
    <div>
    
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/blog/:id" element={<Blog/>}></Route>
        <Route path="/blogs" element={<Blogs/>}></Route>
        <Route path="/publish" element={<Publish/>}></Route>
      </Routes>
      </Router> 
      </div>

  )
}
export default App
