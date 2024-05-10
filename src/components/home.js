import { useEffect, useState } from "react"



function Home(){
  const [pic,setpic] = useState([])
  useEffect(()=>{
 

    fetch("https://api-server-vik-2.onrender.com/information")
   .then(res=>res.json())
   .then(data=>{
      setpic(data)
    })
  },[])


    return (
        <div>
    <h1 className="text-center bg-secondary text-light fw-bold">Welcome To Kilimani Motors Ltd.</h1>
  
    
   {pic.map((img)=>(
     <img src={img.homepage} className="" alt="" style={{ width: "1890px", height:"900px",objectFit: "cover" }}/>

   ))}
   <div className="row bg-secondary m-3" >
                <div className="col-md-4">
                    <header>
                        <h3 id="call">Call Us</h3>
                    </header>
                
                    <a className="text-white" href="0705237806">
                        <span>0705237806</span>
                    </a>
                    
                </div>
                <div className="col-md-4 text-right" >
                    <header>
                        <h3>Business Hours</h3>
                    </header>
                    <h5 id="num">Monday-Friday: 8:30am to 5:30pm</h5>
                    <h5 id="num">Saturday: 9:00am to 5:00pm</h5>
                    <h5 id="num">Sorry We are Closed On Sunday</h5>
                </div>
               <div className="col-md-4">
               <header>
                        <h3 >Email Us</h3>
                    </header>
                    <a href="vikakamau04@gmail.com" className="text-white">
                        <span>KilimaniMotors@gmail.Com</span>
                    </a>

               </div>
            </div>
     
        </div>
        
    )

}
export default Home;