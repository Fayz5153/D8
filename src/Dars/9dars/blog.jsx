import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Items from './pages/items';
import Edit from './pages/edit';
import "./style.css"

const Blog = () => {
    return ( 
        <React.Fragment>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path='items' element={<Items/>}/>
                <Route path='edit/:id' element={<Edit/>}/>
            </Routes>
        </React.Fragment>
     );
}
 
export default Blog;