import EventCard from "../components/EventCard";
import Background from "../components/Background/Background";
import React from "react";

function Events() {
  return (
    <div className="mt-32 w-full flex flex-wrap min-h-screen items-center justify-center ">
      <Background />
      <EventCard urlName="cyberconclave" />
      <EventCard urlName="capturetheflag" />
      <EventCard urlName="paperpresentation" />
      <EventCard urlName="bugbounty" />
      <EventCard urlName="techexpo" />
      <EventCard urlName="startup" />
    </div>
  );
}

export default Events;
