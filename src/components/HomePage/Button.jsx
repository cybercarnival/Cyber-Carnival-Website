import React, { useEffect, useState } from "react";

const Button = ({ children, className, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className={`bg-transparent hover:bg-slate-800 text-white font-bold text-2xl py-2 px-4 border-2 border-[#07CBE7] rounded-full transition-opacity duration-300 hover:-translate-y-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
        style={{
          transition: "opacity 0.5s ease, transform 0.3s ease",
        }}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
