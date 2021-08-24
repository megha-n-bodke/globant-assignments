import React from 'react'
import ReactDom from 'react-dom'

const LazyFallbackComponent = () =>{
    return ReactDom.createPortal(
        <>
        <h1> Openings are loading.....
        </h1>
        <p>Please Wait!!!</p>
        </>,document.getElementById('portal-root')
    )
}
export default LazyFallbackComponent