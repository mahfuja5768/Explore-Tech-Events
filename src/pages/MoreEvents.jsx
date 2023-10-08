import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import UpcomingEvents from "../components/UpcomingEvents";


const MoreEvents = () => {
    return (
        <>
        <div className=" max-w-[1280px] mx-auto  px-4">
              <Navbar2></Navbar2>
            <UpcomingEvents></UpcomingEvents>
          </div>
            <Footer></Footer>
        </>
    );
};

export default MoreEvents;