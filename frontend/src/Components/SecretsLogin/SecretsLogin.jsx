import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import "./SecretsLogin.css";

const SecretsLogin = () => {
    const [input, setInput] = useState("");
    let history = useHistory()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "Bootyyyshaker9000") {
            history.push("/mad/dogs/ahoy")
        } else {
            history.push("/accessdenied")
        }
    }

  return (
    <div className="secrets-login">
      <div className="secrets-login__main-container">
        <div className="secrets-login__sub-container">
          <form onSubmit={handleSubmit}>
            <h1>Enter Password</h1>
            <input value={input} type="password" onChange={handleChange} placeholder="Enter your password..."></input>
            <div className="spacer" />
            <button className="secrets-login__button">ENTER</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SecretsLogin;
