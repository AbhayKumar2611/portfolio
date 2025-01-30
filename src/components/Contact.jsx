import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="flex flex-col py-0 items-center justify-center min-h-screen bg-gray-100 px-10">
      <h1 className="text-4xl font-bold text-blue-600 underline mb-8">
        Contact
      </h1>

      <div className="space-y-6 text-2xl font-semibold text-blue-800">
        <p>
          <FontAwesomeIcon icon={faEnvelope} className="mr-3 text-blue-600" />
          <a
            href="mailto:kumarabhay26111996@gmail.com"
            className="hover:underline"
          >
            kumarabhay26111996@gmail.com
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faPhone} className="mr-3 text-green-600" />
          <a href="tel:+917992396044" className="hover:underline">
            +91-7992396044
          </a>
        </p>
        <p className="text-purple-700">
          <FontAwesomeIcon icon={faLinkedin} className="mr-3 text-blue-500" />
          <a
            href="https://www.linkedin.com/in/abhay-kumar-96663096/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/abhay-kumar-96663096/
          </a>
        </p>
        <p>
          <FontAwesomeIcon icon={faGithub} className="mr-3 text-black" />
          <a
            href="https://github.com/AbhayKumar2611"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/AbhayKumar2611
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
