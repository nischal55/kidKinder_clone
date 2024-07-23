import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';

function ViewBlogs() {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        axios.get('/api/blogs').then((res)=>{setBlogs(res.data)})
    },[])
    let count =0;
    return (
        <>
         <div className="absolute top-24 w-9/12 left-72">
    <section className="mx-auto w-full  px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Blogs</h2>
           
          </div>
          <div>
            <Link
              type="button"
              to={`/Dashboard/blogAdd`}
              className="rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Blogs
            </Link>
          </div>
        
        </div>
        <div className="mt-6 flex flex-col h-[60vh]">
          <div className="-mx-4 -my-2 overflow-x-auto  sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                    <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>S.N.</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Image</span>
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        <span>Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Blog Description 
                      </th>

                    
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Actions
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {blogs.map((blog)=>{
                        count=count+1;
                        return(
                            
                            <>
                            <tr key={blog._id}>
                            <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {count}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                <img src={blog.image_url} />
                                
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {blog.title}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 h-16 text-ellipsis overflow-hidden" dangerouslySetInnerHTML={{__html:blog.BlogDesc}}>
                                
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 flex">
                              <FaRegEdit className='text-blue-800 text-xl'/>
                              <MdOutlineDeleteOutline className='text-red-500 text-xl'/>
                              </div>
                              
                            </div>
                          </div>
                        </td>
                      </tr>
                            </>
                        )
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

export default ViewBlogs;