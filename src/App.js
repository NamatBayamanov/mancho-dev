import { Route, Routes } from "react-router-dom";
import classes from "./App.module.scss";
import Layout from "./components/Layout/Layout";

import Mains from "./page/Mains";
import Blogs from "./page/Blogs/Blogs";
import SubBlog from "./components/Blog/SubBlog/SubBlog";


function App() {
  return (
    <div className={classes.App}>
      <Layout>
        <Routes>
        <Route path="/" element={<Mains/>}/>
          {/* <Route path="/mancho.dev" element={<Mains/>}/> */}
          <Route path="/blog" element={<Blogs/>}/>
          <Route path="/blog/:blogId" element={<SubBlog />}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
