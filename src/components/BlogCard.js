import BlogCardImg from "../image/jpg/blogCard.jpg"

import "../style/sass/BlogCard.sass";




function BlogCard(props) {
    return (
        <div className="blogCard" >
            <section class="cards-wrapper" >
                <div class="card-grid-space">
                <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{backgroundImage: `url(${BlogCardImg})`, height: props.height, width: props.width}}>
                <div >
                    <h1>Nagłówek</h1>
                    <p>Krótki opis Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, nobis!</p>
                    <div class="date">22 Paź 2022</div>
                    <div class="tags">
                        <div class="tag">Klimatyzacja</div>
                    </div>
                </div>
                </a>
                </div>
 {/* https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 */}
            </section>
        </div>
    );
}

export default BlogCard;