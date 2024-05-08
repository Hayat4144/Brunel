import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import "./index.css";
import IMAGES from "./assets/images/Images";

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <figure className="w-full h-[80%]">
            <img className="w-full h-full" src={IMAGES.HomeImage} alt="image" />
          </figure>

          <div className="grid grid-rows-2 gap-10">
            <div className="crousel">
              <h2 className="text-3xl">
                Enhance fortune 50 company's insights teams research
                capibilities
              </h2>
            </div>
            <Button className="rounded-full w-fit h-14">
              Expolore more
              <FaArrowRightLong className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default App;
