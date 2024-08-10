const Blogs = () => {
  let isAdmin = false;
  return (
    <div>
      {/* wrapper */}
      <div className="px-[4em] pt-[2em]">
        {/* topbar */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-bold text-xl cursor-pointer">COMREPORT</h2>
          </div>
          <div className="flex gap-[40px] items-center">
            <img
              src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="h-[50px] w-[50px] rounded-full object-cover cursor-pointer"
            />
            <div className="">
              {isAdmin ? (
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Add New
                </button>
              ) : (
                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  Report
                </button>
              )}
            </div>
          </div>
        </div>
        {/* blogs */}
        <div></div>
      </div>
    </div>
  );
};

export default Blogs;
