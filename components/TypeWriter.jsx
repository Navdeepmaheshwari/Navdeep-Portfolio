import React from "react";
import Typewriter from "typewriter-effect";
export const TypeWriter = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Machine Learning Enthusiast",
          "MERN Stack Developer",
          "Competitive Programmer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};
