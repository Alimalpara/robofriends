import { render } from "@testing-library/react";
import React from "react";
import './card.css';
import { robots } from "../robots";

const Card = ({name,email,id}) => {
    // const {name,email,id} = props;
  //use only return if using functionother wise render if using class
  return (

    //used fragments
    <>
    
    <div className=" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="photo" />

      {/* texts */}
      <div>
        <h2> {name}</h2>
        <p>{email}</p>
      </div>
    </div>
  </>);
};

export default Card;