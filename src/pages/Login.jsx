import { useRef, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const { signInUser, googleSign } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [showPass, setShowPass] = useState(true);
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    setLoginError("");
    formValues.reset();

    signInUser(email, password)
      .then((res) => {
        console.log(res);
        toast.success("Successfully Logged in!");
      })
      .catch((err) => {
        setLoginError(err.message);
        toast.error(err.message);
      });
  };
  const handleGoogle = () => {
    googleSign()
      .then((res) => {
        const user = res.user;
        console.log(user);
        toast.success("Successfully Logged in!");
      })
      .catch((err) => {
        setLoginError(err.message);
        toast.error(err.message);
      });
  };

  return (
    <>
      <div
        className="hero"
        style={{
          backgroundImage: "url(https://i.ibb.co/6g1jRKm/login-bg.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay p-0 opacity-10 bg-black"></div>

        <div className="flex flex-col w-full max-w-[1280px] mx-auto ">
          <div className="my-8">
            <Navbar></Navbar>
          </div>
          <div className="hero-content px-2 text-center lg:text-start text-neutral-content mx-auto  my-2 lg:my-8">
            <div className="flex md:flex-row-reverse flex-col gap-6  items-center justify-between my-12">
              <div data-aos="fade-left" data-aos-duration="3000">
                <img
                  src={`https://i.ibb.co/7V7mjG7/reigister-illus.png`}
                  alt=""
                />
              </div>

              <div
                className="opacity-100 bg-[#cae2fe] py-2 rounded-xl"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <div className="hero">
                  <div className="hero-content">
                    <div className="card  w-full">
                      <div className="card-body">
                        <form onSubmit={handleSubmit} className=" space-y-1">
                          <h3 className="mb-3 text-center text-3xl text-black font-bold">
                            Login now
                          </h3>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-lg">Email</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              ref={emailRef}
                              placeholder="email"
                              className="input input-bordered"
                            />
                          </div>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-lg">
                                Password
                              </span>{" "}
                              <span>
                                {showPass ? (
                                  <FaEyeSlash
                                    onClick={() => setShowPass(!showPass)}
                                  />
                                ) : (
                                  <FaEye
                                    onClick={() => setShowPass(!showPass)}
                                  />
                                )}
                              </span>
                            </label>
                            <input
                              type={showPass ? "password" : "text"}
                              name="password"
                              placeholder="password"
                              className="input input-bordered"
                            />
                            <label className="label text-lg my-2 text-black">
                              <span>New to this?</span>
                              <Link
                                to={"/register"}
                                className=" label-text-alt link link-hover ms-2 text-[#3e8ee9] text-lg"
                              >
                                Register now
                              </Link>
                            </label>
                          </div>
                          {loginError && (
                            <h3 className="text-red-600 pb-4 text-lg">
                              {loginError}
                            </h3>
                          )}
                          <input
                            className="btn normal-case bg-[#4293e5] text-white w-full hover:text-black"
                            type="submit"
                            value="Login"
                          />
                           <div className="divider text-black py-2">OR</div>
                          <button onClick={handleGoogle} className="btn normal-case bg-[#4293e5] text-white w-full hover:text-black">
                            <span>With Google</span>
                            <span>
                              <FaGoogle></FaGoogle>
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </>
  );
};

export default Login;
