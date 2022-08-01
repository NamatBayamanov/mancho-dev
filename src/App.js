import { Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";

import Mains from "./page/Mains";
import Blogs from "./page/Blogs/Blogs";
import SubBlog from "./components/Blog/SubBlog/SubBlog";
import Hub from "./page/Hub/Hub";
import SubHub from "./components/Hubs/SubHub/SubHub";
import Vacancies from "./components/Main/JoinUs/Vacancies/Vacancies";


function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
        <Route path="/" element={<Mains/>}/>
          {/* <Route path="/mancho.dev" element={<Mains/>}/> */}
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/blog/:blogId" element={<SubBlog />}/>
          <Route path="/hub" element={<Hub/>}/>
          <Route path="/hub/:hubId" element={<SubHub/>}/>

          <Route path="/join-us" element={<Vacancies/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
