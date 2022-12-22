import "../style/sass/BlogCard.sass";

function BlogCard({ post: { title, description, imgUrl, date, tag }, index }) {
  return (
    <div className="blogCard">
      <section class="cards-wrapper">
        <div class="card-grid-space">
          <div
            class="card"
            id={index}
            style={{
              backgroundImage: `url(${imgUrl})`,
            }}
          >
            <div>
              <h1 className="title">{title}</h1>
              <p className="description">{description}</p>
              <div class="date">{date}</div>
              <div class="tags">
                <div class="tag">{tag}</div>
              </div>
            </div>
          </div>
        </div>
        {/* https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 */}
      </section>
    </div>
  );
}

export default BlogCard;
