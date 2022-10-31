import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CheckoutElement.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components';

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setpassword] = useState("");
  const [confmPassword,confirmPassword] = useState("")
  const [usertype, SetUsertype] = useState("");
  const [fnameErr,setFNameErr] = useState(false)
  const [lnameErr,setLNameErr] = useState(false)
  const [emailErr,setEmailErr] = useState(false)
  const [phoneErr,setPhoneErr] = useState(false)
  const [pwdErr,setPwdErr] = useState(false)
  const [confmPwdErr,setConfmPwdErr] = useState(false)

    const Error =styled.span`
    color:red;
    padding:5px;
    `;
    const [inpval, setINP] = useState({
      productName: "",
      photo: "",
      productPrice: "",
      productState: "",
      productQuantity: "",
      productDescription: "",
      postedBy: "",
    });

    const setdata = (e) => {
      const { name, value } = e.target;
      setINP((preval) => {
        return {
          ...preval,
          [name]: value,
        };
      });
    };
    
  const postData = () => {
    console.log(usertype);
    if (!/^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/.test(firstName)) {
      toast.error("Invalid First Name");
      return;
    }
    if (!/^[A-Za-z.-]+(\s*[A-Za-z.-]+)*$/.test(lastName)) {
      toast.error("Invalid Last Name");
      return;
    }
    if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)) {
      toast.error("Invalid Phone Number");
      return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      toast.error("Invalid Email ID");
      return;
    }
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone,
        password,
        usertype,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          toast.error(data.error, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          toast.success(data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => navigate("/login"), 6000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFirstName = (e1)=>{
    if(firstName.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
        console.log("Accepted")
    }
   else{
    setFNameErr(true)
   }
}

const handleLastName = (e1)=>{
    if(lastName.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)){
        console.log("Accepted")
    }
   else{
    setLNameErr(true)
   }
}
const handleEmail = (e1)=>{
    if(email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        console.log("Accepted")
    }
   else{
    setEmailErr(true)
   }
}

const handlePhone = (e1)=>{
    if(phone.match(/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/ )){
        console.log("Accepted")
    }
   else{
    setPhoneErr(true)
   }
}

const handlePassword = (e1)=>{
    if(password.match(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/)){
        console.log("Accepted")
    }
   else{
    setPwdErr(true)
   }
}
const handleConfirmPassword = (e)=>{
    confirmPassword(e.target.value);
    if(password != confirmPassword){
       setConfmPwdErr("Password does not match");
       //console.log("not matching")
    }
    else{
        setConfmPwdErr("");
        console.log("matching")
    }
}


  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <h1 className="signup-title">CheckOut Page</h1>
        <div className="signup-form">
          <input
            className="forminput"
            type="text"
            placeholder="Enter your Name"
            required
            value={firstName}
            onChange={(e) => setFname(e.target.value)}
            onKeyUp={handleFirstName}
          />
          {fnameErr&&!firstName.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)?<Error>Please enter a valid name!</Error>:""}
         
        
          <input
            className="forminput"
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={handleEmail}
          />
          {emailErr&&!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?<Error>Please enter a valid email!</Error>:""}

          <input
            className="forminput"
            type="text"
            placeholder="Phone"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyUp={handlePhone}
          />
          {phoneErr&&!phone.match(/^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/)?<Error>Please enter a valid phone number!</Error>:""}

          <input
            className="forminput"
            type="text"
            placeholder="Enter your Address"
            required
            value={lastName}
            onChange={(e) => setLname(e.target.value)}
            onKeyUp={handleLastName}
          />
          {lnameErr&&!lastName.match(/(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/)?<Error>Please enter a valid name!</Error>:""}

         <br/>

            
          <button onClick={() => postData()} className="signup-button">
            Proceed to Payment
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Signup;
