import Booking from "../Components/Booking";
import Classes from "../Components/Classes";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ClassNav() {
  return (
    <>
      <Navbar />
      <div className="w-full h-[400px] bg-cyan-600">
        <h2 className="text-5xl font-handlee font-bold text-white text-center pt-40">
          Our Classes
        </h2>
      </div>
      <div className="mt-24">
        <Classes />
      </div>
      <div className="mt-24">
        <Booking />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}

export default ClassNav;
