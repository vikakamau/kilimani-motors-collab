import {useState, useEffect} from "react"
import Navbar from "./navbar"
import { Link } from "react-router-dom"

  function Listcars(){
const [list, setList]= useState([])
const [search, setSearch] = useState("")

const handleSearch = (e) => {
setSearch(e.target.value)
}

const filter = list.filter((l)=>{

  if (search.length > 0) {
    return l.Brand.toLowerCase().includes(search.toLowerCase()) || l.Model.toLowerCase().includes(search.toLowerCase())
  }
  else {
    return true;
  }

})
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

      <div className="m-2 p-3">
            <input onChange={handleSearch} className="form-control" type="text" placeholder="Search Car by Model Or Name" value={search}/>
        </div>
      <div className="row">
        {filter.map((l) => (
          <div key={l.id} className="col-sm-4 mb-3 mx-auto">

            <div className="card">
              
                <img
                  src={l.image}
                  className="card-img-top"
                  alt="Cars"

                  style={{ height: "350px", objectFit: "cover" }}
                />
            
              <div className="card-body">
                <h5 className="card-title">Name: {l.Brand}</h5>
                <p className="card-text">Model: {l.Model}</p>

                <Link to={`/kilimani-motors-collab/describe/${l.id}`}>
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