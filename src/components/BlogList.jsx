import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs, onDelete }) => (
  <div>
    {blogs.map((blog) => (
      <div key={blog.id}>
        <h2>{blog.title}</h2>
        <p>{blog.content.slice(0, 100)}...</p>
        <Link to={`/blog/${blog.id}`}>View</Link>
        <Link to={`/edit/${blog.id}`}>Edit</Link>
        <button onClick={() => onDelete(blog.id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default BlogList;
