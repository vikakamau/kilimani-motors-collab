import { Link } from "react-router-dom";
import Navbar from "./navbar"
import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    contacts: '',
    interestedCarBrand: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`your form has been submitted successfully
    Thankyou for choosing Kilimani Motors Our Team will reach out to you shortly ASANTE SANA`)
    fetch('https://api-server-vik-2.onrender.com/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => (data))
    setFormData({
      name: '',
      email: '',
      address: '',
      contacts: '',
      interestedCarBrand: ''
    });
  };
  

  return (
    <div>
        <Navbar/>
        <div className="row bg-white m-3" style={{ height: "58vh" }}>
        
              <div className="col-md-6 bg-warning">
                  <header>
              <h2>OUR WEBSITE</h2>
                 </header>
                 <p>
                 We are a car dealership that specializes in importing cars from Europe and Africa. You can visit us at: 
                <span style={{ fontWeight: "bold" }}>www.kilimaniMotors.com</span> for more inquiry.
                </p>
                  <header>
               <h2>Contacts</h2>
                 </header>
                        <p>
                         You can reach us through our dealership contact line:
                      <span style={{ fontWeight: "bold" }}>0705237806</span>. You can also reach us through our email at:
                    <span style={{ fontWeight: "bold" }}>Kilimani.Motors@gmail.com</span>.
                   </p>
                       <header>
                   <h2>Location</h2>
                         </header>
                    <p>
                    We are located at Nairobi Kiambu road opposite Two Rivers Mall. Karibu sana to our dealership where you are one
                         step behind your dream car.
                   </p>
                   <header>
                   <h2>Form</h2>
                         </header>
                    <p>
                   you can also fill in the form below detailing your information and interested car where our help team will be able to reach to you
                   
                   </p>
                   <header>
                   <h2>WE AS KILIMANI MOTORS SAY ASANTI SANA AND KARIBU TENA</h2>
                         </header>
                        </div>
      <div className="col-md-6">
          <img src={"https://i.pinimg.com/564x/e0/b9/07/e0b907c9adc3dd5cb6e373edf282da4e.jpg"} style={{ height: "520px", width: "900px", objectFit: "cover" }}  alt="des"/>
        </div>
          </div>
<hr></hr>
    <div className="container bg-secondary m-8 p-4">
      <h2 className="text-center fw-bold">fill in Form</h2>
      <form >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control"  name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label  className="form-label">Email Address</label>
          <input type="email" className="form-control"  name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input type="text" className="form-control"  name="address" value={formData.address} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Contact Information</label>
          <input type="number" className="form-control"  name="contacts" value={formData.contacts} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Interested Car Brand</label>
          <input type="text" className="form-control" name="interestedCarBrand" value={formData.interestedCarBrand} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary m-3" onClick={handleSubmit}>Submit</button>
        <Link to={"/data"}>
        <button type="submit" className="btn btn-danger m-3" >Feedback From customer</button>
        </Link>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
