import React from "react";
const Hero = (props) => {
  console.log("hey", props.email);

  return (
    <div>
      <p>hello mr {props.email}</p>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  );
};
export default Hero;
