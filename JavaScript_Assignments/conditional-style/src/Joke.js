import React from 'react'

function Joke(props){
    return (<p style = {{backgroundColor: props.Question? "red" : "green"}}></p>);

}

export default Joke