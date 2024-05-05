import React from "react";
import { useNavigate } from "react-router-dom";

const AnotherChild = () => {
let navigate = useNavigate();

  return (
    <div>
      AnotherChild Component
      <br />
      <button onClick={() => navigate("/")}>Checking</button>
    </div>
  );
};

export default AnotherChild;
