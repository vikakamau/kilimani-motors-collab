import { useEffect, useState } from "react"


function Home(){
  const [pic,setpic] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/information")
   .then(res=>res.json())
   .then(data=>{
      setpic(data)
    })
  },[])


    return (
        <div>
    <h1 className="text-center">Welcome To Kilimani Motors Ltd</h1>
    
   {pic.map((img)=>(
     <img src={img.homepage} className="" alt="" style={{ width: '1890px' }}/>

   ))}
     
        </div>
    )

}
export default Home;