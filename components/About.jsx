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
  SiKotlin,
  SiTypescript,
  SiAmazonaws,
  SiAwslambda,
  SiAwsfargate,
  SiAmazoncloudwatch,
  SiAmazondynamodb,
  SiAmazons3,
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
                Know Who <strong className="text-[#c770f0]">I&apos;M</strong>
              </h1>
              <div className="text-l text-left">
                <div className="">
                  <blockquote className="blockquote px-2 sm:px-5 mb-0">
                    <p className="px-2 lg:px-5 text-justify">
                      {/* Hello, I am a passionate Software Developer, Competitive
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
                      my goals, which keeps me motivated and focused. */}
                      
                      Hello, I'm Navdeep Maheshwari, a recent graduate in <span className="text-[#c770f0] font-bold">
                        Electronics and Communication Engineering
                      </span> from the  <span className="text-[#c770f0] font-bold">
                        {" "}
                        Indian Institute of Information Technology, Surat
                      </span>{" "}. I am a software development enthusiast with hands-on experience as a Full Stack Web Developer using the MERN stack (MongoDB, Express, React, Node). I have developed numerous full-stack applications using RESTful API concepts and databases such as MongoDB and Firebase. I am proficient in C, C++, JavaScript, and Python, and have a solid foundation in Data Structures and Algorithms, having solved over 800 questions across various coding platforms.
                      <br />
                      I recently completed a six-month internship with the AWS IoT FleetWise team at <span className="text-[#c770f0] font-bold"> Amazon</span>, where I gained experience in Kotlin, TypeScript, and various AWS services. I am always eager to learn new technologies and stay up-to-date with the latest trends in the tech world. Currently, I am actively seeking opportunities in software development to apply and expand my skill set. With my passion for problem-solving, I am confident that I can make a valuable contribution to any team.


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
          {/* Experience */}
          <div className="w-full lg:w-3/4 mx-auto my-[3rem]">
            <h1
              style={{ paddingBottom: "20px" }}
              className="text-center text-4xl "
            >
              <strong className="text-[#c770f0]">Experience</strong>
            </h1>
            <div class=" py-6 flex flex-col justify-center sm:pb-12">
              <div class="py-3  sm:mx-auto w-full px-2 sm:px-0">
                <div class="relative text-gray-700 antialiased text-sm font-semibold ">
                  {/* <!-- Vertical bar running through middle --> */}
                  <div class="hidden sm:block w-1 bg-[#c770f0] absolute h-full left-1/2 transform -translate-x-1/2"></div>

                  {/* <!-- Left section, set by justify-start and sm:pr-8 --> */}
                  <div class="mt-6 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-12">
                          <div class="p-4 bg-white rounded shadow">
                            <h1 className=" text-2xl font-bold  justify-center mb-1">Software Development Engineer Intern <span className=" text-[#c770f0] underline"> <a href="https://www.linkedin.com/company/amazon/">@Amazon</a> </span> </h1>
                            <h1 className=" text-base mb-2">02/2024 - 06/2024</h1>
                            <ul className="px-2 list-disc text-justify">
                              <li>
                                Led the migration of existing AWS Lambda
                                functions to AWS Fargate, achieving a 70% cost
                                reduction and a 50% decrease in latency,
                                significantly enhancing overall performance.
                                Also Setup the new metrics dashboard for better
                                monitoring.
                              </li>
                              <li>
                                Delivered full E2E implementation with feature
                                flag integration, facilitating efficient feature
                                rollout & management.
                              </li>
                              <li>
                                Gained hands-on experience in Kotlin,
                                TypeScript, and various AWS services by working
                                closely with experienced engineers.
                              </li>
                              <li>
                                Conducted rigorous load testing to optimize and
                                configure autoscaling policies for Fargate,
                                ensuring seamless scalability.
                              </li>
                             <li> <strong>Technology/Tools:</strong> Kotlin, TypeScript, Python, S3, DynamoDB, AWS Lambda, AWS Fargate, AWS CloudWatch, AWS CloudFormation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-[#c770f0] border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-8 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg> */}
                        <img
                          src="/amazon1.jpg"
                          alt="your image"
                          className="w-10 h-10 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Right section, set by justify-end and sm:pl-8 --> */}
                  <div class="mt-12 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-12">
                        <div class="p-4 bg-white rounded shadow">
                            <h1 className=" text-2xl font-bold  justify-center mb-1">Frontend Developer Intern <span className=" text-[#c770f0] underline"> <a href="https://www.linkedin.com/company/organicledger/"> @Organic Ledger</a> </span> </h1>
                            <h1 className=" text-base mb-2">11/2023 - 12/2023</h1>
                            <ul className="px-2 list-disc text-justify">
                              <li>
                              Developed backend APIs for the admin panel using Node.js and SQL.
                              </li>
                              <li>
                              Created an intuitive admin panel for manual management and operations using MERN Stack.
                              </li>
                              <li>
                              Enhanced frontend efficiency using Next.js, and utilized Node.js and Express.js for backend functionality, in
conjunction with MongoDB for data management.
                              </li>
                              
                              <li>
                              <strong>Technology/Tools:</strong>  Reactjs, SQL, Redux, Tailwind CSS, Nodejs, Expressjs, Bit Bucket.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-[#c770f0] border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-8 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg> */}
                        <img
                          src="/Organic Ledger1.png"
                          alt="your image"
                          className="w-10  h-10 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/*  <!-- Left section, set by justify-start and sm:pr-8 --> */}
                  <div class="mt-12 sm:mt-0 sm:mb-12">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-start w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pr-12">
                        <div class="p-4 bg-white rounded shadow">
                            <h1 className=" text-2xl font-bold  justify-center mb-1">FullStack  Developer Intern <span className=" text-[#c770f0] underline"> <a href="https://www.linkedin.com/company/byteproc-solutions/">@ByteProc </a></span> </h1>
                            <h1 className=" text-base mb-2">07/2023 - 08/2023</h1>
                            <ul className="px-2 list-disc text-justify">
                              <li>
                              Designed and developed a user-friendly and responsive bus booking application using MERN Stack.
                              </li>
                              <li>
                              Worked with REST APIs to retrieve and display data from databases.
                              </li>
                              <li>
                             <strong>Technology/Tools:</strong>  Reactjs, Redux, Tailwind CSS, Nodejs, Expressjs, MongoDB, Git.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-[#c770f0] border-white border-4 w-14 h-14 absolute left-1/2 -translate-y-8 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg> */}
                        <img
                          src="/byteproc.jpeg"
                          alt="your image"
                          className="w-10  h-10 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Right section, set by justify-end and sm:pl-8 --> */}
                  {/*  <div class="mt-6 sm:mt-0">
                    <div class="flex flex-col sm:flex-row items-center">
                      <div class="flex justify-end w-full mx-auto items-center">
                        <div class="w-full sm:w-1/2 sm:pl-8">
                          <div class="p-4 bg-white rounded shadow">
                            I'll tell you how I became the Prince of a town
                            called Bel Air.
                          </div>
                        </div>
                      </div>
                      <div class="rounded-full bg-blue-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          />
                        </svg>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {/* Skillset */}
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
                <SiTypescript title="TypeScript" />
              </div>
              <div className=" tech-icons">
                <DiPython title="Python" />
              </div>
              <div className=" tech-icons">
                <SiKotlin title="Kotlin" />
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
                <SiFirebase />
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
                <SiAmazonaws title="AWS" />
              </div>
              
              <div className=" tech-icons">
                <SiAwslambda title="AWS Lambda" />
              </div>
              <div className=" tech-icons">
                <SiAwsfargate title="AWS Fargate" />
              </div>
              <div className=" tech-icons">
                <SiAmazoncloudwatch title="AWS CloudWatch" />
              </div>
              <div className=" tech-icons">
                <SiAmazondynamodb title="AWS DynamoDB" />
              </div>
              <div className=" tech-icons">
                <SiAmazons3 title="AWS S3" />
              </div>

             {/*  <div className=" tech-icons">
                <DiGithubBadge title="Github" />
              </div> */}
              
            </div>
          </div>

          {/* Tools */}
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
