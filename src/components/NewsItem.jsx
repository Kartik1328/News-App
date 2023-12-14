import image from '../assets/news.jpg'
const NewsItem = ({ title, description, src, url }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div className="card px-2 mx-4 py-2 my-3 bg-black  text-light mb-3" style={{ maxWidth: "345px" }}>
        <img src={src?src:image} style={{ height: "200px", width: "325px" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title ? title.slice(0, 50) : "Title Not Available"}</h5>
          <p className="card-text">{description ? description.slice(0, 90) : "News that you are looking for is only avilable when you want read more it in detail"}</p>
          <a href={url} className="btn btn-warning bs-warning-rgb text-black fs-8 fw-bolder"> Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
