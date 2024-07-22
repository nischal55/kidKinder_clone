import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JoinNow() {
  const [classes, setClasses] = useState([]);
  const [email,setEmail] =useState('');
  const [StudentName,setName]= useState('');
  const [contact,setContact] = useState('');
  const { slugClass } = useParams();
  const [ClassId , setSelectedClass] = useState(slugClass);

  useEffect(() => {
    axios.get("/api/classes").then((res) => {
      setClasses(res.data);
    });
  }, []);



  const handleSubmit=(e)=>{
    e.preventDefault();
      axios.post('/api/enrolls',{email,StudentName,contact,ClassId}).then((res)=>{
        toast.success(res.data);
        setEmail('');
        setName('');
        setContact('');
      }).catch((err)=>{
        toast.error(err.response.data.message)
      })
      
  }
  return (
    <>
      <Navbar />
      <div className="md:w-6/12  w-full mx-auto border p-10 m-12">
        <h2 className="text-3xl font-handlee text-blue-800 text-center font-bold">
          Join Now !{" "}
        </h2>
        <form action="" className="">
          <label htmlFor="">Email:</label>
          <br />
          <input type="email" id="" required className="w-full h-10 border" value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="">Full Name:</label>
          <br />
          <input type="text" id="" required className="w-full h-10 border" value={StudentName} onChange={(e)=>{setName(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="">Contact:</label>
          <br />
          <input type="text" id="" required className="w-full h-10 border" value={contact} onChange={(e)=>{setContact(e.target.value)}}/>
          <br />
          <br />
          <label htmlFor="">Classes:</label>
          <br />
          <select name="" id="" className="w-full border h-10"  onChange={(e)=>{setSelectedClass(e.target.value)}}>
            {classes.map((classData) => {
              return (
                <>
                  {classData._id == slugClass ? (
                    <>
                      <option value={classData._id} selected>{classData.title}</option>
                    </>
                  ) : (
                    <>
                      <option value={classData._id}>{classData.title}</option>
                    </>
                  )}
                </>
              );
            })}
          </select>
          <br />
          <br />

          <input
            type="submit"
            value={`submit`}
            required
            className="w-full h-10 bg-blue-600 text-white rounded-md"
            onClick={handleSubmit}
          />
          <br />
        </form>
      </div>

      <Footer />
    </>
  );
}

export default JoinNow;
