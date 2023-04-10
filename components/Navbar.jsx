import React, { useState } from "react";
import Script from "next/script";

import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsMoonStarsFill, BsSunFill, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillAccountBook,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { useRouter } from "next/router";
export const Navbar = () => {
  const [phone, setPhone] = useState(false);
  const router = useRouter();
  return (
    <div className="">
      <nav className="fixed left-0 top-4 lg:bottom-8 w-full overflow-hidden h-fit z-10 ">
        <div className="mx-auto   flex justify-between ">
          <div className="mx-auto">
            <section className="relative mx-auto w-[90vw] lg:w-[75vw] ">
              {/* <!-- navbar --> */}
              <nav className="flex   w-full bg-blue-600/  backdrop-blur-lg text-white rounded-lg ">
                <div className="px-1 xl:px-4 sm:py-1 flex w-full items-center">
                  <Link className={`text-3xl font-bold font-heading`} href="/">
                    <Image src="/nm2.png" alt="logo" width="74" height="70" />
                    {/* Logo Here. */}
                  </Link>
                  {/* <!-- Nav Links --> */}
                  {/*  {phone && (
                    <ul className="flex flex-col md:hidden mx-auto font-semibold font-heading ">
                      <li>
                        <Link
                          className={` ${
                            router.pathname === "/"
                              ? "text-[#cd5ff8] font-bold"
                              : ""
                          } hover:text-[#cd5ff8] flex items-center`}
                          href="/"
                        >
                          <AiOutlineHome className="mr-1 text-xl" /> Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={` ${
                            router.pathname === "/about"
                              ? "text-[#cd5ff8] font-bold"
                              : ""
                          } hover:text-[#cd5ff8] flex items-center`}
                          href="about"
                        >
                          <AiOutlineUser className="mr-1 text-xl" /> About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={` ${
                            router.pathname === "/projects"
                              ? "text-[#cd5ff8] font-bold"
                              : ""
                          } hover:text-[#cd5ff8] flex items-center`}
                          href="projects"
                        >
                          <AiOutlineFundProjectionScreen className="mr-1 text-xl" />{" "}
                          Projects
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={` ${
                            router.pathname === "/resume"
                              ? "text-[#cd5ff8] font-bold"
                              : ""
                          } hover:text-[#cd5ff8] flex items-center`}
                          href="resume"
                        >
                          <CgFileDocument className="mr-1 text-xl" /> Resume
                        </Link>
                      </li>
                    </ul>
                  )} */}
                  <ul className="hidden  md:flex px-4 mx-auto font-semibold font-heading md:space-x-12">
                    <li>
                      <Link
                        className={` ${
                          router.pathname === "/"
                            ? "text-[#cd5ff8] font-bold"
                            : ""
                        } hover:text-[#cd5ff8] flex items-center`}
                        href="/"
                      >
                        <AiOutlineHome className="mr-1 text-xl" /> Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={` ${
                          router.pathname === "/about"
                            ? "text-[#cd5ff8] font-bold"
                            : ""
                        } hover:text-[#cd5ff8] flex items-center`}
                        href="about"
                      >
                        <AiOutlineUser className="mr-1 text-xl" /> About
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={` ${
                          router.pathname === "/projects"
                            ? "text-[#cd5ff8] font-bold"
                            : ""
                        } hover:text-[#cd5ff8] flex items-center`}
                        href="projects"
                      >
                        <AiOutlineFundProjectionScreen className="mr-1 text-xl" />{" "}
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={` ${
                          router.pathname === "/resume"
                            ? "text-[#cd5ff8] font-bold"
                            : ""
                        } hover:text-[#cd5ff8] flex items-center`}
                        href="resume"
                      >
                        <CgFileDocument className="mr-1 text-xl" /> Resume
                      </Link>
                    </li>
                  </ul>

                  {/* <!-- Header Icons --> */}
                  <div className="hidden md:flex items-center space-x-5 items-center">
                    <a
                      className="flex items-center hover:text-gray-200"
                      href="https://github.com/Navdeepmaheshwari"
                      target="_blank"
                    >
                      <BsGithub className="text-2xl hover:text-[#cd5ff8]" />
                    </a>
                  </div>
                </div>
                {/* <!-- Responsive navbar --> */}
                {/*  <a className="md:hidden flex mr-6 items-center" href="#">
                  <BsGithub className="text-2xl hover:text-[#cd5ff8]" />
                </a> */}
                <a
                  className="flex-end navbar-burger self-center mr-5 md:hidden cursor-pointer"
                  onClick={() => {
                    setPhone(!phone);
                  }}
                >
                  <GiHamburgerMenu className="text-2xl text-[#cd5ff8]" />
                </a>
              </nav>
              {phone && (
                <div className="backdrop-blur-lg text-white w-full"> <ul className="flex flex-col md:hidden mx-auto font-semibold font-heading items-center ">
                  <li className="pb-1">
                    <Link
                      className={` ${
                        router.pathname === "/"
                          ? "text-[#cd5ff8] font-bold"
                          : ""
                      } hover:text-[#cd5ff8] flex items-center`}
                      href="/"
                    >
                      <AiOutlineHome className="mr-1 text-xl" /> Home
                    </Link>
                  </li>
                  <li className="pb-1">
                    <Link
                      className={` ${
                        router.pathname === "/about"
                          ? "text-[#cd5ff8] font-bold"
                          : ""
                      } hover:text-[#cd5ff8] flex items-center`}
                      href="about"
                    >
                      <AiOutlineUser className="mr-1 text-xl" /> About
                    </Link>
                  </li>
                  <li className="pb-1">
                    <Link
                      className={` ${
                        router.pathname === "/projects"
                          ? "text-[#cd5ff8] font-bold"
                          : ""
                      } hover:text-[#cd5ff8] flex items-center`}
                      href="projects"
                    >
                      <AiOutlineFundProjectionScreen className="mr-1 text-xl" />{" "}
                      Projects
                    </Link>
                  </li>
                  <li className="pb-1">
                    <Link
                      className={` ${
                        router.pathname === "/resume"
                          ? "text-[#cd5ff8] font-bold"
                          : ""
                      } hover:text-[#cd5ff8] flex items-center`}
                      href="resume"
                    >
                      <CgFileDocument className="mr-1 text-xl" /> Resume
                    </Link>
                  </li>
                </ul></div>
               
              )}
              {/*  {phone && (
                <>
                 
                </>
              )} */}
            </section>
          </div>
        </div>
      </nav>
    </div>
  );
};
