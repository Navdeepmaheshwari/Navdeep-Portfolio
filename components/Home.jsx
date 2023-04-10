import React from "react";
import { TypeWriter } from "./TypeWriter";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
export const Main = () => {
  return (
    <section className="mx-auto  w-fit sm:w-full">
      <div className="home-section px-[2rem] lg:px-[4rem] mx-auto" id="home">
        {/*  <Particle /> */}
        <div className="home-content mx-auto container">
          <div className="flex-none lg:flex items-center justify-around">
            <div className="w-full p-1 left-0 lg:p-[50px] text-center lg:text-left">
              <h1 className="heading pb-2 ">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Navdeep Maheshwari</strong>
              </h1>

              <div className="type">
                <TypeWriter />
              </div>
            </div>

            <div className=" pb-2">
              <img src="/home-main.svg" alt="home pic" className=" img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <div className="home-about-section container my-5 mx-auto" id="about">
        <div className="container-fluid">
          <div className="container">
            <h1 className="text-center" style={{ fontSize: "2.6rem" }}>
              LET ME <span className="text-[#c95bf5]"> INTRODUCE </span> MYSELF
            </h1>
            <div className="flex-none lg:flex my-[3rem] justify-around items-center	">
              <div className="w-full lg:w-1/2 p-5 home-about-description mx-auto">
                {/* <p className="home-about-body m-[1rem] lg:mx-[3rem] ">
                  I fell in love with programming and I have at least learnt
                  something, I think… 🤷‍♂️
                  <br />
                  <br />I am fluent in classics like
                  <i>
                    <b className="purple"> C++, Javascript and Python. </b>
                  </i>
                  <br />
                  <br />
                  My field of Interest's are building new &nbsp;
                  <i>
                    <b className="purple">Web Technologies and Products </b>
                  </i>
                  and also in areas related to{" "}
                  <b className="purple">
                    Deep Learning and Natural Launguage Processing.
                  </b>
                  <br />
                  <br />
                  Whenever possible, I also apply my passion for developing
                  products with <b className="purple">Node.js</b> and{" "}
                  <i>
                    <b className="purple">
                      Modern Javascript Library and Frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="purple"> React.js and Next.js</b>
                  </i>
                </p> */}
                <div className="">
                  <div className="">
                    <blockquote className="blockquote px-5  mb-0">
                      <p
                        className="px-2 lg:px-5 "
                        style={{ lineHeight: "2rem", textAlign: "justify" }}
                      >
                        Hello, I am a passionate MERN Stack Developer,
                        Competitive Programmer, and currently an undergraduate
                        student pursuing{" "}
                        <span className="text-[#c770f0] font-bold">
                          Electronics and Communication Engineering
                        </span>{" "}
                        at the{" "}
                        <span className="text-[#c770f0] font-bold">
                          {" "}
                          Indian Institute of Information Technology Surat.
                        </span>{" "}
                        I am highly enthusiastic about problem-solving and enjoy
                        building creative web applications.
                        <br />
                        My area of expertise lies in developing Web Applications
                        and Problem Solving. I am continuously working on
                        enhancing my skills.
                        <br />I am always eager to explore new opportunities and
                        learn from them. My driving force is my dream to achieve
                        my goals, which keeps me motivated and focused.
                      </p>
                      {/*   <ul className="py-2">
                      <li className="about-activity">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Playing Games
                      </li>
                      <li className="about-activity">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Writing Tech Blogs
                      </li>
                      <li className="about-activity">
                        {" "}
                        <ImPointRight className="text-[#c770f0] mr-2" />
                        Travelling
                      </li>
                    </ul> */}
                      <p className="text-center mt-4 text-gray-400"></p>
                    </blockquote>
                  </div>
                </div>
              </div>
              {/* <div className="w-1/2  p-5 rounded-full myAvtar">
                <div className="p-5 ">
                  <img src="/nav.JPG" className="img-fluid rounded-full" alt="avatar" />
                </div>
              </div> */}
              <div className="w-[20rem] h-[20rem] mx-auto my-2 lg:mx rounded-full overflow-hidden">
                <img
                  src="/nav.JPG"
                  alt="your image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-none lg:flex justify-around">
              <div className="home-about-social">
                <h1 className="text-3xl">FIND ME ON</h1>
                <p>
                  Feel free to <span className="text-[#c95bf5]">connect </span>
                  with me
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/Navdeepmaheshwari"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillGithub className="svg" />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/navdeep26153714"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiOutlineTwitter className="svg" />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/navdeep-maheshwari"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <FaLinkedinIn className="svg" />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/navdeep_maheshwari/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                    >
                      <AiFillInstagram className="svg" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
