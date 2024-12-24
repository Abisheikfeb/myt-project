import React from "react";
import { FaDownload } from "react-icons/fa";
import sample1 from '../../pdf/sample1.pdf';
import sample2 from '../../pdf/sample2.pdf';
import sample3 from '../../pdf/sample3.pdf';
import sample4 from '../../pdf/sample4.pdf';
import sample5 from '../../pdf/sample5.pdf';
import sample6 from '../../pdf/sample6.pdf';
import sample7 from '../../pdf/sample7.pdf';

import img1 from '../../assets/oracle-logo.svg';
import img2 from '../../assets/finger.svg';
import img3 from '../../assets/virus.svg';
import img4 from '../../assets/password.svg';
import img5 from '../../assets/protection.svg';
import img6 from '../../assets/vrification.svg';
import img7 from '../../assets/warning.svg';




const PdfDownloadCard = () => {
  const pdfFiles = [
    { title: "oracal cloud ", file: sample1, image: img1 },
    { title: "threat modeling", file: sample2, image: img2 },
    { title: "Security Standards and Regulations", file: sample3, image: img3 },
    { title: "Cyber Security ", file: sample4, image: img4 },
    { title: "Identity Governance and Administration", file: sample5, image: img5 },
    { title: "Ethical Hacker: Risk Assessment", file: sample6, image: img6 },
    { title: "Cyber Security Audits", file: sample7, image: img7 },
  ];

  const handleDownload = (fileUrl) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop(); // Extract filename
    link.click();
  };

  return (
    <div id="certificate" className="mt-12 ">
        <h1 className="text-center font-medium mt-10 text-3xl">
        <span className="text-red-400 text-5xl">C</span>ertificates</h1>
    <div className="grid place-items-center grid-cols-1  md:grid-cols-3 gap-6  p-10">
      {pdfFiles.map((pdf, index) => (
        <div
          key={index}
          className="bg-red-200 shadow-lg rounded-lg p-4 h-72 w-60 flex flex-col items-center justify-between "
        >
          <img src={pdf.image} alt={`PDF ${index + 1}`} 
          className="w-32 h- object-cover rounded-lg mb-4 border-2 border-red-500 shadow-lg shadow-red-500" />
          <h3 className="text-lg font-semibold mb-4 text-black">{pdf.title}</h3>
          <button
            onClick={() => handleDownload(pdf.file)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
          >
            <span>Download</span>
            <FaDownload className="ml-2" />
          </button>
        </div>
      ))}
    </div>
    </div>
  );
};

export default PdfDownloadCard;