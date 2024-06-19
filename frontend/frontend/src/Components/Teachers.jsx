import axios from "axios";
import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Teachers() {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios.get("/api/teachers").then((res) => {
      setTeachers(res.data);
    });
  });
  return (
    <>
      <div>
        <div className="flex justify-center">
          <div className="flex">
            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
            <p className="font-Nunito text-cyan-500 text-lg">Our Teachers</p>

            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
          </div>
        </div>
        <h2 className="text-center font-[handlee] text-sky-900 text-4xl font-bold p-6">
          Meet Our Teachers
        </h2>
      </div>
      <div className="flex justify-center flex-wrap md:gap-8">
        {teachers.map((teacher) => {
          return (
            <>
              <div className="cursor-pointer mt-8 md:mt-0">
                <div className="">
                  <div className="group rounded-full  hover:bg-cyan-600 hover:transition-all  opacity-80 absolute w-60 h-60">
                    <div className="flex mt-28 mx-12 hidden group-hover:flex" >
                      <div className=" border border-white rounded-full w-8 h-8 mx-2 hover:rounded-lg hover:transition-all">
                        {" "}
                        <FaFacebookF className="mt-[5px] mx-[6px]  text-lg text-white " />
                      </div>
                      <div className=" border border-white rounded-full w-8 h-8 mx-2 hover:rounded-lg hover:transition-all">
                        <FaLinkedinIn className="mt-[5px] mx-[6px] text-lg text-white" />{" "}
                      </div>
                      <div className=" border border-white rounded-full w-8 h-8 mx-2 hover:rounded-lg hover:transition-all">
                        {" "}
                        <FaInstagram className="mt-[5px] mx-[6px] text-center text-lg text-white" />{" "}
                      </div>
                    </div>
                  </div>
                  <img
                    src={teacher.teacherImage}
                    className={`rounded-full w-60 h-60`}
                  />
                </div>
                <h2 className="font-handlee font-bold text-2xl text-center pt-6 text-cyan-800">
                  {teacher.teacher_name}
                </h2>
                <p className="italic font-Nonito text-slate-600 text-center">
                  {teacher.subject}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Teachers;
