import Navbar from "@/components/Navbar";
import RegistrationForm from "@/components/forms/Registration";
import React, { Fragment } from "react";

export default function Registration() {
  return (
    <Fragment>
      <Navbar />
      <main className="mx-auto w-1/3 my-16">
        <div className="my-5 text-center">
          <p className="text-green-700 covered-by-your-grace-regular text-[36px]">
            Registration form
          </p>
          <h1 className="text-5xl font-bold ">
            Start your sucess Journey here!
          </h1>
        </div>
        <RegistrationForm />
      </main>
    </Fragment>
  );
}
