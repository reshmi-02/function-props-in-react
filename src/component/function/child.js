import React from 'react'

const Child=(val)=>{
  
    return(
        <div>
            <h1>Child component</h1>
            <p>passing value from parent to child</p>
            <p>{val.name}</p>
        </div>
    )
}

export default Child