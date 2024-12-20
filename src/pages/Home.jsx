import React, { useEffect, useState } from "react";
import { fetchBlogs, deleteBlog } from "../services/api";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs().then((response) => setBlogs(response.data));
  }, []);

  const handleDelete = (id) => {
    deleteBlog(id).then(() => {
      setBlogs(blogs.filter((blog) => blog.id !== id));
    });
  };

  return <BlogList blogs={blogs} onDelete={handleDelete} />;
};

export default Home;
