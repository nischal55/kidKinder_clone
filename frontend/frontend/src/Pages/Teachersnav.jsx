import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Teachers from "../Components/Teachers";

function Teachersnav() {
  return (
    <>
        <Navbar/>
      <div className="w-full h-[400px] bg-cyan-600">
        <h2 className="text-5xl font-handlee font-bold text-white text-center pt-40">Our Teachers</h2>
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

export default Teachersnav;
