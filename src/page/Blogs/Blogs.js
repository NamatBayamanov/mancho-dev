import Blog from "../../components/Blog/Blog";
import { getProducts } from "../../data/blog";

function Blogs() {
  return ( 
    <div>
      <Blog informs={getProducts()} />
    </div>
  );
}

export default Blogs;