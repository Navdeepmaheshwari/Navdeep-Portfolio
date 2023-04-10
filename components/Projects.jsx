import React from "react";
import { ProjectCard } from "./ProjectCard";
export const Projects = () => {
  return (
    <div className="project-section sm:px-5 pt-[6rem] pb-[2rem] ">
      <div className="container-fluid text-center">
        <h1 className="project-heading px-2 ">
          My Recent <strong className="text-[#cd5ff8]">Projects </strong>
        </h1>
        <p style={{ color: "white" }} className="px-2 pb-2">
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <div
          className="sm:grid  sm:grid-cols-2 lg:grid-cols-3 grid-flow-row auto-row-max mx-auto"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/moviemania.png"
              title="MovieMania"
              tech={[
                "Reactjs",
                "Tailwind CSS",
                "Nodejs",
                "MongoDB",
                "Firebase",
              ]}
              description="MovieMania is an advanced web application that combines Reactjs, Nodejs, Firebase, Tailwind CSS, MongoDB, and TMDB Api to deliver an unparalleled movie and TV show streaming experience. MovieMania enables users to effortlessly favorite movies and TV shows and watch trailers, all in one convenient location. I've also included a dedicated Movie and TV show page that provides all the necessary details of selected movie or show. Moreover, I recently introduced a sophisticated Recommendation page that leverages powerful Machine Learning algorithms to recommend the top-20 movies based on the user's entered movie name. This feature ensures that users can easily discover and explore new movies that match their interests."
              ghLink="https://github.com/Navdeepmaheshwari/movie-mania"
              demoLink="https://movie-mania-navdeepmaheshwari.vercel.app/"
            />
          </div>
          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/Portfolio.png"
              title="Portfolio"
              tech={["Nextjs", "Tailwind CSS"]}
              description="Developed my portfolio website, where I showcase my latest projects and demonstrate my technical skills. The website is built using Nextjs and Tailwind CSS, two powerful technologies that enable me to create a sleek and modern design.
              Each project description includes a brief summary of the project, the technologies used, and links to the live demo and the GitHub repository."
              ghLink=""
              demoLink=""
            />
          </div>

          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/digitalmandi.png"
              title="DigitalMandi"
              tech={["Reactjs", "Nodejs", "MongoDB", "Expressjs", "Bootstrap"]}
              description="DigitalMandi is an innovative project developed by our team WEB-JAN during the ACM Month of Code (Hackathon) organized by SVNIT Surat. The aim of this project is to digitalize the traditional mandi system and bring transparency and efficiency to the farmer-merchant transactions.
              DigitalMandi is built using Reactjs, MongoDB, Expressjs, and Nodejs, which are powerful and versatile technologies that enable us to create a seamless and user-friendly platform. 
              The project also includes a seprate dashboard for famer and merchant to manage the users, crops."
              ghLink="https://github.com/Navdeepmaheshwari/AMOC"
              demoLink="https://digital-mandi-amoc-project.onrender.com/"
            />
          </div>

          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/maheshwari-cake.png"
              title="Maheshwari Cake Store"
              tech={["Nextjs", "Nodejs", "MongoDB", "Bootstrap"]}
              description="Maheshwari Cake Store is a modern and intuitive e-commerce platform for ordering delicious cakes. Application is built using Nextjs, Nodejs, and MongoDB. The platform is designed to provide an enjoyable and hassle-free experience for the users to select and order their favorite cakes.
              At Maheshwari Cake Store, users can choose from a wide range of cakes and customize them according to their preferences. The platform provides various options for customizations such as choosing the flavor, frosting, and toppings. Once the users have selected their desired cake and customized it, they can add it to their cart. Maheshwari Cake Store also includes an admin dashboard, which enables the store's owner to manage the products on the platform. The admin can add, delete, or edit the details of the cakes available on the store."
              ghLink="https://github.com/Navdeepmaheshwari/maheshwari-cake-store"
              demoLink="https://cakestore-navdeepmaheshwari.vercel.app/"
            />
          </div>

          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/spam.png"
              title="Spam Detection"
              tech={["Flask", "Machine Learning", "Python"]}
              description="Spam Detector is a machine learning application designed to detect and filter out spam messages.The application is powered by Flask, a Python web framework, which connects the machine learning model to the frontend. 
              With Spam Detector, users can easily determine whether a message is spam or ham (legitimate). The application provides a simple and user-friendly interface where the user can enter the text and get a prediction. The application uses advanced natural language processing (NLP) techniques to analyze the text and determine its spam probability. 
              The application also provides a batch processing feature where the user can upload a file in CSV or ZIP format containing multiple texts. The application will process each text in the file and generate a CSV output file containing the prediction for each text."
              ghLink="https://github.com/Navdeepmaheshwari/Spam-Detection-Application-Machine-Learning"
              demoLink="https://spam-detection1.onrender.com/"
            />
          </div>
          <div className=" project-card">
            <ProjectCard
              imgPath="/projects/textutils.png"
              title="TextUtils"
              tech={["Reactjs", "Bootstrap"]}
              description="TextUtils is a web application built using ReactJS that provides a variety of text utilities to users. With TextUtils, users can easily convert entered text to uppercase, lowercase, or copy the text to the clipboard. In addition, the application provides a text summary that includes the number of words and characters in the text, as well as an estimated time to read the text. 
              TextUtils also includes a light and dark mode functionality, which allows users to switch between a light and dark theme depending on their preferences or the lighting conditions in their environment."
              ghLink="https://github.com/Navdeepmaheshwari/TextUtils_App"
              demoLink="https://text-utils-pmiq.onrender.com/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
