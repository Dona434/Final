import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./stockRequests.scss";
import SendIcon from '@mui/icons-material/Send';

const StockRequests = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [quantityUpdated, setQuantityUpdated] = useState([]);


  useEffect(() => {
    fetch("http://localhost:5000/allreqs", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.requests);
      });
      
    // fetch("http://localhost:5000/allproducts", {
    //   headers: {
    //     Authorization: "Bearer " + localStorage.getItem("jwt"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     setData1(result.products);
    //   });
  }, []);

const handleClick=()=>{
  toast.success("Request Send successfully");
}

const handleStockAdded=()=>{
  setQuantityUpdated(false);
}
const handleStockNotAdded=()=>{
  setQuantityUpdated(true);
}


  return (
    <>
          <table className="stocks">
            {data.map((reqs) => (
              <div>
             <tr>
              <th>Product Name</th>
              <td>{reqs.productName}</td>
             </tr>
             <tr>
              <th>Product State</th>
              <td>{reqs.productState}</td>
             </tr>
             {/* <tr>
              <th>Farmer Name</th>
              <td>{reqs.postedBy.firstName}</td>
             </tr>
             <tr>
              <th>Farmer Phone</th>
              <td>{reqs.postedBy.phone}</td>
             </tr>
             <tr>
              <th>Farmer email</th>
              <td>{reqs.postedBy.email}</td>
             </tr> */}
             <tr>
              <th>Requested User</th>
              <td>{reqs.firstName}</td>
             </tr>
             <tr>
              <th>User Phone</th>
              <td>{reqs.phone}</td>
             </tr>
             <tr>
              <th>User Email</th>
              <td>{reqs.email}</td>
             </tr>
             <tr>
              <th>Requested Date & Time</th>
              <td>{reqs.createdAt}</td>
             </tr>
             <br></br>
             {/* <button className="bttn" onClick={handleClick}>Send Request to Farmer 
          <SendIcon className="sendbtn" />
          </button> <br></br> */}
           {/* {data1.productQuantity>0?"Stock Added":"Stock Not Added"} */}
          <button className="bttn" onClick={handleStockAdded}>
          Stock Added
          </button>
          <button className="bttn" onClick={handleStockNotAdded}>
          Stock Not Added
          </button>
          <br></br>
          <br></br>
          {quantityUpdated?"Stock Not Added":"Stock Added" }
          <br></br>
          <br></br>
          <hr style={{width:"35rem",borderBlockColor:"gold"}}></hr>
             <br></br>
             </div>
            ))}
          </table>
          <button className="bttn" onClick={handleClick}>Send Request to Farmer 
          <SendIcon className="sendbtn" />
          </button>
    </>
  );
};

export default StockRequests;
