import {useState, useEffect} from "react"
import Navbar from "./navbar"
  
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
  fetch("http://localhost:4000/cars")
  .then(res=>res.json())
  .then(data =>{
    setList(data)
  })
},[])

    return(
<div>
<Navbar />


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
                
                <button className="btn btn-success btn-sm m-3" >View Car Details
                </button>

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