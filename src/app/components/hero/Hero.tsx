import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" text-right">
      <div className="border-4 border-dashed border-red-500 bg-blue-300 shadow-2xl">
        <h1 className="text-center text-5xl text-yellow-400 ">
          Welcome to My Cool App
        </h1>

        <p className="text-center text-5xl text-yellow-400">
          The best place to learn and explore
        </p>
      </div>

      <Link
        href="https://www.bing.com/ck/a?!&&p=7c42149805ed492d0ad95cc12aab2242c9f97498ec5ac4f41a02ef16db60e604JmltdHM9MTcyOTI5NjAwMA&ptn=3&ver=2&hsh=4&fclid=379522c3-cd98-6af7-2283-36ebcc266b69&psq=baby+step+typescript&u=a1aHR0cHM6Ly9naXRodWIuY29tL3BhbmF2ZXJzZS9sZWFybi10eXBlc2NyaXB0&ntb=1"
        target="_blank"
      >
        <button className="border-4 py-1 mr-1   border-double bg-zinc-500 text-green-300 ">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Hero;
