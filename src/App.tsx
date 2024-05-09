import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import "./index.css";
import IMAGES from "./assets/images/Images";
import AskQuestion from "./components/AskQuestion";
import Footer from "./components/Footer";
import HomeCrousel from "./components/HomeCrousel";

function App() {
  return (
    <Fragment>
      <Navbar />
      <main className="my-5 mx-5 md:mx-10">
        <section className="md:mx-auto md:w-1/2 my-5">
          <div className="text-center">
            <p className="text-green-700 covered-by-your-grace-regular text-[36px]">
              Success stories
            </p>
            <h1 className="text-5xl">Every sucess journey we've encountered</h1>
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-16">
          <figure className="w-full h-[75%]">
            <img className="w-full h-full" src={IMAGES.HomeImage} alt="image" />
          </figure>

          <div className="grid grid-rows-2 gap-10">
            <HomeCrousel />
            <Button className="rounded-full w-fit h-14">
              Expolore more
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
      <AskQuestion />
      <Footer />
    </Fragment>
  );
}

export default App;
