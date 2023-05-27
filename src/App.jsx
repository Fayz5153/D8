import Navbar from './views/navbar'
import Footer from './views/footer'
import Home from './pages/home/home'
import About from './pages/about/about'
import {Routes, Route} from "react-router-dom"
import Page1 from './pages/about/page1'
import Page2 from './pages/about/page2'
import Page3 from './pages/about/page3'
import Mode, { MyContext } from './context/context'
import { useState } from 'react'
import Observer from './pages/observer/observer'
import Search from './pages/search/search'
import Category from './pages/category/category'
import Item from './pages/category/item'

function App() {
  const [value, setValue] = useState("Home pagega hush kelibsiz")
  return (
    <Mode>
      <MyContext.Consumer>
        {(x)=>{
          return(
            <div className={x.theme ? "container light" : "container dark"}>
              <Navbar/>
              <Category/>
              <Routes>
                <Route index element={<Home value={value} setValue={setValue}/>}/>
                <Route path='about' element={<About/>}>
                  <Route path='' element={<Page1/>}/>
                  <Route path='p2' element={<Page2/>}/>
                  <Route path='p3' element={<Page3/>}/>
                </Route>
                <Route path='observer' element={<Observer/>}/>
                <Route path='search' element={<Search/>}/>
                <Route path='category/:name' element={<Item/>}/>
              </Routes>
              {/* <Footer/> */}
            </div>
          )
        }}
      </MyContext.Consumer>
    </Mode>
  )
}

export default App
