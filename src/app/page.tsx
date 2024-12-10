import Image from "next/image";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/Footer/Footer";



export default function Home() {
  return (
    <div className="bg-zinc-400">
      <Header></Header>

      <Hero></Hero>
       
      <p>
        Welcome to my portfolio! This home page is a showcase of my skills,
        projects, and experiences as a web developer, all powered by Next.js.
        Here, you'll get an insight into my journey in the tech world, from the
        innovative projects I've built to the technical expertise I've developed
        along the way. Through this portfolio, I aim to demonstrate my passion
        for creating dynamic and responsive web applications using modern
        technologies. Feel free to explore and reach out via the contact section
        if you have any questions or opportunities you'd like to discuss. 🚀
        What's next on our coding adventure?
      </p>




      

      <Footer></Footer>
    </div>
  );
}
