import { LuCopyright } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="mx-5 md:mx-10 rounded-2xl bg-accent my-5 py-5 px-5 flex items-center justify-between">
      <p className="flex items-center space-x-2">
        <LuCopyright />
        <span> Talup 2024. All rights are reserved.</span>
      </p>
      <div className="flex items-center justify-between">
        <Button variant="link" className="underline">
          Terms & Conditions
        </Button>
        <Button variant="link" className="underline">
          Privacy Policy
        </Button>
      </div>
    </footer>
  );
}
