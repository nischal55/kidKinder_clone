import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" w-full bg-sky-900 ">
        <div className=" flex justify-around pb-10">
          <div className="w-[300px] mt-10">
            <div className="flex">
              <div>
                <img
                  src="https://res.cloudinary.com/dm9bvl0lc/image/upload/v1718457264/n5r9yxgjiewbnzloeqts.png"
                  className="h-12  mt-2 mx-3"
                  alt=""
                />
              </div>
              <div>
                <p className="font-Nunito font-bold text-white  text-[40px]">
                  KidKinder
                </p>
              </div>
            </div>
            <p className="text-justify p-2 text-white">
              Labore dolor amet ipsum ea, erat sit ipsum duo eos. Volup amet ea
              dolor et magna dolor, elitr rebum duo est sed diam elitr. Stet
              elitr stet diam duo eos rebum ipsum diam ipsum elitr.
            </p>
            <div className="flex mt-2">
              <div className=" border border-sky-400 rounded-full w-8 h-8 mx-2">
                <FaTwitter className="mt-[5px] mx-[6px] text-lg text-sky-400" />
              </div>
              <div className=" border border-sky-400 rounded-full w-8 h-8 mx-2">
                {" "}
                <FaFacebookF className="mt-[5px] mx-[6px]  text-lg text-sky-400" />
              </div>
              <div className=" border border-sky-400 rounded-full w-8 h-8 mx-2">
                <FaLinkedinIn className="mt-[5px] mx-[6px] text-lg text-sky-400" />{" "}
              </div>
              <div className=" border border-sky-400 rounded-full w-8 h-8 mx-2">
                {" "}
                <FaInstagram className="mt-[5px] mx-[6px] text-center text-lg text-sky-400" />{" "}
              </div>
            </div>
          </div>
          <div>
            <p className="font-handlee text-3xl font-bold text-sky-500 mt-12">
              Get In Touch
            </p>
            <p className="mt-6 flex">
              <FaLocationDot className="text-sky-500 inline-block text-2xl" />
              <p className="font-bold font-handlee text-white text-xl px-4">
                Address
              </p>
            </p>
            <p className="font-Nunito text-white mx-8 p-2">
              123 Street, New York, USA
            </p>
            <p className="mt-6 flex">
              <MdEmail className="text-sky-500 text-2xl" />
              <p className="font-bold font-handlee text-white text-xl px-4">
                Email
              </p>
            </p>
            <p className="font-Nunito text-white mx-8 p-2">Info@example.com</p>

            <p className="mt-6 flex">
              <FaPhone className="text-sky-500 text-2xl" />
              <p className="font-bold font-handlee text-white text-xl px-4">
                Phone
              </p>
            </p>
            <p className="font-Nunito text-white mx-8 p-2">+012 345 67890</p>
          </div>
          <div>
            <p className="font-handlee text-3xl font-bold text-sky-500 mt-10">
              Quick Links
              <div className="text-[1rem] mt-4 text-white">
                <ul>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">Home</Link>
                  </li>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">About Us</Link>
                  </li>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">Our Classees</Link>
                  </li>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">Our Teachers</Link>
                  </li>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">Our Blogs</Link>
                  </li>
                  <li>
                    <FaChevronRight className="inline-block" />
                    <Link className="px-2">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </p>
          </div>
          <div>
            <p className="font-handlee text-3xl font-bold text-sky-500 mt-10">
              Newsletters
            </p>
            <form className="mt-6">
              <input
                type="text"
                className="rounded p-2 w-60"
                placeholder="Your Name"
              />
              <br />
              <input
                type="text"
                className="rounded p-2 w-60 mt-3"
                placeholder="Your Email"
              />
              <br />
              <input
                type="submit"
                className="bg-sky-500 text-white w-60 p-2 rounded-full mt-6"
                value="Submit Now"
              />
            </form>
          </div>
        </div>
        <div className="container bg-sky-700 w-full h-px"></div>
        <div className="p-10 text-white text-center font-Nonito">
          <p>© KidKinder. All Rights Reserved. Designed by Nischal Shakya</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
