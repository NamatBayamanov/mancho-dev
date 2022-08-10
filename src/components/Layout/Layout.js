import classes from "./Layout.module.scss";
// import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tooltip from "../Tooltip/Tooltip";
import Drawer from "../Drawer/Drawer";
import { useEffect, useState } from "react";

function Layout({children}) {


  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  }

  

  



  return ( 
    <main>
      <Tooltip action={Toggle}/>
      <Drawer state={toggle} action={Toggle} />
      {/* <Header/> */}

      <div className={classes.content}>
        {children}
      </div>

      <Footer/>
    </main>
  );
}

export default Layout;