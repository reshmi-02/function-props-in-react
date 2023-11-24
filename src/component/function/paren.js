import React from 'react'
import Child from './child.js'
const Parent=()=>{
    const name="reshmi"
    return(
        <div>
            <Child name={name}/>
        </div>
    )
}

export default Parent 