import { Fragment, useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Registration from "@/pages/Registration";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <Registration />
      {/* <Navbar /> */}
      {/* <main className="my-5"> */}
      {/*   <Registration /> */}
      {/* </main> */}
    </Fragment>
  );
}

export default App;
