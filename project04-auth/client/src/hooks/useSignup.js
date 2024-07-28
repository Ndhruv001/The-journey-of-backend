import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useSignup(){

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      password: "",
    });
    
    function handleChange(e) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
    
    async function handleSubmit(e) {
      e.preventDefault();
    
      try {
        const response = await fetch("http://localhost:8000/auth/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          console.log("response is ok");
          navigate("/login");
        } else {
          console.log("response is noooot ok");
        }
      } catch (error) {
        console.log("there is an error while post request for singup", error);
      }
    } 

    return {
        formData,
        handleChange,
        handleSubmit
    }
}

