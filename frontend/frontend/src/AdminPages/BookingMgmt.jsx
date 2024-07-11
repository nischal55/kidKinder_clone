import axios from 'axios';
import { useEffect, useState } from 'react';

function BookingMgmt() {
    const [bookings,setBooking] = useState([]);

    useEffect(()=>{
        axios.get('/api/books').then((res)=>{setBooking(res.data)})
    },[])
console.log(bookings)
  return (
    <>
    <div className="absolute top-24 w-9/12 left-72">
    <section className="mx-auto w-full  px-4 py-4">
        <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Bookings</h2>
           
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
                        <span>Student Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Course 
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Payment_Status
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                      >
                        Email
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
                    {bookings.map((booking)=>{
                        console.log(booking.name)
                        return(
                            
                            <>
                            <tr key={booking._id}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">
                           
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {booking.name}
                              </div>
                              
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">
                            {booking.classId.title}
                          </div>
                          
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {booking.payment_status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-700">
                          {booking.email}
                        </td>
                        <td className="whitespace-nowrap px-4 py-4 text-center text-sm font-medium">
                          <a href="#" className="text-gray-700">
                            Edit
                          </a>
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

export default BookingMgmt;
