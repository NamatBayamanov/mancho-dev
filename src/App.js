import classes from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={classes.App}>
      <Navbar/>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
