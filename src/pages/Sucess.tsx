import Navbar from "@/components/Navbar";
import React, { Fragment, useEffect } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Sucess() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Fragment>
      <Navbar />
      <main className="flex items-center h-[80vh] md:mx-auto md:w-1/2 justify-center">
        <div className="text-center space-y-3 px-5">
          <FaCircleCheck
            className="text-7xl text-green-700"
            style={{ display: "inline-block" }}
          />
          <p className="text-green-700 covered-by-your-grace-regular text-[36px]">
            Sucess submitted
          </p>
          <h2 className="text-4xl font-bold">Congratulations</h2>
          <p className="text-muted-foreground text-xl">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates.
          </p>
        </div>
      </main>
      <footer className="absolute bottom-5 right-[37%]">
        <p>
          <span className="text-muted-foreground">
            Redirecting you to Homepage in{" "}
          </span>
          <b>5 Seconds</b>
        </p>
      </footer>
    </Fragment>
  );
}
