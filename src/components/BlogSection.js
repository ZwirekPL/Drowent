import HeaderSections from "./HeaderSections";
import Nav from  "./Nav";
import Footer from "./Footer";
import BlogComponent from "./BlogComponent";


import "../style/sass/BlogSection.sass";




function BlogSection() {
    return (
        <div className="blogSection">
            <header>
                <HeaderSections/>
                <Nav/>
            </header>
            <main>
                <BlogComponent/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    );
}

export default BlogSection;