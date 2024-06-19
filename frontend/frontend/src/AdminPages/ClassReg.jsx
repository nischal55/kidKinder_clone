import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ClassReg() {
  const [title, setTitle] = useState("");
  const [ageOfKids, setAge] = useState("");
  const [totalSeats, setSeats] = useState("");
  const [classTime, setTime] = useState("");
  const [tutionFee, setTution] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [classImage , setClassImage] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();

      const data = new FormData();
    data.append('file',imageUrl)
    data.append('upload_preset','kidKinder')
    data.append('cloud_name','dm9bvl0lc')

    axios.post('https://api.cloudinary.com/v1_1/dm9bvl0lc/image/upload',data).then((res)=>{setClassImage(res.data.url)})

    axios.post('/api/classes',{title,desc,ageOfKids,totalSeats,classTime,tutionFee,classImage}).then((res)=>{
      e.target.elements.title.value = ""
      e.target.elements.imageUrl.value = ""
      e.target.elements.age.value = ""
      e.target.elements.seats.value = ""
      e.target.elements.time.value = ""
      e.target.elements.tution.value = ""
      e.target.elements.desc.value = ""
      console.log(res.data)
      toast.success("Success");
    
    })

    

  };



  return (
    <>
    <ToastContainer/>
      <div className=" w-[85%]  absolute top-16 md:left-[15%] left-8">
        <div className="md:w-[415px] h-[560px] w-[350px] shadow-md mx-auto mt-5">
          <h2 className="text-3xl font-handlee font-bold text-center p-6 pt-16">
            Add New Class
          </h2>
          <form className="md:mx-12 mx-4 font-Nunito" onSubmit={handleSubmit}>
            <div className="flex">
              <div>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="">Class Image:</label>
                <input type="file" className="mx-2 text-xs" required id="imageUrl" onChange={(e)=>{setImageUrl(e.target.files[0])}}/>
                <br />
              </div>
            </div>
            <br />
            <br />

            <div className="flex">
              <div>
                <label htmlFor="age">Age of Kids:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all"
                  id="age"
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Total Seats</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 mx-2 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="seats"
                  onChange={(e) => {
                    setSeats(e.target.value);
                  }}
                  required
                />
              </div>
            </div>

            <br />

            <div className="flex">
              <div>
                <label htmlFor="">Class Time</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="time"
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="">Tution Fee</label>
                <br />
                <input
                  type="text"
                  id="tution"
                  className="rounded border w-40 h-10 mx-2 focus:border-sky-600 focus:outline-none focus:transition-all "
                  onChange={(e) => {
                    setTution(e.target.value);
                  }}
                  required
                />
              </div>
            </div>
            <br />
            <label htmlFor="">Description:</label>
            <br />
            <textarea
              rows={2}
              id="desc"
              className=" w-80 rounded border"
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
            <br />
          
            <input
              type="submit"
              value="Add" 
              className="bg-sky-600 text-white text-center w-80 h-10 rounded-full"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default ClassReg;
