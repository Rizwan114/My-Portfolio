import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between px-12 bg-black py-5">
      <h1 className="text-orange-600  text-5x1">Rizwan Portfolio</h1>

      <ul className="">
        <li className="flex gap-4 text-right text-yellow-500 underline decoration-red-200 ">
          <Link className="hover:text-yellow-600" href="/">
            Home
          </Link>

          <Link className="hover:text-yellow-600" href="information " target="_blank">
            Information
          </Link>

          <Link className="hover:text-yellow-600" href="message" target="_blank">
            Message
          </Link>

          <Link className="hover:text-yellow-600" href="service" target="_blank">
            Services
          </Link>

          <Link className="hover:text-yellow-600" href="about" target="_blank">
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
