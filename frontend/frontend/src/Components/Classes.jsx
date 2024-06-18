import { useEffect, useState } from "react";
import axios from "axios";

function Classes() {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get("/api/classes").then((res) => {
      console.log(setClasses(res.data));
    });
  }, []);
  return (
    <>
      <div>
        <div className="flex justify-center">
        <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
        <p className="text-center font-Nunito text-cyan-500">POPULAR CLASSES</p>
        <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
        </div>
        <h2 className="text-center font-[handlee] text-sky-900 text-4xl font-bold p-6">
          Classes For Your kids
        </h2>
      </div>
      <div className="flex flex-wrap gap-6 justify-center ">
        {classes.map((singleClass) => {
          return (
            <>
              <div className="w-[22rem] bg-gray-100 rounded-lg">
                <div>
                  <img
                    src={singleClass.classImage}
                    alt=""
                    className="w-[22rem]"
                  />
                </div>
                <div>
                  <h2 className="text-sky-800 font-handlee font-bold text-center text-2xl p-5">
                    {singleClass.title}
                  </h2>
                  <p className="text-center text-slate-500 px-5">
                    {singleClass.desc}
                  </p>
                </div>
                <div className="mt-4 mx-12 mb-8">
                  <table>
                    <tbody>
                      <tr className="border-b">
                        <th className="px-3 text-slate-500">Age of Kids</th>
                        <td className="px-6 border-l text-slate-500">
                          {singleClass.ageOfKids}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-3 text-slate-500">Total Seats</th>
                        <td className="px-6 border-l text-slate-500">
                          {singleClass.totalSeats}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <th className="px-3 text-slate-500">Class Time</th>
                        <td className="px-6 border-l text-slate-500">
                          {singleClass.classTime}
                        </td>
                      </tr>
                      <tr>
                        <th className="px-3 text-slate-500">Tution Fee</th>
                        <td className="px-6 border-l text-slate-500">
                          {singleClass.tutionFee}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <button className="bg-cyan-600 p-2 px-8 rounded-full text-white mx-[6rem] mb-6">Join Now</button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Classes;
