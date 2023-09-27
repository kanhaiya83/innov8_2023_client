import React from "react";
import Illustration1 from "../components/HomePageSections/Illustration1";
import Cards from "../components/CardsHowItWorks/Cards";
import OurMission from "../components/HomePageSections/OurMission";
import KeyFeatures from "../components/HomePageSections/KeyFeatures";
import GetStarted from "../components/HomePageSections/GetStarted";
const Homepage = () => {
  return (
    <div>
      <Illustration1 />
      <OurMission />
      <Cards />
      <KeyFeatures />
      <GetStarted />
    </div>
  );
};

export default Homepage;
