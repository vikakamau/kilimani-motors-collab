import {useState, useEffect} from "react"
import Navbar from "./navbar"
  
  function Listcars(){
const [list, setList]= useState([])
useEffect(()=>{
  fetch("http://localhost:4000/cars")
  .then(res=>res.json())
  .then(data =>{
    setList(data)
  })
},[])

    return(
   
      <div className="container">
       <Navbar />
      <div className="row">
        {list.map((l) => (
          <div key={l.id} className="col-sm-4 mb-3 mx-auto">
            <div className="card">
              
                <img
                  src={l.image}
                  className="card-img-top"
                  alt="Cars"

                  style={{  height :"380px"}}
                />
            
              <div className="card-body">
                <h5 className="card-title">Name: {l.Brand}</h5>
                <p className="card-text">Model: {l.Model}</p>
                
                <button className="btn btn-success btn-sm m-3" >View</button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }
  export default Listcars;