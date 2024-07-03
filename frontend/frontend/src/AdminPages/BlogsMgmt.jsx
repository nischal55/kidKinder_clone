import { useState, useRef } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";
import { Link } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogsMgmt() {
    const editor = useRef(null);
    const [title, setTitle] = useState("");
    const [BlogDesc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const[image_url,setImageUrl] = useState("");

    let token = localStorage.getItem('access_token');
  
    function handleSubmit(e) {
      e.preventDefault();
      const data = new FormData();
      data.append('file',image)
      data.append('upload_preset','kidKinder')
      data.append('cloud_name','dm9bvl0lc')
  
      axios.post('https://api.cloudinary.com/v1_1/dm9bvl0lc/image/upload',data).then((res)=>{setImageUrl(res.data.url)})
      axios.post("/api/blogs", {title,BlogDesc,image_url}, { headers: {Authorization:token} }).then((res)=>{
        console.log(res.data)
        toast.success("Blog Added");
      });
    }
  
    return (
      <>
        <div className=" mx-[10px] lg:mx-[290px] absolute top-24 h-[540px] overflow-scroll">
          <form
            className=" md:w-[800px]  p-4  text-gray-500"
            onSubmit={handleSubmit}
          >
            <div className="bg-white shadow-md p-10">
              <h3 className="text-2xl font-Nunito font-bold text-center">
                Blog Details
              </h3>
              <br />
              <div>
                <label htmlFor="">Blog Title:</label>
                <br />
                <input
                  type="text"
                  className="border h-10 w-full"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  required
                />
              </div>
              <br />
  
        
              <div className="">
                <label htmlFor="">Blog Description</label>
                <JoditEditor
                  ref={editor}
                  value={BlogDesc}
                  tabIndex={1}
                  onBlur={(newContent) => setDesc(newContent)}
                  onChange={(newContent) => setDesc(newContent)}
                />
              </div>
              <br />
  
              <div className="">
                <label htmlFor="">Blog Image:</label>
                <br />
                <input
                  type="file"
                  className=" h-10"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  required
                />
              </div>
              <br />
  
              <input
                type="submit"
                value="Save"
                className="w-full bg-blue-800 text-center text-white p-3 cursor-pointer rounded-md"
              />
              <br />
              <div className="m-4 flex justify-end pe-10 w-full text-blue-500 underline underline-offset-2 hover:text-blue-950 hover:transition-all" >
                <Link className="">
                  {`>>`}View All Blogs
                </Link>
              </div>
            </div>
          </form>
        </div>
      </>
    );
}

export default BlogsMgmt;