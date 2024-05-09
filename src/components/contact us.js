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
    <div className="container bg-secondary">
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
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
