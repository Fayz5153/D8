import React from 'react'
import Header from "./header/header"
import Main from "./main/main"

const Home = (props) => {
    console.log(props)
    return ( 
        <React.Fragment>
            <h1>{props.value}</h1>
            <button onClick={()=>props.setValue("Home page")}>change title</button>
            <Header/>
            <Main/>
        </React.Fragment>
     );
}
 
export default Home;