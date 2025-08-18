import React from "react";

const UserLogin = () => {
  return (
    <div>
      <form className="p-7">
        <h3 className="text-xl mb-2"> What's your Email ?</h3>
        <input
          type="email"
          placeholder="email@example.com"
          required
          className="bg-[#eeeeee] rounded-xl px-4 py-2 border w-full text-lg placeholder:text-base"
        />
        <h3 className="text-xl mb-2">Password</h3>
        <input
          type="password"
          placeholder="password"
          required
          className="bg-[#eeeeee] rounded-xl placeholder:text-base text-lg px-4 py-2 border w-full"
        />
        <button className="bg-black text-white placeholder:text-base text-lg px-4 py-2 border w-full mt-6 rounded-xl">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
