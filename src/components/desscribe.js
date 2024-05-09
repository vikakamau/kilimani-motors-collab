import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import Navbar from "./navbar"
function Describe(){
const[description, setDescription]= useState([])
const{id}= useParams()


useEffect(()=>{
    fetch(`https://api-server-vik-2.onrender.com/cars/${id}`)
    .then(res=> res.json())
    .then(data=>{
        setDescription(data)
    })
}, [id])
    return(
      <div>
        <Navbar/>
      <div className="bg bg-secondary">
        <div className="container">
      <div className="row">
          <div key={description.id} className="col-sm-4 mb-3 mx-auto">
            <div className="card">
              
                <img
                  src={description.image}
                  className="card-img-top img-fluid"
                  alt="Cars"

                  style={{ height: "370px", objectFit: "cover" }}
                />
            
              <div className="card-body">
                <h5 className="card-title">Name: {description.Brand}</h5>
                <p className="card-text">Model: {description.Model}</p>
                <p className="card-text">Year: {description.Year}</p>
                <p className="card-text">Color: {description.Color}</p>
                <p className="card-text">Price: {description.Price}</p>
                <p className="card-text ">Description: {description.description}</p>
                <Link to="/kilimani-motors-collab/contacts">
                <button className="btn btn-secondary btn-sm m-3" >Request A Car</button>
                </Link>
                <Link to="/kilimani-motors-collab/available">
                <button className="btn btn-danger btn-sm m-3" >Go Back</button>
                </Link>
                
              </div>
            </div>
          </div>
        
      </div>
    </div>
    </div>
    <div class="row bg-primary" >
                <div class="col-md-4">
                    <header>
                        <h3 id="call">Call Us</h3>
                    </header>
                
                    <a className="text-white" href="0705237806">
                        <span>0705237806</span>
                    </a>
                    <header>
                        <h3 >Email Us</h3>
                    </header>
                    <a href="vikakamau04@gmail.com" className="text-white">

                        <span>kilimaniMotors@gmail.Com</span>
                    </a>
                </div>
                <div class="col-md-4">
                    <header>
                        <h3>Buisness Hours</h3>
                    </header>
                    <h5 id="num">Monday-Friday: 8:30am to 5:30pm</h5>
                    <h5 id="num">Saturday: 9:00am to 5:00pm</h5>
                    <h5 id="num">Sorry We are Closed On Sunday</h5>
                </div>

            </div>
                       
    </div>
    )
}

export default Describe