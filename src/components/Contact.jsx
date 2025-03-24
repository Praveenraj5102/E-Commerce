import React from 'react'
import "./Contact.css"


import { toast } from "react-toastify";

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "97475507-989c-45c2-a5a9-fcdc492cb9d4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form submited Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error(data.message)
    }
  }
  return (

    <section className='contact' id='Contact'>
      <div className="section-center">
        <div className="contact-info">
          <div className="contact-item">
            <h4 className="contact-title">
              <span contact-icon><i class='bx bx-home-alt'></i></span>
              Address
            </h4>
            <div className="contact-text">
              123 ABC Road,Erode<br />
              Pincode-600001
            </div>
          </div>
          <div className="contact-item">
            <h4 className="contact-title">
              <span contact-icon><i class='bx bx-envelope'></i></span>
              Email
            </h4>
            <div className="contact-text">
              foodiee@gmail.com
            </div>
          </div>
          <div className="contact-item">
            <h4 className="contact-title">
              <span contact-icon><i class='bx bx-phone'></i></span>
              Phone
            </h4>
            <div className="contact-text">
              +91 1234567890
            </div>
          </div>
        </div>
        <div className="contact-form">
          <div className="section-title">
            <h3>Contact Us</h3>
          </div>
          <form onSubmit={onSubmit} className='form'>
            <div className="form-group">
              <input type="text" className='form-controll' required />
              <label htmlFor="" className='form-label'>Name</label>
            </div>
            <div className="form-group">
              <input type="email" className='form-controll' required />
              <label htmlFor="" className='form-label'>Email</label>
            </div>
            <div className="form-group">
              <textarea  className='form-controll' required ></textarea>
              <label  className='form-label'>Message</label>
            </div>
            
            <div>
              <button className="btn btn-submit"> {result ? result : "Send Message"} </button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default Contact;
