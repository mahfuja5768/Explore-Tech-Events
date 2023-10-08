import ConferenceInfo from "../components/ConferenceInfo";
import EventSchedule from "../components/EventSchedule";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Speakers from "../components/Speakers";


const About = () => {
  return (
    <>
    <div className=" max-w-[1280px] mx-auto  px-4" >
          <Navbar2></Navbar2>
        <ConferenceInfo></ConferenceInfo>
        <Speakers></Speakers>
        <EventSchedule></EventSchedule>
      </div>
        <Footer></Footer>
    </>
  );
};

export default About;
