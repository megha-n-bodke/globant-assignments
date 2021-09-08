import React from 'react'
import {Link} from 'react-router-dom'

const Error = () =>{
    return(
        <div>
            <h1>404 - Not Found!</h1>
            <Link to = '/'><h2>GoHome</h2></Link>
        </div>
    )
}

export default Error