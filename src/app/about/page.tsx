import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";

function Page() {
  return (
    <div className="bg-zinc-400">
      <Header></Header>

      <h1 className="font-bold">About this Portfolio</h1>

      <br />

      <p>
        Next.js is a powerful React framework built by Vercel that enables
        developers to create server-side rendered and statically generated web
        applications. It offers a host of features including automatic static
        optimization, server-side rendering, dynamic routing, and support for
        API routes, all while maintaining a great developer experience. Whether
        you're building complex web applications or static websites, Next.js
        provides the performance and scalability needed to deliver fast, modern,
        and highly interactive user experiences. 🚀 What's the next piece of the
        puzzle for your project?
      </p>

      <Footer></Footer>
    </div>
  );
}

export default Page;
