import AboutUs from "../Components/AboutUs";
import Classes from "../Components/Classes";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Booking from "../Components/Booking";
import Teachers from "../Components/Teachers";

function Home() {
  return (
    <>
      <Navbar />
      <div className=" w-full h-auto bg-cyan-500 ">
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="font-handlee relative top-10  md:top-40">
            <p className="text-[1.5rem] md:text-[1.5rem] font-bold text-white text-center md:text-left">
              Kids Learning Center
            </p>
            <p className="text-[40px] md:text-[4.5rem] mt-2 font-bold text-white leading-tight text-center md:text-left">
              New Approach to Kids Education
            </p>
            <p className="text-white text-md font-Nunito text-center md:text-left ">
              Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet
              sed sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore
              sed ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est
              justo dolore.
            </p>
            <button className="bg-cyan-900 rounded-full p-4 mt-8 text-white px-10 relative md:left-0 left-[28vw]">
              Learn More
            </button>
          </div>
          <div className="mt-16">
            <img
              className="w-[600px]"
              src="https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718450906/fgqvj3d4abssbue1k51w.png"
              alt="banner-1"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <Features />
      </div>
      <div className="mt-24">
        <AboutUs />
      </div>
      <div className="mt-24">
        <Classes />
      </div>
      <div className="mt-24">
        <Booking />
      </div>
      <div className="mt-24">
        <Teachers />
      </div>
      <div className="mt-24">
        <Footer />
      </div>
    </>
  );
}

export default Home;
