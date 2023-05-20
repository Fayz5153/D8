import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Items = () => {
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/blog"

    const [data, setData] = useState([])

    const getData = () =>{
        axios.get(url)
        .then((res)=>{
            setData(res.data)
            console.log(res.data)
        })
    }
    useEffect(()=>{
        getData()
    },[])
    return ( 
        <React.Fragment>
            <div className="items">
                {data.map((item)=>{
                    return(
                        <div className="card" key={item.id}>
                            <img src={item.image} alt="" width={200}/>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <Link to={`/edit/${item.id}`}>
                                <img src={item.url} alt="" className='link_img'/>
                                Edit
                            </Link>
                            <button>delete</button>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Items;