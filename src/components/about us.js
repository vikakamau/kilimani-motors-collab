import { useEffect, useState } from "react";
import Navbar from "./navbar";

function About() {
  let [about, setAbout] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/information")
      .then((res) => res.json())
      .then((data) => {
        setAbout(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
        <Navbar />
      
        <div>
      {about.map((abt) => (
        <div>
          {" "}
          <img src={abt.homepage} alt="about" style={{ width: "1890px" }} />
          <h2 className="text-center">About Us</h2>
          <p> {abt.about}</p>{" "}
        </div>
      ))}
      <div className="row bg-white" style={{ height: "60vh" }}>
        <div className="col-md-6">
          <img src={"https://i.pinimg.com/564x/39/03/aa/3903aa74a47ef2bafffa55feb43331e8.jpg"} style={{ height: "540px", width: "900px" }}  alt="Image"/>
        </div>
        <div className="col-md-6">
          <header>
            <h2>TO OUR ESTEEM CUSTOMERS</h2>
          </header>
          <p>
            we would like to appreciate you for choosing Kilimani Motors and would
            like to inform you that we value customer feedback and reviews
          </p>
          <header>
            <h2>WARANTTY</h2>
          </header>
          <p>
            our cars have a warranty of upto 1 year incase of any problem to
            ensure customer's satisfaction
          </p>
          <header>
            <h2>PROVEN TRACK RECORD</h2>
          </header>
          <p>
            we have been importing cars since 2021 so we are a reliable source
          </p>
          <header>
            <h2>Auction to doorstep service</h2>
          </header>
          <p>
            We do everything from buying, shipping, clearing, registration and
            other logistics up to delivery of your car to your door step.
          </p>
          <header>
            <h2>Genuine mileage</h2>
          </header>
          <p>
            We do not fiddle with the odometer for any reason as we allow you to
            choose the mileage you are comfortable with based on your budget.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
