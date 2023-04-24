import React from 'react'


function List({list}) {
  return (
    <div>
        <ul>
            {list.map(item =>{
                return <li>{item.name}</li>
            })}
        </ul>
    </div>
  )
}

export default List