import { useState } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TeacherMgmt() {
    const [teacher_name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [teacherImageFile,setTeacherImageFile] = useState('');
    const [teacherImage,setTeacherImage] = useState('');
    const [contact,setContact] = useState('');
    const [twitter,setTwitter] = useState('');
    const [facebook,setFacebook] = useState('');
    const [linkedin,setLinkedin] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    
          const data = new FormData();
        data.append('file',teacherImageFile)
        data.append('upload_preset','kidKinder')
        data.append('cloud_name','dm9bvl0lc')
    
        axios.post('https://api.cloudinary.com/v1_1/dm9bvl0lc/image/upload',data).then((res)=>{setTeacherImage(res.data.url)})
    
        
        axios.post('/api/teachers',{teacher_name,email,teacherImage,contact,twitter,facebook,linkedin,subject}).then((res)=>{
        
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
            Add New Teacher
          </h2>
          <form className="md:mx-12 mx-4 font-Nunito" onSubmit={handleSubmit} >
            <div className="flex">
              <div>
                <label htmlFor="title">Name:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="teacher_name"
                  onChange={(e)=>{
                    setName(e.target.value)
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="">Profile Image:</label>
                <input
                  type="file"
                  className="mx-2 text-xs"
                  required
                  id="teacherImage"
                  onChange={(e)=>{
                    setTeacherImageFile(e.target.files[0])
                  }}
                />
                <br />
              </div>
            </div>
            <br />
         

            <div className="flex">
              <div>
                <label htmlFor="age">Contact:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all"
                  id="contact"
                  onChange={(e)=>{
                    setContact(e.target.value)
                  }}
                  required
                />
              </div>

              <div>
                <label htmlFor="">Twitter:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 mx-2 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="twitter"
                  onChange={(e)=>{
                    setTwitter(e.target.value)
                  }}
                  
                />
              </div>
            </div>

            <br />

            <div className="flex">
              <div>
                <label htmlFor="">Facebook:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="facebook"
                  onChange={(e)=>{
                    setFacebook(e.target.value)
                  }}
                 
                />
              </div>
              <div>
                <label htmlFor="">LinkedIn:</label>
                <br />
                <input
                  type="text"
                  id="linkedIn"
                  onChange={(e)=>{
                    setLinkedin(e.target.value)
                  }}
                  className="rounded border w-40 h-10 mx-2 focus:border-sky-600 focus:outline-none focus:transition-all "
                 
                />
              </div>
            </div>
            <br />
            <div className="flex">
              <div>
                <label htmlFor="">Email:</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
                  id="email"
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  required
                />
              </div>
              <div>
                <label htmlFor="">Subject:</label>
                <br />
                <input
                  type="text"
                  id="subject"
                  onChange={(e)=>{
                    setSubject(e.target.value)
                  }}
                  className="rounded border w-40 h-10 mx-2 focus:border-sky-600 focus:outline-none focus:transition-all "
                  required
                />
              </div>
            </div>
           
            <br />
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

export default TeacherMgmt;
