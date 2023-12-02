import React from 'react'
import { Link, Outlet } from "react-router-dom"


const Yaacov = () => {
  return (
    <div>Yaacov
      <Link to="yaacov/yaacovhai"> Yaacov Hai</Link>|
       <Link to="yaacov/yaacovkorchia">Yaacov Korchia</Link>

       <Outlet/>
    </div>
  )
}

export default Yaacov