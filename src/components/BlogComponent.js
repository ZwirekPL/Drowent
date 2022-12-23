import React, { useState } from "react";
import BlogCard from "./BlogCard";
import BlogModal from "./blogModal";

import "../style/sass/BlogComponent.sass";

function BlogComponent() {
  const [idOpen, setIdOpen] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpacity, setModalOpacity] = useState(false);
  const blogPosts = [
    {
      title: "JAVASCRIPT",
      description: `JavaScript is the world most popular
          lightweight, interpreted compiled programming
          language. It is also known as scripting
          language for web pages.`,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Nishant Singh ",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "Data Structure ",
      description: `There are many real-life examples of
          a stack. Consider an example of plates stacked
          over one another in the canteen.`,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Suresh Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "Algorithm",
      description: `The word Algorithm means “a process
          or set of rules to be followed in calculations
          or other problem-solving operations”.`,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Monu Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "Computer Network",
      description: `An interconnection of multiple devices,
          also known as hosts, that are connected using
          multiple paths for the purpose of sending/
          receiving data media. Computer networks can
          also include multiple devices/mediums which
          help in the communication between two different
          devices; these are known as Network devices
          and include things such as routers, switches,
          hubs, and bridges. `,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Sonu Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
    {
      title: "JAVASCRIPT",
      description: `JavaScript is the world most popular
        lightweight, interpreted compiled programming
        language. s`,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Nishant Singh ",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
    },
    {
      title: "Data Structure ",
      description: `There are many real-life examples of
        a stack. Consider an example of plates stacked
        over one another in the canteen..`,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Suresh Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
    },
    {
      title: "Algorithm",
      description: `The word Algorithm means “a process
        or set of rules to be followed in calculations
        or other problem-solving operations”.  `,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Monu Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
    },
    {
      title: "Computer Network",
      description: `An interconnection of multiple devices,
        also known as hosts, that are connected using
        multiple paths for the purpose of sending/
        receiving data media. . `,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quia consectetur accusantium enim nostrum deleniti odit explicabo iusto tempore, numquam aperiam dolorum molestiae, obcaecati vitae ipsam alias facilis nisi blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam exercitationem provident qui reiciendis, optio minus sed quod? Tempora, temporibus? Veritatis aliquam deserunt porro necessitatibus provident dolores earum asperiores recusandae!",
      date: "Sonu Kr",
      tag: "Klimatyzacja",
      imgUrl:
        "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
    },
  ];
  const number = blogPosts[idOpen];
  const handleClick = (event, index) => {
    console.log(index);
    setIdOpen(index);
    console.log(number);
    setModalOpen(!modalOpen);
    setTimeout(() => {
      setModalOpacity(!modalOpacity);
    }, 1000);
  };

  const handleClose = () => {
    setModalOpen(!modalOpen);
    setModalOpacity(!modalOpacity);
  };
  return (
    <div className="blogComponent">
      <div className="blogCardComponent">
        {blogPosts.map((post, index) => (
          <div key={index} onClick={(event) => handleClick(event, index)}>
            <BlogCard key={index} index={index} post={post} />
          </div>
        ))}
      </div>
      <div
        className="modal"
        style={{
          display: modalOpen ? "flex" : "none",
          opacity: modalOpacity ? "1" : "0",
        }}
      >
        <BlogModal {...number} />
        <div className="modal__closeBtn" onClick={handleClose}>
          <i className="icon-cancel"></i>
        </div>
      </div>
    </div>
  );
}

export default BlogComponent;
