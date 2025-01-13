import React from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, supabase } from "../firebase_config.js"; // import firebase config
import { useNavigate, useParams } from "react-router-dom";
import QR from "../assets/QR.png";
import { data } from "../data/viewEventsData.js";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProvider,
  ModalTrigger,
  useModal,
} from "../components/ui/animated-modal.jsx";
import { motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { uid } from "uid";

function Register() {
  const nav = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    transactionID: "",
    file: null,
  });
  const { event } = useParams();
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) return alert("Please upload the payment screenshot");

    setIsSubmitting(true);

    async function uploadFile() {
      const UID = uid();
      const { data, error } = await supabase.storage
        .from("screenshots")
        .upload(UID, formData.file);
      if (error) {
        console.error("Upload error:", error);
        setIsSubmitting(false);
      } else {
        const { data: data2, error } = await supabase.storage
          .from("screenshots")
          .createSignedUrl(UID, 100000000);

        const downloadURL = data2.signedUrl;
        setUrl(downloadURL);

        await saveFormData(downloadURL);
        setIsSubmitting(false);
      }
    }
    uploadFile();
  };

  const saveFormData = async (imageURL) => {
    try {
      const docRef = await addDoc(collection(db, event), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        college: formData.college,
        transactionID: formData.transactionID,
        screenshotUrl: imageURL,
        createdAt: new Date(),
      });
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        college: "",
        transactionID: "",
        file: null,
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <ModalProvider>
      <section className="">
        <div className=" my-32 flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <h1 className="flex items-center mb-6 text-3xl font-semibold text-white font-audiowide">
            Event Registration
          </h1>
          <div className="w-full border-2 border-[#1EC1C5] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleInputChange}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Name "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    Email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="youremail@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    Institution
                  </label>
                  <input
                    value={formData.college}
                    onChange={handleInputChange}
                    type="text"
                    name="college"
                    id="institution"
                    className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="SRMIST"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    Contact
                  </label>
                  <input
                    value={formData.phone}
                    onChange={handleInputChange}
                    type="text"
                    name="phone"
                    id="contact"
                    className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="XXXXXXXXXX"
                    required
                  />
                </div>

                <motion.div className="py-2 border-2 border-[#1EC1C5] rounded-lg cursor-pointer flex items-center justify-center">
                  <Modal>
                    <ModalTrigger className="bg-transparent text-white flex justify-center group/modal-btn w-full h-full">
                      <span className="group-hover/modal-btn:translate-x-80 text-center transition duration-500">
                        Make Payment
                      </span>
                      <div className="-translate-x-80 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
                        <PaymentsOutlinedIcon />
                      </div>
                    </ModalTrigger>
                    <ModalBody className="bg-[#1EC1C5] border-2 border-[#1EC1C5] backdrop-filter backdrop-blur-lg bg-opacity-10">
                      <ModalContent>
                        <h4 className="text-lg font-audiowide md:text-2xl text-white dark:text-neutral-100 font-bold text-center mb-8">
                          Check Out
                        </h4>
                        <div className="w-full h-32 flex justify-center items-center text-white text-xl font-[400] font-jersey2">
                          <div className="w-2/3 h-full">
                            <div className="w-full flex justify-between">
                              <h6 className="">Event</h6>
                              <h6>{data[event]?.title}</h6>
                            </div>
                            <div className="w-full flex justify-between">
                              <h6>Date</h6>
                              <h6>{data[event]?.eventDetails.date}</h6>
                            </div>
                            <div className="w-full flex justify-between">
                              <h6>Time</h6>
                              <h6>{data[event]?.eventDetails.time}</h6>
                            </div>
                            <div className="w-full flex justify-between">
                              <h6>Fees</h6>
                              <h6>{data[event]?.eventDetails.fees}</h6>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center items-center">
                          <img
                            src={QR}
                            className="w-56 h-56 border-2 border-gray-500 rounded-lg"
                          />
                        </div>
                      </ModalContent>
                    </ModalBody>
                  </Modal>
                </motion.div>
                <div>
                  <label
                    htmlFor="transactionID"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    Transaction ID
                  </label>
                  <input
                    value={formData.transactionID}
                    onChange={handleInputChange}
                    type="text"
                    name="transactionID"
                    id="transactionID"
                    className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="xxxxxxxxxxxxx"
                    required
                  />
                </div>
                <div>
                  <div className=" w-full h-64 border-2 rounded-sm">
                    <label
                      className=" mb-2 text-sm font-medium text-white w-full h-full cursor-pointer flex flex-col justify-center items-center"
                      htmlFor="file_input"
                    >
                      <input
                        className="hidden w-full h-full"
                        id="file_input"
                        type="file"
                        onChange={handleFileChange}
                      />
                      <FileUploadIcon />
                      <h6 className="text-center p-4">
                        Drop Your Payment Screenshot Here
                      </h6>

                      {formData.file && (
                        <h1 className="text-base">
                          Uploded File : {formData.file.name}
                        </h1>
                      )}
                    </label>
                  </div>
                </div>

                <motion.button
                  initial={{
                    background:
                      "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)",
                  }}
                  whileHover={{
                    background:
                      "linear-gradient(90deg, rgba(4,37,47,1) 0%, rgba(26,173,216,1) 100%)",
                    opacity: 1,
                  }}
                  type="submit"
                  className="w-full border-2 border-[#1EC1C5] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  SUBMIT
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </ModalProvider>
  );
}

export default Register;
