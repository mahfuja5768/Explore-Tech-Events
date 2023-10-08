import Banner from "../components/Banner";

const Speakers = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24">
      <div
        data-aos-duration="3000"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Event Speakers
        </h2>
        <p className="text-center w-3/4 mx-auto my-5">
          Meet the experts and thought leaders who will be sharing their
          insights at TechCon 2023. Learn from the best in the industry!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 my-8">
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <figure>
            <img
              src={"https://i.ibb.co/D8bCKFY/p1.webp"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <figure>
            <img
              src={"https://i.ibb.co/TTBmJ35/p3.jpg"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <figure>
            <img
              src={"https://i.ibb.co/306GNbw/p2.webp"}
              alt="Shoes"
              className="w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;