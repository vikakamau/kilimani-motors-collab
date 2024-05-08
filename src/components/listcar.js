import {useState, useEffect} from "react"
import Navbar from "./navbar"
import { Link } from "react-router-dom"

  function Listcars(){
const [list, setList]= useState([])

useEffect(()=>{
  fetch("https://api-server-vik-2.onrender.com/cars")
  .then(res=>res.json())
  .then(data =>{
    setList(data)
  })
},[])

    return(
   <div>
    <Navbar/>
      <div className="container m-3 p-3">
      <div className="row">
        {list.map((l) => (
          <div key={l.id} className="col-sm-3 mb-2 mx-auto">
            <div className="card">
              
                <img
                  src={l.image}
                  className="card-img-top"
                  alt="Cars"

                  style={{  height :"480px"}}
                />
            
              <div className="card-body">
                <h5 className="card-title">Name: {l.Brand}</h5>
                <p className="card-text">Model: {l.Model}</p>

                <Link to={`/describe/${l.id}`}>
                <button className="btn btn-success btn-sm m-3" >View Car Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    )
  }
  export default Listcars;