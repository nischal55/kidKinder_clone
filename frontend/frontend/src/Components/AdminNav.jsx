import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { MdClass } from "react-icons/md";
import { SiBookmeter } from "react-icons/si";
import { FaChalkboardTeacher } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/slice/userSlice";




function AdminNav() {
    const dispatch = useDispatch()
     let user = useSelector((store) => store.user.value);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <>
      <div className="flex">
        <div className={`${isMenuOpen?'translate-x-0 transition-all':'-translate-x-full transition-all w-0 overflow-hidden md:w-60  md:translate-x-0'} z-20  md:block`}>
          <div className="bg-indigo-950 text-white min-h-screen px-4 py-4">
            <div className="container ">
              <div className="flex items-center gap-2">
                <FaHome />
                <Link className="">Dashboard</Link>
              </div>

              {/*  */}
              <div className="my-7">
                <h3 className="text-xs text-gray-500 font-bold">COMPONENTS</h3>

                <ul className="my-4 text-gray-100">
                  <li className="flex items-center gap-2 py-2 hover:text-slate-600">
                    <SiBookmeter />

                    <Link to="/" className="">Bookings</Link>
                  </li>
                  <li className="flex items-center gap-2 py-2 hover:text-slate-600">
                    <MdClass />

                    <Link to="/Dashboard">Classes</Link>
                  </li>
                  <li className="flex items-center gap-2 py-2 hover:text-slate-600">
                    <FaChalkboardTeacher />

                    <Link to="/Dashboard/AddTeachers">Teachers</Link>
                  </li>
                </ul>
              </div>
              {/*  */}
            </div>
          </div>
        </div>
        <div className={` h-16 w-full border`}>
          <div>
            <IoMdMenu className={`md:hidden inline-block m-5 text-2xl`}  onClick={toggleMenu}/>
            <div className={ `${isMenuOpen?'hidden':'float-right'} flex  m-4` }>
              <IoIosNotifications className="mt-1 inline-flex text-2xl text-gray-500" />
              <div className={` flex  text-gray-600 `}>
                <div className="mx-2 h-8 w-8 rounded-full border"></div>
                <p className=" mt-1  text-Nunito font-bold text-[1rem]">
                  {user?<>{user.username} 
                  <span className="mx-4 cursor-pointer bg-indigo-900 text-white p-2 rounded-lg"
                  onClick={()=>{
                    dispatch(logout())
                  }}
                  >Logout</span>
                  </>  :"login"}
                  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNav;
