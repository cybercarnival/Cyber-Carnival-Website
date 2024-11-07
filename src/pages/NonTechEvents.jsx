import React from "react";
import EventCard from "../components/EventCard";
import Background from "../components/Background/Background";

function Events() {
  return (
    <div className="mt-32 w-full flex flex-wrap min-h-screen items-center justify-center ">
      <Background />
      <EventCard urlName="freefire" />
      <EventCard urlName="cinema" />
      <EventCard urlName="surfing" />
      <EventCard urlName="surviva" />
      <EventCard urlName="title" />
      <EventCard urlName="valorant" />
    </div>
  );
}

export default Events;
