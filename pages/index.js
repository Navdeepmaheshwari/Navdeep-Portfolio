import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Home";
import "../components/styles/home.module.css";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import Head from "next/head";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Navdeep Maheshwari</title>
      </Head>

      <div className="bg-white dark:bg-black">
        <Navbar />
      </div>
      <Main />
      <Footer />
    </>
  );
}
