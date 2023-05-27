import React from 'react'
import { Link } from 'react-router-dom';

const Category = () => {
    return ( 
        <React.Fragment>
            <div className="category">
                <Link to={"/category/book"}>Book</Link>
                <Link to={"/category/tv"}>TV</Link>
                <Link to={"/category/phone"}>Phone</Link>
            </div>
        </React.Fragment>
     );
}
 
export default Category;