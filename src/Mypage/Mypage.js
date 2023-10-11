import React, { useState } from "react";
import "./Mypage.css";

function MyPage(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onNameChange = (event) => {
        setName(event.currentTarget.value);
    }
    
    const onEmailChange = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPhoneChange = (event) => {
        setPhone(event.currentTarget.value);
    }


  return (
      <div className="my-page-container">
          <h1 className="my-page-title">My Page</h1>
          <div className="info-section">
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
          </div>
          <h2>Update Info</h2>
          <div className="input-box">
              <input 
                  className="name-input" 
                  type="text" 
                  value={name} 
                  onChange={onNameChange} 
                  placeholder= "New Name"
              />
              <input 
                  className="email-input" 
                  type="email" 
                  value={email}  
                  onChange={onEmailChange}
                  placeholder= "New Email"
              />
              <input
                className="phone-input"
                type="tel"
                value={phone}
                onChange={onPhoneChange}
                placeholder= "New Phone Number"
            />
            </div>
            {/* Update button */}
           	<button onClick={() => alert("Info updated!")}>Update Info</button>

      </div>

  )
}

export default MyPage;
