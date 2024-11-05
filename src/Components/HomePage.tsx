import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
 
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import { Loader } from "./Loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";
import { Toaster } from "react-hot-toast";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] bg-[#112240] ${
        loading ? "flex" : ""
      } items-center overflow-hidden justify-center`}
    >
      {loading !== true ? (
        <>
          <Toaster />
          <Header />
          <About />
           
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
          <Mail />
          <Social />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
export default HomePage;