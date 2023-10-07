import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {  FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../components/ProviderContext/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState("");
  const [showPass, setShowPass] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValues = e.target;
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photo-url");
    const password = form.get("password");
    console.log(name, email, password);

    setRegisterError("");
    formValues.reset();

    if (password.length < 6) {
      return setRegisterError(" The password is less than 6 characters");
    } 
    //else if (!/[A-Z]/.test(password)) {
    //   return setRegisterError(" The password don't have a capital letter");
    // } else if (!/[!#$%&?]/.test(password)) {
    //   return setRegisterError(" The password don't have a special character");
    // }
    

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        updateUser(name, photoUrl)
          .then(() => console.log("Photo updated"))
          .catch((err) => setRegisterError(err.message));
        toast.success("Successfully User Created!");
      })
      .catch((err) => {
        setRegisterError(err.message);
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
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between my-12">
              <div data-aos="fade-right" data-aos-duration="3000">
                <img
                  src={`https://i.ibb.co/7V7mjG7/reigister-illus.png`}
                  alt=""
                />
              </div>

              <div
                className="opacity-100 bg-[#cae2fe] py-2 rounded-xl"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <div className="hero ">
                  <div className="hero-content">
                    <div className="card  w-full">
                      <div className="card-body">
                        <form onSubmit={handleSubmit} className=" space-y-1">
                          <h3 className="text-center text-3xl text-black font-bold my-1">
                            Register now
                          </h3>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-xl ">Name</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              placeholder="name"
                              className="input input-bordered"
                            />
                          </div>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-xl">Email</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              placeholder="email"
                              className="input input-bordered "
                            />
                          </div>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-xl">Photo Url</span>
                            </label>
                            <input
                              type="text"
                              name="photo-url"
                              placeholder="photo url"
                              className="input input-bordered "
                            />
                          </div>
                          <div className="form-control text-black">
                            <label className="label">
                              <span className="label-text text-xl ">
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
                            <label className="label text-xl my-2 text-black">
                              <span>Already have an account?</span>
                              <Link
                                to={"/login"}
                                className=" label-text-alt link link-hover ms-2 text-[#3e8ee9] text-xl"
                              >
                                Login now
                              </Link>
                            </label>
                          </div>
                          {registerError && (
                            <h3 className="text-red-600 mb-12 text-lg pb-5">
                              {registerError}
                            </h3>
                          )}
                          <input
                            className="btn bg-[#4293e5] text-white w-full hover:text-black"
                            type="submit"
                            value="Register"
                          />
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

export default Register;
