import React from "react";
import ReactTypingEffect from 'react-typing-effect';

const typewriter = () => {
  return (

      <ReactTypingEffect
        text={["Full Stack Developer.", "Budding", "Innovative"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        style={{color: "#f15bb5", fontSize: "2em", fontWeight:"bolder"}}
      />

  );
};
export default typewriter;