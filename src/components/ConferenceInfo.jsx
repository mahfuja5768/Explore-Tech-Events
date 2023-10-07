import { FaCalendarDay, FaLocationArrow } from "react-icons/fa";
import Countdown from 'react-countdown';

const ConferenceInfo = () => {

  return (
    <div className="max-w-[1280px] mx-auto my-12">
     <div>
     <h2 className="text-4xl font-bold">ABOUT THE CONFERENCE</h2>
      <p className="text-xl font-semibold">Event Name: TechCon 2023</p>
      <p className="flex items-center gap-2 text-xl font-semibold">
        <span>
          <FaCalendarDay></FaCalendarDay>
        </span>
        <span>Date: October 20, 2023</span>
      </p>
      <p className="flex items-center gap-2  text-xl font-semibold">
        <span>
          <FaLocationArrow></FaLocationArrow>
        </span>
        <span>Location: San Francisco, CA</span>
      </p>
      <p className="flex items-center gap-2 text-xl font-semibold">
        <span>
          Description: Join us for three days of tech innovation, networking,
          and knowledge sharing. Get ready to dive into the future of
          technology!
        </span>
      </p>
     </div>
     <div>
     <Countdown date={new Date("Oct 20, 2023 15:37:25").getTime() - Date.now()}></Countdown>
     </div>
    </div>
  );
};

export default ConferenceInfo;
