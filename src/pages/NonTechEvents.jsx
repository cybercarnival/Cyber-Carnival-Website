import React from 'react'
import EventCard from "../components/EventCard";


function Events() {
  return (
    <div className="mt-32 w-full flex flex-wrap min-h-screen items-center justify-center ">
    <EventCard urlName="freefire" />
    <EventCard urlName="cinema" />
    <EventCard urlName="surfing" />
    <EventCard urlName="awareness" />
    <EventCard urlName="surviva" />
    
    </div>
  )
}

export default Events
