import classes from "./Layout.module.scss";
// import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Layout({children}) {
  return ( 
    <main>
      <Navbar/>
      {/* <Header/> */}

      <div className={classes.content}>
        {children}
      </div>

      <Footer/>
    </main>
  );
}

export default Layout;