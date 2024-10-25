import React from "react";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from "../firebase_config.js"; // import firebase config
import { useParams } from "react-router-dom";
import QR from "../assets/QR.png";
import { data } from "../data/viewEventsData.js";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    college: "",
    file: null,
  });

  const { event } = useParams();
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle file input (screenshot image)
  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.file) return alert("Please upload a screenshot");

    setIsSubmitting(true);

    // Upload the image to Firebase Storage
    const storageRef = ref(storage, `screenshots/${formData.file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, formData.file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.error("Upload error:", error);
        setIsSubmitting(false);
      },
      async () => {
        // Get the image URL after upload completes
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(downloadURL);
        // Save the entire form data, including the image URL, in Firestore
        await saveFormData(downloadURL);
        setIsSubmitting(false);
      }
    );
  };

  // Save form data to Firestore
  const saveFormData = async (imageURL) => {
    try {
      // Replace 'eventCollection' with the specific event's collection name
      const docRef = await addDoc(collection(db, event), {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        college: formData.college,
        screenshotUrl: imageURL, // Add the image URL here
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
    {/* <Background/> */}
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-1/2 flex justify-end m-5">
        <img src={QR} className="w-[300px] h-[300px]" />
      </div>
      <div className="flex justify-start w-1/2 m-5">
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="m-2 text-5xl font-jersey  text-[#1EC1C5]">Register</h1>
          <h6 className="text-white text-xl font-rubik">
            Event : {data[event].title}
          </h6>
          <h6 className="text-white text-xl font-rubik">
            Registration Fee : {data[event].eventDetails.fees}
          </h6>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-1/3 m-2"
          >
            <input
              className="w-80 h-10 rounded-lg border-2 border-[#1EC1C5] text-white bg-transparent p-4 placeholder-slate-200 m-1"
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-80 h-10 rounded-lg border-2 border-[#1EC1C5] text-white bg-transparent p-4 placeholder-slate-200 m-1"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-80 h-10 rounded-lg border-2 border-[#1EC1C5] text-white bg-transparent p-4 placeholder-slate-200 m-1"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-80 h-10 rounded-lg border-2 border-[#1EC1C5] text-white bg-transparent p-4 placeholder-slate-200 m-1"
              type="text"
              name="college"
              placeholder="College"
              value={formData.college}
              onChange={handleInputChange}
              required
            />
           
            <input
              type="file"
              onChange={handleFileChange}
              className="text-white border-2 text-center p-2 m-2 rounded-lg"
              placeholder="upload transaction proof"
              required
            />
            <button
              className="text-white p-2 m-2 border-2 rounded-lg"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Register;
