import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";

export const ContactUs = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [emailError, setEmailError] = useState(""); 

  const sendEmail = (e) => {
    e.preventDefault();

    const emailInput = form.current?.from_email?.value;

    
    if (!emailInput || emailInput.length < 5) {
      setEmailError("Email must be at least 5 characters long.");
      return;
    } else {
      setEmailError(""); 
    }

    emailjs
      .sendForm(
        "service_Abisheik27", 
        "template_3uaq25c", 
        form.current,
        "IQcGAimg815OjOWrG" 
      )
      .then(
        () => {
          setStatusMessage("successfully!");
          setIsError(false);
          form.current.reset();
        },
        (error) => {
          setStatusMessage("Failed!.");
          setIsError(true);
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div id="contactme" className="mt-12">
      <h1 className="text-center font-medium mt-10 text-3xl">
        <span className="text-5xl text-red-400">C</span>ontact Me
      </h1>
      <div className=" mt-10 flex flex-row justify-center gap-5 text-3xl ">
        
        <FaLinkedin />
        <BsGithub />
        <GoMail />
        <FaInstagram />
  
        </div>
      <div className="flex justify-center mt-16">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col border-2 border-blue-500 shadow-amber-100 shadow-2xl rounded-2xl items-start gap-5 px-12 py-6 bg-gray-400 "
        >
          <label htmlFor="name">Name</label>
          <input
            className="border-2 border-green-600 bg-red-200 p-1 rounded-md text-black"
            type="text"
            name="from_name"
            required
          />
          <label htmlFor="email">Email</label>
          <input
            className={`bg-red-200 p-1 border-2 ${
              emailError ? "border-red-600" : "border-green-600"
            } rounded-md`}
            type="email"
            name="from_email"
            required
          />
          {emailError && (
            <p className="text-sm text-red-600">{emailError}</p>
          )}
          <label htmlFor="message">Message</label>
          <textarea
            className="bg-red-200 px-2 h-20 border-2 border-green-600 rounded-md"
            name="message"
            required
          />
          <div className="flex items-center gap-4">
            <input
              className="border-2 rounded-md border-red-600 px-4"
              type="submit"
              value="Send"
            />
            {statusMessage && (
              <p
                className={`text-base px-0 ml-4  ${
                  isError
                    ? "text-red-500"
                    : "text-green-500"
                } `}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;