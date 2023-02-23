import React, { useEffect,useState } from 'react'



const Farmers = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/allfarmers", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setData(result.farmers);
        console.log(result.farmers);
      });
    },[]);
  return (
    <>
      {data?.map(users=>(
    <p>{users.firstName}</p>
            
    ))}
  </>
  )
}

export default Farmers