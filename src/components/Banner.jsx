import Navbar from "./Navbar";
import { FaArrowCircleRight } from "react-icons/fa";
const Banner = () => {

  return (
    <div>
      <div
        className="hero text-white"
        style={{
          backgroundImage: "url(https://i.ibb.co/wzMDxsC/banner1.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay p-0"></div>
        <div className="flex flex-col w-full max-w-[1280px] mx-auto ">
          <div className="my-8">
            <Navbar></Navbar>
          </div>
          <div className="hero-content px-2 min-h-[30vh] md:min-h-[40vh] lg:min-h-[70vh]  text-center lg:text-start text-neutral-content mx-auto  my-2 lg:my-8">
            <div className="grid grid-cols-1 lg:grid-cols-4">
              <div className=" lg:col-span-3" data-aos="fade-right"
                  data-aos-duration="3000">
                <h1
                  className="mb-4 text-3xl md:text-5xl leading-9 font-bold w-full  md:w-10/12  lg:w-full mx-auto" 
                >
                  Discover the Latest Trends, Insights, and Innovations.
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold">
                  The Ultimate Tech Experience Awaits You.
                </h2>
                <p className="my-3 md:w-3/4 lg:w-full mx-auto text-[#bebebe]">
                  At <strong>Explore-Tech-Events</strong>, conferences and expos
                  are more than just events; they are immersive experiences that
                  empower you to connect, learn, and shape the future of
                  technology.
                </p>
                <button className="btn mt-1 mb-5 normal-case bg-gray-200 btn-outline">
                  <span>Upcoming Events</span>
                  <span className="mt-2 w-6 h-6 animate-moveRight">
                    <FaArrowCircleRight></FaArrowCircleRight>
                  </span>
                </button>
              </div>
            </div>
            {/* <div className="w-2/5 hidden lg:flex" data-aos="fade-left"
                  data-aos-duration="3000">
              <img
                className="flex -rotate-180 "
                src={`https://i.ibb.co/9ckZs9b/banner-side.png`}
                alt=""
              />
            </div> */}
            <div className="w-1/2 hidden lg:flex" data-aos="fade-left"
                  data-aos-duration="3000">
              <img
                src={`https://i.ibb.co/DrvShMP/banner-light2-removebg-preview.png`}
                alt=""
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
