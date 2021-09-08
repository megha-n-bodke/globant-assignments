import React from 'react'
import {Link} from 'react-router-dom'

const Home = () =>{
    return(
        <div>
             <h2>Click to route to "/oops" which isn't a registered route:</h2>
            <Link to = '/oops'><h2>Let's Go</h2></Link>
        </div>
    )

}
export default Home