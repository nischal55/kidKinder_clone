import axios from "axios";
import { useState, useEffect } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

function ViewTeachers() {
  const [teachers, setTeacher] = useState([]);

  useEffect(() => {
    axios.get("/api/teachers").then((res) => {
      setTeacher(res.data);
    });
  });

  return (
    <>
      <div className="absolute top-24 w-9/12 left-72">
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div>
              <h2 className="text-lg font-semibold">Teachers</h2>
            </div>
            <div>
              <Link
                to={`/dashboard/addTeachers`}
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Add new teachers
              </Link>
            </div>
          </div>
          <div className="mt-6 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          <span>Teacher</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Title
                        </th>

                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Contact
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Social Media
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {teachers.map((teacher) => {
                        return (
                          <>
                            <tr>
                              <td className="whitespace-nowrap px-4 py-4">
                                <div className="flex items-center">
                                  <div className="h-10 w-10 flex-shrink-0">
                                    <img
                                      className="h-10 w-10 rounded-full object-cover"
                                      src={teacher.teacherImage}
                                      alt=""
                                    />
                                  </div>
                                  <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">
                                     {teacher.teacher_name}
                                    </div>
                                    <div className="text-sm text-gray-700">
                                      {teacher.email}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-12 py-4">
                                <div className="text-sm text-gray-900 ">
                                  {teacher.subject}
                                </div>
                              
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                <div className="text-sm text-gray-900 ">
                                  {teacher.contact}
                                </div>
                              </td>
                              <td className="whitespace-nowrap px-4 py-4">
                                <div className="text-sm text-gray-900 ">
                                  {teacher.facebook}
                                </div>
                                <div className="text-sm text-gray-900 ">
                                  {teacher.twitter}
                                </div>
                                <div className="text-sm text-gray-900 ">
                                  {teacher.linkedin}
                                </div>
                              </td>

                              <td className="whitespace-nowrap px-4 py-4  text-sm font-medium">
                              <div className="text-sm font-medium text-gray-900 flex">
                              <FaRegEdit className='text-blue-800 text-xl'/>
                              <MdOutlineDeleteOutline className='text-red-500 text-xl'/>
                              </div>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ViewTeachers;
