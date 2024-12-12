import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/Footer/Footer";


function Page() {
  return (
    <div className="bg-zinc-400">
      <Header></Header>
      <h1 className="font-bold">Services</h1>

      <br />

      <p>
        only give me paragraph To integrate API services into a Next.js project,
        create a services folder in the root directory, then add a TypeScript
        file such as apiService.ts. This file can contain functions like
        fetchData, which performs asynchronous fetch operations with error
        handling for API requests. Import and utilize these service functions in
        your components or pages to fetch data efficiently and keep your
        data-fetching logic organized and reusable across your application. This
        approach promotes clean code architecture and simplifies the management
        of API interactions. 🚀
      </p>
      <Footer></Footer>
      
    </div>

    
  );
}

export default Page;


