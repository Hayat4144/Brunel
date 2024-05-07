import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="mx-5 md:mx-10">
      <nav
        className="rounded-full border flex items-center
           justify-between px-5 my-3 h-16"
      >
        <div className="logo">
          <h1>Brunel</h1>
        </div>
        <div className="space-x-2">
          <Button variant="outline" className="rounded-full h-12">
            Get Projects
          </Button>
          <Button className="rounded-full h-12 hover:bg-gray-600">
            Onboard Talent
          </Button>
        </div>
      </nav>
    </header>
  );
}
