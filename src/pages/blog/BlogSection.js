import HeaderSections from "../../layouts/HeaderSections";
import HeadFooter from "../../layouts/HeadFooter";
import Nav from "../../layouts/Nav";
import Footer from "../../layouts/Footer";
import BlogComponent from "./BlogComponent";
import Hamburger from "../../layouts/Hamburger";
import Cookie from "../../components/Cookie";
import useWindowDimensions from "../../utils/setWindowSize";

import "../../assets/style/sass/BlogSection.sass";

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
