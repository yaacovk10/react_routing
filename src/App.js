import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom"
import ProdDisp from './ProdDisp';

function App() {
  const MY_SERVER = "http://localhost:5000/products"
  const [prods, setprods] = useState([])
  useEffect(() => {
    axios.get(MY_SERVER).then(response =>(setprods(response.data)))
    console.log(prods)
  }, [prods.length])
  
  return (
    <div className="App">
      <Link to="/"> Home</Link>|
       <Link to="contact"> Contact</Link>|
       <Link to="yaacov">Yaacov</Link>
       <hr></hr>
       {/* {prods.map((prod, ind)=> <ProdDisp key={ind} prod ={prod}  ind = {ind}> </ProdDisp>)} */}
       <Outlet/>
       <hr></hr>
       <div style={{margin :"100px"}}>Footer</div>
    </div>
  );
}

export default App;
