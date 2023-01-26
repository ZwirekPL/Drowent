import HeaderSections from "./HeaderSections";
import HeadFooter from "./HeadFooter";
import Nav from "./Nav";
import Footer from "./Footer";
import BlogComponent from "./BlogComponent";
import Hamburger from "./hamburger";
import Cookie from "./Cookie";
import useWindowDimensions from "./setWindowSize";

import "../style/sass/BlogSection.sass";

function BlogSection() {
  const { width } = useWindowDimensions();
  if (width > 768) {
    return (
      <div className="blogSection">
        <Cookie />
        <HeaderSections />
        <Nav />
        <main>
          <h2>Blog</h2>
          <BlogComponent />
        </main>
        <Footer />
      </div>
    );
  }
  return (
    <div className="blogSection">
      <Cookie />
      <Hamburger />
      <HeadFooter />
      <main>
        <h2>Blog</h2>
        <BlogComponent />
      </main>
      <Footer />
    </div>
  );
}

export default BlogSection;
