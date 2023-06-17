import React, { useEffect, useState } from "react";
import Axios from "./Axios";

const Receive = () => {
    const [post, setPost] = useState(null);
    
    const newData = {
        ...post,
        email: "Fola",
        password: 1234,
        username: "fieldUp",
      };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await Axios.get("/Users");
        // console.log(getData.data);
          setPost(getData.data);
          console.log(post);
      } catch (err) {
        console.log(err.message);
      }
    };
      fetchData();
      setTimeout(() => {
        const fetchData = async () => {
          try {
            const getData = await Axios.post("/Users", newData);
            
              setPost(getData.data);
              console.log(post);
          } catch (err) {
            console.log(err.message);
          }
        };
          fetchData();
          console.log(post);
      }, 3000);
  }, []);
  useEffect(() => {
   
  }, []);
    

  return <div>Receive</div>;
};

export default Receive;
