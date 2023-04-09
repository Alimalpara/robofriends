import React from "react";
import Card from "./Card";

// here robots is props from app cardarray robots where filtered aray is passed.
const CardArray = ({ robots }, searchField) => {
  //uncopmment for errro bopundaries
  // if(true){
  //   throw new Error("Noooo");
  // }
  //function for robot array to get individual item
  const robotsArray = robots.map((robo, i) => {
    //it returns
    return (
      <Card
        key={`${robo.name}key`}
        id={robo.id}
        name={robo.name}
        email={robo.email}
      />
    );
    //mjhsdgfs
  });

  //function completed
  return (
    <>
      <div>{robotsArray}</div>
    </>
  );
  //return end
};

export default CardArray;
