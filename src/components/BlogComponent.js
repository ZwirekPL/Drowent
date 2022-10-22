import BlogCard from "./BlogCard";

import "../style/sass/BlogComponent.sass";



function BlogComponent() {
    return (
        <div className="blogComponent">
            <BlogCard gridArea={"1 / 1 / 2 / 2"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"1 / 2 / 2 / 3"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"1 / 3 / 2 / 4"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"1 / 4 / 2 / 5"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"1 / 5 / 2 / 6"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"2 / 1 / 3 / 2"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"2 / 2 / 3 / 3"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"1 / 5 / 2 / 6"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"2 / 1 / 3 / 2"} height={"48vh"} width={"16vw"}/>
            <BlogCard gridArea={"2 / 2 / 3 / 3"} height={"48vh"} width={"16vw"}/>
        </div>
    );
}

export default BlogComponent;