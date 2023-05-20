import React from 'react'

const MyButton = (props) => {
    console.log(props)
    return ( 
        <button onClick={props.onClick} className={props.asd}>{props.children}</button>
     );
}
 
export default MyButton;