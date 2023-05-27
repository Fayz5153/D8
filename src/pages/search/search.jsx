import React, {useState, useEffect} from 'react';

const Search = () => {
    let data = [
        {id: 1, name:"Lorem ipsum dolor sit,"},
        {id: 2, name:"amet consectetur adipisicing"},
        {id: 3, name:"elit. Asperiores laboriosam"},
        {id: 4, name:"dolores a non rem obcaecati"},
        {id: 5, name:"aliquam temporibus, deserunt, necessitatibus"},
        {id: 6, name:"fuga veniam vitae neque eligendi?"},
    ]
    const [word, setWord] = useState("")
    const [search, setSearch] = useState(false)
    useEffect(()=>{
        if (word !== "") {
            setSearch(true)
        }
    },[word])
    return ( 
        <React.Fragment>
            <div>
                <input type="search" placeholder='Qidiruv...' onChange={(e)=>setWord(e.target.value)}/>
                {data.map((item)=>{
                    if (search === false) {
                        return(
                            <h1 key={item.id}>{item.id} {item.name}</h1>
                        )
                    }else if (item.name.toLowerCase().includes(word.toLowerCase())){
                        return(
                            <h1 key={item.id}>{item.id} {item.name}</h1>
                        )
                    } else if(String(item.id).toLowerCase().includes(word.toLowerCase())){
                        return(
                            <h1 key={item.id}>{item.id} {item.name}</h1>
                        )
                    }
                })}
            </div>
        </React.Fragment>
     );
}
 
export default Search;