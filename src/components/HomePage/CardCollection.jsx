import React, { useEffect, useState } from "react";

const CardCollection = () => {
  const [cardsVisible, setCardsVisible] = useState([false, false, false]);

  useEffect(() => {
    const timers = [];

    // Show each card after the button's transition completes
    for (let i = 0; i < 3; i++) {
      timers.push(
        setTimeout(() => {
          setCardsVisible((prev) => {
            const newVisible = [...prev];
            newVisible[i] = true; // Set current card to visible
            return newVisible;
          });
        }, 200 * (i + 1) + 1500) // Start after button animation completes (1500ms + 500ms for each card)
      );
    }

    return () => timers.forEach(clearTimeout); // Cleanup timers
  }, []);

  return (
    <div className="flex justify-center space-x-4 mt-4">
      {cardsVisible.map((visible, index) => (
        <div
          key={index}
          className={`w-48 h-48 bg-opacity-40 rounded-lg bg-slate-600 shadow-lg shadow-slate-950 transition-opacity duration-700  ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: `${200 * index}ms` }} // Delay for smooth appearance
        />
      ))}
    </div>
  );
};

export default CardCollection;
