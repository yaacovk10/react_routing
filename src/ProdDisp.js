import React from 'react'

const ProdDisp = (props) => {
    console.log(props)
  return (
      
    <div><hr/>ProdDisp
    Id : {props.ind +1} <br/>
    Desc : {props.prod.name}  <br/>
    Price : {props.prod.price}
    </div>
  )
}

export default ProdDisp