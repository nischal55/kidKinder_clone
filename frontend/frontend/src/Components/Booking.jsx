import { TiTick } from "react-icons/ti";
import { useState,useEffect } from "react";
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Booking() {
  const [classes,setClass] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [classId, setClassId] = useState('6670e5f6b6ea220a4fb083e4');
  const payment_status = "pending"; 
  


  function handleSubmimt(e){
    e.preventDefault();
         axios.post('/api/books',{name,email,classId,payment_status}).then((res)=>{
          toast.success(res.data);
          setName('')
          setEmail('')
        }).catch((err)=>{
          toast.error(err.response.data.message)
        })

    
  }

  useEffect(()=>{
      axios.get('/api/classes').then((res)=>{setClass(res.data)})
  },[])
  return (
    <>
      <div className="flex justify-center flex-wrap">
        <div className="w-[650px]">
          <div className="flex p-3">
            <p className="text-center font-Nunito text-cyan-500">BOOK A SEAT</p>
            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
          </div>
          <h2 className="font-[handlee] text-sky-900 text-4xl font-bold p-3">
            Book A Seat For Your Kid
          </h2>
          <p className="p-3">
          Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>
          <div className="  text-[1rem]">
                    
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Labore eos amet dolor amet diam</p>
                    
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Etsea et sit dolor amet ipsum</p>
                    
                    <p className="p-2"><TiTick className="inline-block text-cyan-500 text-2xl" /> Diam dolor diam elitripsum vero.</p>
                    
                </div>
        </div>
        <div>
          <div className="md:w-[400px] w-[380px] mt-4 md:mt-0  ">
            <h2 className="text-3xl text-center font-bold text-white font-handlee bg-sky-900 p-6">Book A Seat</h2>
            <form className="p-4  bg-sky-400" onSubmit={handleSubmimt}>
              <input type="text" className="w-[80%] border mx-8 h-12 rounded px-2" placeholder="Your Name" onChange={(e)=>{setName(e.target.value)}} value={name} required/><br /><br />
              <input type="email" className="w-[80%] border mx-8 h-12 rounded px-2" placeholder="Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required/><br /><br />
             <select className="w-[80%] border mx-8 h-12 rounded" onChange={(e)=>{setClassId(e.target.value)}}>
              {
                classes.map((singleClass)=>{
                  // console.log(singleClass, 'title')
                  return(
                    <>
                    <option value={singleClass._id}>{singleClass.title} 


                      
                    </option>
                    </>
                  )

                })
              }
             </select>
                <input type="submit" value="Book Now" className="w-[80%] rounded-full bg-sky-900 text-white h-12 mx-8 mt-6 mb-10" />
            </form>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Booking;
