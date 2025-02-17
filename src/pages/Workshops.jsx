import React from "react";
import EventCard from "../components/EventCard";
import Background from "../components/Background/Background";

function Workshops() {
  return (
    <div className="mt-32 w-full flex flex-wrap min-h-screen items-center justify-center ">
      <Background />
      <EventCard urlName="workshop2" />
      <EventCard urlName="workshop1" />
    </div>
  );
}

export default Workshops;
