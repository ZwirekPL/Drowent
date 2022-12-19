import HeaderSections from "./HeaderSections";
import Nav from "./Nav";
import Footer from "./Footer";
import BlogComponent from "./BlogComponent";
import Hamburger from "./hamburger";

import "../style/sass/BlogSection.sass";

function BlogSection() {
  return (
    <div className="blogSection">
      <header>
        <HeaderSections />
        <Nav />
        <Hamburger />
      </header>
      <main>
        <h2>Blog</h2>
        <BlogComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default BlogSection;
