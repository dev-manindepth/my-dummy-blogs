import { blogData } from "../data";
export const Blog = () => {
  return (
    <div className="blog-container">
      {blogData.map((blog) => {
        return (
          <div className="blog">
            <img src={blog.imgUrl} className="blog-img" alt="blog" />
            <p className="blog-title">{blog.blogTitle}</p>
            <p className="blog-content">{blog.blogContent}</p>
          </div>
        );
      })}
    </div>
  );
};
