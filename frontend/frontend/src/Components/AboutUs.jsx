import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <>
      <div className="container md:flex grid grid-cols-1 px-8 md:px-0">
        <div className="w-full">
          <img
            src="https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718500822/apofogttonwnyqhu3hfe.jpg"
            className="md:w-[445px] md:h-[534px] rounded-lg"
            alt=""
          />
        </div>
        <div className="w-full">
          <div className="flex  pb-4 mt-24">
            <p className="font-Nunito text-[1rem] text-cyan-500">
              LEARN ABOUT US
            </p>
            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
          </div>
            <p className="text-[2.5rem] text-cyan-900 font-handlee font-bold ">
            Best School For Your Kids
            </p>
            <p className="text-[1rem]">
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
            </p>
            <div className="flex mt-6">
                <div>
                    <img src="https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718500827/vagbz62w5epavbod4pfj.jpg" className="rounded-lg" alt="" />
                </div>
                <div className=" mx-4 text-[1rem]">
                    <hr/>
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Labore eos amet dolor amet diam</p>
                    <hr />
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Etsea et sit dolor amet ipsum</p>
                    <hr />
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Diam dolor diam elitripsum vero.</p>
                    <hr />
                </div>
                

            </div><br /><br />
                <Link className="bg-cyan-600 p-2 py-4 px-8 rounded-full text-white">Learn More</Link>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
