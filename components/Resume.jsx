import React, { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
// import pdf from "../public/Navdeep Maheshwari-IIIT_Surat.pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink = "/Navdeep Maheshwari-IIIT_Surat.pdf";
// const resumeLink =
//   "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";
export const Resume = () => {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <section className="mt-[5rem]  mx-auto">
      <div className="  resume-section	">
        <div
          className="flex justify-center items-center "
          /* style={{ justifyContent: "center", position: "relative" }} */
        >
          <button
            variant="primary"
            target="_blank"
            className="bg-purple-800/50 hover:bg-[#cd5ff8] px-[30px] py-[5px] rounded-lg"
          >
            <a
              href="https://drive.google.com/file/d/1olel-HuPrMKfKrP79tT9j22YSoab5oje/view?usp=sharing"
              rel="noopener noreferrer"
              target="_blank"
            >
              <AiOutlineDownload className="inline-block text-2xl" />
              &nbsp;Download Resume
            </a>
          </button>
        </div>

        <div className="  ">
          <Document file={resumeLink} className="flex resume ">
            <Page pageNumber={1} className="" />
          </Document>
        </div>

        <div
          className="row"
          style={{ justifyContent: "center", position: "relative" }}
        >
          {/* <input
              type="button"
              variant="primary"
              href={resumeLink}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </input> */}
        </div>
      </div>
    </section>
  );
};
