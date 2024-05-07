import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"

function Describe(){
const[description, setDescription]= useState([])
const{id}= useParams()


useEffect(()=>{
    fetch(`http://localhost:3000/cars/${id}`)
    .then(res=> res.json())
    .then(data=>{
        setDescription(data)
    })
}, [id])
    return(
      <div className="bg bg-primary">
        <div className="container">
      <div className="row">
          <div key={description.id} className="col-sm-4 mb-3 mx-auto">
            <div className="card">
              
                <img
                  src={description.image}
                  className="card-img-top"
                  alt="Cars"

                  style={{  height :"680px"}}
                />
            
              <div className="card-body">
                <h5 className="card-title">Name: {description.Brand}</h5>
                <p className="card-text">Model: {description.Model}</p>
                <p className="card-text">Year: {description.Year}</p>
                <p className="card-text">Color: {description.Color}</p>
                <p className="card-text">Price: {description.Price}</p>
                <p className="card-text ">Description: {description.description}</p>
                <Link to="/contacts">
                <button className="btn btn-secondary btn-sm m-3" >Request A Car</button>
                </Link>
                <Link to="/available">
                <button className="btn btn-danger btn-sm m-3" >Go Back</button>
                </Link>
                
              </div>
            </div>
          </div>
        
      </div>
    </div>
    </div>
    )
}

export default Describe