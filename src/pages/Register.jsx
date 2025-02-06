import React, { useEffect } from "react";
import { useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db, supabase } from "../firebase_config.js";
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
import { uid } from "uid";

function Register() {
  const nav = useNavigate();
  const [promocodes, setPromocodes] = useState([]);
  const [promoVerify, setPromoVerify] = useState(false);
  useEffect(() => {
    const getCodes = async () => {
      const colRef = collection(db, "workshopcodes");
      const colSnapshot = await getDocs(colRef);
      const colData = colSnapshot.docs.map((doc) => doc.id);
      setPromocodes(colData);
    };
    getCodes();
  }, []);

  const [formData, setFormData] = useState({
    teamName: "",
    name: "",
    phone: "",
    email: "",
    college: "",
    member2: "",
    member3: "",
    member4: "",
    member5: "",
    startup: "",
    promocode: "",
    registration: "",
    transactionID: "",
    file: null,
  });
  const { event } = useParams();
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handlePromoVerify = () => {
    if (promocodes.includes(formData.promocode)) {
      alert("Promo Code Applied!!");
      try {
        deleteDoc(doc(db, "workshopcodes", formData.promocode));
      } catch (err) {
        alert("Code Not Found");
      }
      setPromoVerify(true);
    } else {
      alert("Invalid Promo Code");
      setPromoVerify(false);
    }
  };
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      event !== "awareness" &&
      event != "startup" &&
      event != "paperpresentation" &&
      !promoVerify &&
      !formData.file
    ) {
      return alert("Please upload the payment screenshot");
    }

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
    if (
      event !== "awareness" &&
      event != "startup" &&
      event != "paperpresentation" &&
      !promoVerify
    ) {
      uploadFile();
    } else {
      await saveFormData("");
      setIsSubmitting(false);
    }
  };

  const saveFormData = async (imageURL) => {
    try {
      const docRef = await addDoc(collection(db, event), {
        teamName: formData.teamName,
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        college: formData.college,
        member2: formData.member2,
        member3: formData.member3,
        promocode: formData.promocode,
        member4: formData.member4,
        member5: formData.member5,
        startup: formData.startup,
        registration: formData.registration,
        transactionID: formData.transactionID,
        screenshotUrl: imageURL,
        createdAt: new Date(),
      });
      alert(
        "Form submitted successfully! Verification mail will be sent soon to the registered email id."
      );
      setFormData({
        teamName: "",
        name: "",
        phone: "",
        email: "",
        college: "",
        member2: "",
        member3: "",
        promocode: "",
        member4: "",
        member5: "",
        startup: "",
        registration: "",
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
                {[
                  "capturetheflag",
                  "techexpo",
                  "freefire",
                  "paperpresentation",
                  "cinema",
                  "valorant",
                  "surfing",
                  "bugbounty",
                ].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="Team Name"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Team Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={formData.teamName}
                        onChange={handleInputChange}
                        type="text"
                        name="teamName"
                        id="teamName"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Team Name"
                        required
                      />
                    </div>
                  </>
                )}
                {["startup"].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="startupname"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Startup Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={formData.startup}
                        onChange={handleInputChange}
                        type="text"
                        name="startup"
                        id="startupname"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Startup Name"
                        required
                      />
                    </div>
                  </>
                )}
                {["startup"].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="Startupreg"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Startup Registration
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        value={formData.registration}
                        onChange={handleInputChange}
                        type="text"
                        name="registration"
                        id="Startupreg"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Startup Registration"
                        required
                      />
                    </div>
                  </>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    {[
                      "capturetheflag",
                      "techexpo",
                      "freefire",
                      "paperpresentation",
                      "cinema",
                      "valorant",
                      "surfing",
                      "bugbounty",
                    ].includes(event)
                      ? "Leader Name"
                      : "Name"}
                    <span className="text-red-500">*</span>
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
                    {[
                      "capturetheflag",
                      "techexpo",
                      "freefire",
                      "paperpresentation",
                      "cinema",
                      "valorant",
                      "surfing",
                      "bugbounty",
                    ].includes(event)
                      ? "Leader Email"
                      : "Email"}
                    <span className="text-red-500">*</span>
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
                    htmlFor="institution"
                    className="block mb-2 text-base font-medium text-gray-400"
                  >
                    {[
                      "capturetheflag",
                      "techexpo",
                      "freefire",
                      "paperpresentation",
                      "cinema",
                      "valorant",
                      "surfing",
                      "bugbounty",
                    ].includes(event)
                      ? "Leader Institution"
                      : "Institution"}
                    <span className="text-red-500">*</span>
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
                    {[
                      "capturetheflag",
                      "techexpo",
                      "freefire",
                      "paperpresentation",
                      "cinema",
                      "valorant",
                      "surfing",
                      "bugbounty",
                    ].includes(event)
                      ? "Leader Contact"
                      : "Contact"}
                    <span className="text-red-500">*</span>
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
                {[
                  "capturetheflag",
                  "techexpo",
                  "freefire",
                  "paperpresentation",
                  "cinema",
                  "valorant",
                  "surfing",
                  "bugbounty",
                ].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="member 2"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Member 2
                      </label>
                      <input
                        value={formData.member2}
                        onChange={handleInputChange}
                        type="text"
                        name="member2"
                        id="member2"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="member 3"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Member 3
                      </label>
                      <input
                        value={formData.member3}
                        onChange={handleInputChange}
                        type="text"
                        name="member3"
                        id="member3"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Name "
                      />
                    </div>
                  </>
                )}
                {[
                  "freefire",
                  "paperpresentation",
                  "valorant",
                  "surfing",
                ].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="member 4"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Member 4
                      </label>
                      <input
                        value={formData.member4}
                        onChange={handleInputChange}
                        type="text"
                        name="member4"
                        id="member4"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Name "
                      />
                    </div>
                  </>
                )}
                {["valorant"].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="member 5"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Member 5
                      </label>
                      <input
                        value={formData.member5}
                        onChange={handleInputChange}
                        type="text"
                        name="member5"
                        id="member5"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Name"
                      />
                    </div>
                  </>
                )}
                {["workshop1", "workshop2"].includes(event) && (
                  <>
                    <div>
                      <label
                        htmlFor="promocode"
                        className="block mb-2 text-base font-medium text-gray-400"
                      >
                        Promo Code
                      </label>
                      <input
                        value={formData.promocode}
                        onChange={handleInputChange}
                        type="text"
                        name="promocode"
                        id="promocode"
                        className="bg-gray-600 backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-300 text-white text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                        placeholder="Promo Code"
                      />
                      <button
                        type="button"
                        onClick={handlePromoVerify}
                        className="w-full h-10 bg-teal-950 text-white rounded-xl mt-3"
                      >
                        Apply Code
                      </button>
                    </div>
                  </>
                )}

                {event !== "awareness" &&
                  event !== "startup" &&
                  event !== "paperpresentation" &&
                  !promoVerify && (
                    <>
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
                                  src={data[event]?.eventDetails.qr}
                                  className="w-64 h-80 border-2 border-gray-500 rounded-lg"
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
                          Transaction ID<span className="text-red-500">*</span>
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
                              <span className="text-red-500">*</span>
                            </h6>

                            {formData.file && (
                              <h1 className="text-base">
                                Uploded File : {formData.file.name}
                              </h1>
                            )}
                          </label>
                        </div>
                      </div>{" "}
                    </>
                  )}
                {event == "paperpresentation" && (
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
                    onClick={() =>
                      window.open(
                        "https://forms.gle/eQtFsX6QVkD2Q7JLA",
                        "_blank"
                      )
                    }
                    className="w-full border-2 border-[#1EC1C5] text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    UPLOAD YOUR PAPER
                  </motion.button>
                )}

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
                  {isSubmitting ? "SUBMITING....." : "SUBMIT"}
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
