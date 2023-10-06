import PropTypes from "prop-types";
import Navbar from "./Navbar";

const Banner = () => {
  return (
    <div>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/wzMDxsC/banner1.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay p-0"></div>
        <div className="flex flex-col w-full max-w-[1280px] mx-auto">
          <div className="my-8">
            <Navbar></Navbar>
          </div>
          <div className="hero-content min-h-[30vh] md:min-h-[60vh] text-start text-neutral-content mx-auto  my-8">
            <div className="grid grid-cols-4 md:grid-cols-4">
            <div className=" col-span-3">
              <h1 className="mb-5 text-4xl leading-8  md:text-5xl font-bold w-full  md:w-3/4  lg:w-full mx-auto">
              Discover the Latest Trends, Insights, and Innovations.
              </h1>
              <h2 className="text-2xl font-semibold">
                The Ultimate Tech Experience Awaits You.
              </h2>
              <p className="my-3 w-3/4">
                At <strong>Explore-Tech-Events</strong>, we bring together the brightest minds and
                leading experts from the tech industry to explore the latest
                trends, share insights, and drive innovation. Our tech
                conferences and expos are more than just events; they are
                immersive experiences that empower you to connect, learn, and
                shape the future of technology.
              </p>
              <button className="btn my-5">Explore Upcoming Events</button>
            </div>
            </div>
            <div className="w-full h-full">
                <img className="flex -rotate-180 " src={`https://i.ibb.co/9ckZs9b/banner-side.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleFilter: PropTypes.func,
};

export default Banner;
