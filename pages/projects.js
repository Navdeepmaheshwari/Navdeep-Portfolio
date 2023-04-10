import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { useState } from "react";
import Head from "next/head";
export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
    <Head>
        <title>Navdeep Maheshwari</title>
      </Head>
      <div className="bg-white dark:bg-black">
        <Navbar />
      </div>
      <Projects />
      <Footer/>
    </>
  );
}
