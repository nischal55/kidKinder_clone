import AdminNav from "../Components/AdminNav";
function AdminDash() {
  return (
    <>
      <AdminNav />
      <div className=" w-[85%]  absolute top-16 md:left-[15%] left-0">
        <div className="md:w-[415px] h-[560px] w-[350px] shadow-md mx-auto mt-6">
          <h2 className="text-3xl font-handlee font-bold text-center p-6 pt-16">
           Add New Class
          </h2>
          <form className="md:mx-12 mx-4">
            <label htmlFor="username">Title:</label>
            <br />
            <input
              type="text"
              className="rounded border w-80 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
              required
            />
            <br />
            <br />

            <div className="flex">
              <div>
                <label htmlFor="password">Age of Kids:</label>
                <br />
                <input
                  type="password"
                  className="rounded border w-40 h-10 focus:border-sky-600 focus:outline-none focus:transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="">Total Seats</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 mx-2 h-10 focus:border-sky-600 focus:outline-none focus:transition-all "
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
                  required
                />
              </div>
              <div>
                <label htmlFor="">Tution Fee</label>
                <br />
                <input
                  type="text"
                  className="rounded border w-40 h-10 mx-2 focus:border-sky-600 focus:outline-none focus:transition-all "
                  required
                />
              </div>
            </div>
            <br />
            <label htmlFor="">Description:</label><br />
            <textarea rows={2} cols={42} className="rounded border"></textarea><br /><br />
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

export default AdminDash;
