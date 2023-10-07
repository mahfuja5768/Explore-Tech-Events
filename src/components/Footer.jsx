import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div
        className="hero text-white mt-12"
        style={{ backgroundImage: "url(https://i.ibb.co/gvFqS5Y/footer3.jpg)" }}
      >
        <div className="hero-overlay bg-opacity-80 bg-gray-900"></div>
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className=" max-w-[1280px] mx-auto py-24 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <nav className="flex flex-col">
            <header className="font-bold text-2xl text-white mb-2">
              Quick Menu
            </header>
            <Link to="/" className="link link-hover ps-1 font-medium">
              Home
            </Link>
            <Link to="/speakers" className="link link-hover ps-1 font-medium">
              {" "}
              Speakers
            </Link>
          </nav>

          <nav>
            <header className="font-bold text-2xl text-white">
              Social links
            </header>
            <p className="w-3/2 my-2">
              Join our vibrant tech community by following us on Facebook,
              Twitter, and LinkedIn for the latest industry updates, event
              highlights, and career opportunities.
            </p>
            <div className="flex items-center gap-12 my-6">
              <a
                href="https://www.facebook.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaFacebookF className="text-xl "></FaFacebookF>
              </a>
              <a
                href="https://www.dribbble.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaLinkedin className="text-xl"></FaLinkedin>
              </a>
              <a
                href="https://www.twitter.com/"
                className="hover:-translate-y-2 duration-300"
                target="blank"
              >
                <FaTwitter className="text-xl"></FaTwitter>
              </a>
            </div>
          </nav>

          <form>
            <header className="font-bold text-2xl text-white">
              Newsletter
            </header>
            <p className="w-3/4 my-2">
              You can trust us. we only send promo offers, not a single spam.
            </p>

            <fieldset className="form-control w-80 my-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      <div className=" flex  justify-center flex-end bg-[#000000] text-white py-3">
        <p>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
