import React from "react";
import { ImPointRight } from "react-icons/im";
import Typewriter from "typewriter-effect";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiBootstrap,
  SiExpress,
  SiTailwindcss,
  SiNetlify,
  SiGooglecolab,
} from "react-icons/si";
import { SiPytorch, SiFirebase, SiNextdotjs } from "react-icons/si";
export const About = () => {
  return (
    <section className="mt-3">
      <div className="about-section">
        <div className="container mx-auto ">
          <div
            className="flex-none  lg:flex items-center justify-around"
            style={{ padding: "10px" }}
          >
            <div
              className="w-full py-[30px] left-0 lg:p-[40px] justify-center "
              style={{ lineHeight: "2rem" }}
            >
              <h1
                style={{ paddingBottom: "20px" }}
                className="text-center text-4xl "
              >
                Know Who <strong className="text-[#c770f0]">I'M</strong>
              </h1>
              <div className="text-l text-left">
                <div className="">
                  <blockquote className="blockquote px-5 mb-0">
                    <p className="px-2 lg:px-5 ">
                      Hello, I am a passionate MERN Stack Developer, Competitive
                      Programmer, and currently an undergraduate student
                      pursuing{" "}
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
                      {/* Apart from coding, some other activities that I love to
                      do! */}
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
            <div
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src="/about.png" alt="about" className="img-fluid" />
            </div>
          </div>

          <div className="w-full lg:w-3/4 mx-auto my-[5rem]">
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Skillset</strong>
            </h1>
            <div className="flex flex-wrap justify-center">
              {" "}
              <div className=" tech-icons">
                <CgCPlusPlus title="C++" />
              </div>
              <div className=" tech-icons">
                <DiJavascript1 title="Javascript" />
              </div>
              <div className=" tech-icons">
                <DiPython title="Python" />
              </div>
              <div className=" tech-icons">
                <DiNodejs title="NodeJS" />
              </div>
              <div className=" tech-icons">
                <DiReact title="ReactJS" />
              </div>
              <div className=" tech-icons">
                <SiNextdotjs title="NextJS" />
              </div>
              <div className=" tech-icons">
                <DiMongodb title="MongoDB" />
              </div>
              <div className=" tech-icons">
                <SiExpress title="Express" />
              </div>
              <div className=" tech-icons">
                <SiBootstrap title="Bootstrap" />
              </div>
              <div className=" tech-icons">
                <SiTailwindcss title="Tailwind CSS" />
              </div>
              <div className=" tech-icons">
                <DiGithubBadge title="Github" />
              </div>
              {/*  <div className=" tech-icons">
                <SiFirebase />
              </div> */}
            </div>
          </div>

          <div className=" w-full lg:w-3/4 mx-auto my-[5rem]">
            {" "}
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Tools</strong>
            </h1>
            <div className="flex flex-wrap justify-center ">
              <div className=" tech-icons">
                <DiGit title="Git" />
              </div>
              <div className=" tech-icons ">
                <SiHeroku title="Heroku" />
              </div>
              <div className=" tech-icons">
                <SiVisualstudiocode title="Visual Studio Code" />
              </div>
              <div className=" tech-icons">
                <SiPostman title="Postman" />
              </div>
              <div className=" tech-icons">
                <SiVercel title="Vercel" />
              </div>
              <div className=" tech-icons">
                <SiNetlify title="Netlify" />
              </div>
              <div className=" tech-icons">
                <SiGooglecolab title="Google Collab" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
