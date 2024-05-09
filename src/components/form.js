import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Data(){
    const [data ,setData]= useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/form")
        .then(res =>res.json())
        .then(data => setData(data))
    }, [])
    return(
        <div>
             <h2>Customers who have contacted us</h2>

             {data.map((d, index)=>(
                <div key={index+1}>
  <p><strong>Name:</strong> {d.name}</p>
  <p><strong>Email:</strong> {d.email}</p>
  <p><strong>Address:</strong> {d.address}</p>
  <p><strong>Contact Information:</strong> {d.contacts}</p>
  <p><strong>Interested Car Brand:</strong> {d.interestedCarBrand}</p>
     <Link to="/kilimani-motors-collab/contacts">
                <button className="btn btn-danger btn-sm m-3" >Go Back</button>
                </Link>
  </div>
             ))}
    
        </div>
    )
}
export default Data