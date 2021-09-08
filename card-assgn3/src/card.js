import React from 'react'
import image from './boy.png'
import girlimage from './girl.png'
import './Card.css'


function Card(props)
{
    const users = props.value
    const listData = users.map(function(user, i) {
        return (
            <div key={"user-" + i} >
            <div key={"avtar-" + i} className = 'imagecontainer'>
            {
                user.gender === "Male" && <img alt={user.name}  src = {image} className = 'imagecontainer'></img>
                
            }
            {
                user.gender === "Female" && <img alt={user.name} src = {girlimage} className = 'imagecontainer'></img>
    
            }
            <div key={"name-" + i} className = 'username' >
            <p className = 'font'>{user.name}</p>
            </div>
        
            </div>
            </div>

        );
      });
      return (
        <div>
        {listData}
       </div>
    );
}
export default Card