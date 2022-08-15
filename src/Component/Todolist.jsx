import React from 'react'
import Todo from './Todo'
const Todolist = ( {hamdi,del,comp}) => {
    console.log(hamdi)
  return (
    <div>
      {
        hamdi.map((el,i)=><Todo del={del}sami={el} key={i} comp={comp}/>)
      }
    </div>
  )
}

export default Todolist
