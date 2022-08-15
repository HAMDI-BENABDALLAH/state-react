import React from 'react'

const todo = ({sami,del,comp}) => {

  return (
    <div className={sami.iscomplated?"complete":''}>
      <h1>{sami.task}</h1>
      <button onClick={()=>del(sami.id)}>delete</button>
      <button onClick={()=>comp(sami.id)} >{sami.iscomplated?"undo":"complated"}</button>
    </div>
  )
}

export default todo
