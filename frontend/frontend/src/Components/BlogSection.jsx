import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/api/blogs").then((res) => {
      setBlogs(res.data);
    });
  }, []);
  return (
    <>
     <div className="flex justify-center">
          <div className="flex">
            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
            <p className="font-Nunito text-cyan-500 text-lg">Our Blogs</p>

            <div className="w-12 h-0.5 bg-cyan-500 mt-3 mx-2"></div>
          </div>
        </div>
        <h2 className="text-center font-[handlee] text-sky-900 text-4xl font-bold p-6">
          Recent Blogs
        </h2>
      
      <div className="container flex flex-wrap justify-center gap-4">
        
        {blogs.map((blog) => {
          return (
            <>
              <div className="w-80 border rounded cursor-pointer h-fit">
                <div>
                    <img src={blog.image_url} className="w-80 h-56" alt="" />
                </div>
                <div className="">
                    <p className="text-xl font-handlee font-bold text-indigo-900 text-center  p-4">{blog.title}</p>
                    <div className="mb-8">

                    <Link className="bg-sky-600 text-white py-2 px-4 mx-24 rounded-full">Read More</Link>
                    </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default BlogSection;
