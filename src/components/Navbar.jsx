import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const IMDb_LOGO =
  "https://1000marche.net/wp-content/uploads/2021/08/Imdb-logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary h-14 flex justify-around items-center">
      <img
        className="mix-blend-lighten h-6 md:h-8"
        src={IMDb_LOGO}
        alt="logo"
      />

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search IMDb"
          className="pl-2 w-[40vw] rounded border-[3px] border-yellow-400 placeholder-gray-700 outline-none focus:border-yellow-600 "
        />
        <button
          type="submit"
          className="bg-yellow-400 p-1 font-semibold rounded hover:bg-yellow-500 "
        >
          Search
        </button>
      </div>
      <div>
        <ul className="text-white flex items-center gap-6">
          <button className="bg-stone-700 p-1 rounded">
            <BsFillSunFill className="text-secondary" size={24} />
          </button>
          <li>
            <Link to="/auth/login">Login</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
