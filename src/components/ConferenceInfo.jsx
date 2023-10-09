import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";
import Countdown from 'react-countdown';

const ConferenceInfo = () => {

  return (
     <div className="max-w-[1280px] mx-auto mb-24 mt-12  px-3">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">ABOUT THE CONFERENCE</h2>
    <div className="flex flex-col lg:flex-row items-center gap-6">
     <div>
     <div className=" border-2 border-gray-200 px-3 py-4 rounded-xl md:py-8 w-full md:w-3/2 text-center">
      <p className="text-lg md:text-2xl font-semibold py-1">Event Name: TechCon 2023</p>
      <p className="flex items-center justify-center gap-2 text-lg md:text-xl py-1 font-semibold">
        <span>
          <FaCalendarDay></FaCalendarDay>
        </span>
        <span>Date: October 16-18, 2023</span>
      </p>
      <p className="flex items-center justify-center gap-2 te text-lg md:text-xl py-1 font-semibold">
        <span>
          <FaLocationArrow></FaLocationArrow>
        </span>
        <span>Location: San Francisco, CA</span>
      </p>
      <p className="flex items-center gap-2 w-3/4 mx-auto text-lg md:text-xl py-1 font-semibold">
        <span>
          Description: Join us for three days of tech innovation, networking,
          and knowledge sharing. Get ready to dive into the future of
          technology!
        </span>
      </p>
      </div>
     </div>

     <div className="border-2 border-gray-200  rounded-xl ">
     <div className="grid grid-flow-col gap-3 md:gap-5 md:px-6 px-3 py-8 text-center auto-cols-max">
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-3xl md:text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-3xl md:text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-3xl md:text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
    <span className="countdown font-mono text-3xl md:text-5xl">
      <span style={{"--value":12}}></span>
    </span>
    sec
  </div>
</div>
     </div>
    </div>
     </div>
  );
};

export default ConferenceInfo;
