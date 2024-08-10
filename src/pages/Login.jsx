import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center">
      {/* wrapper */}
      <div className="flex gap-2 w-[80%] m-auto items-center">
        {/* form */}
        <div className="flex-[0.5]">
          <form>
            <h2 className="text-3xl mb-3 text-center font-semibold">
              Hello. Welcome To ComReport
            </h2>
            <p className="mb-8 text-center text-xl">Please Login First</p>
            <div className="flex flex-col gap-3 mb-[40px]">
              <label htmlFor="username" className="font-semibold text-lg">
                Please Enter Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="username"
                className="border border-zinc-500 p-[5px] rounded-md"
              />
            </div>
            <div className="flex items-center gap-4 mb-[40px]">
              <div className=" flex-[0.95] flex flex-col gap-3 mb-[10px]">
                <label htmlFor="password" className="font-semibold text-lg">
                  Please Enter Password
                </label>
                <input
                  type={visible ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="password"
                  className="border border-zinc-500 p-[5px] rounded-md"
                />
              </div>
              <div className="flex-[0.05">
                {visible ? (
                  <AiOutlineEyeInvisible
                    className="mt-[22px] text-3xl cursor-pointer"
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <IoEyeOutline
                    className="mt-[22px] text-3xl cursor-pointer"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className="w-[50%] m-auto">
              <button className="bg-black text-white w-full py-2 rounded-lg ">
                Sing In
              </button>
            </div>
          </form>
        </div>
        {/* image */}
        <div className="flex-[0.5]">
          <img
            src="https://images.pexels.com/photos/1275929/pexels-photo-1275929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
