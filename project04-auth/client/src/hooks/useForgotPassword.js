import { useState } from "react";
import {useNavigate} from 'react-router-dom'

function useForgotPassword() {
    const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const response = await fetch("http://localhost:8000/auth/forgot-password", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData)
        });
    
        if (response.ok) {
          console.log("password update successfully!");
          navigate("/login");
        } else {
          console.log("password not updated");
        }
    } catch (error) {
        console.log("there is an error while update password ", error)
    }
  }

  return {
    userData,
    handleChange,
    handleSubmit,
  };
}

export default useForgotPassword;
