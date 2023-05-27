import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { AllData } from './all';

const Item = () => {
    let params = useParams().name
    let url = "https://64538b10e9ac46cedf284769.mockapi.io/api/v1/"
    const [data, setData] = useState([]);
    const [load, setLoad] = useState(false);
    const getData = () =>{
        setLoad(true)
        setData(AllData[params])
        setTimeout(() => {
            setLoad(false)
        }, 500);
        // axios.get(url+params).then((res)=>{
        //     console.log(res)
        //     setData(res.data)
        //     if (res.status === 200) {
        //         setTimeout(() => {
        //             setLoad(false)
        //         }, 1500);
        //     }
        // })
    }
    useEffect(()=>{
        getData()
    },[params])
    // console.log(params)
    return ( 
        <React.Fragment>
            {load 
            ?   <div className='load'><CircularProgress size={110}/></div>
            :   <div className='grid'>
                    {data.map((item)=>{
                        return(
                            <div className="card" key={item.id}>
                                <img src={item.img} alt=""  width={200}/>
                                <b>{item[params]}</b>
                                <p>{item.name}</p>
                            </div>
                        )
                    })}
                </div>
            }
            
        </React.Fragment>
     );
}
 
export default Item;