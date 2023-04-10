import { Navbar } from "@/components/Navbar";
import { About } from "@/components/About";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import Head from "next/head";
export default function AboutPage() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Head>
        <title>Navdeep Maheshwari</title>
      </Head>
      <div className="bg-white dark:bg-black">
        <Navbar />
      </div>
      <About />
      <Footer />
    </>
  );
}
