import { Button, buttonVariants } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { IoIosClose } from "react-icons/io";

export default function Navbar() {
  const location = useLocation();
  const isRegisterPage = location.pathname === "/register";

  return (
    <header className="mx-5 md:mx-10">
      <nav
        className={cn("flex items-center justify-between px-5 my-3 h-16", {
          "border rounded-full": !isRegisterPage,
        })}
      >
        <h1>Brunel</h1>
        {isRegisterPage ? (
          <Link
            to={"/"}
            className={cn(
              buttonVariants({ variant: "outline", size: "icon" }),
              "rounded-full",
            )}
          >
            <IoIosClose size={30} fontWeight={300} />
          </Link>
        ) : (
          <div className="space-x-2">
            <Link
              to={"/register"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "rounded-full h-12",
              )}
            >
              Get Projects
            </Link>

            <Button className="rounded-full h-12 hover:bg-gray-600">
              Onboard Talent
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
