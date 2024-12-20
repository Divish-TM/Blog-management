import React from "react";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../services/api";
import BlogForm from "../components/BlogForm";

const CreateBlog = () => {
  const navigate = useNavigate();

  const handleCreate = (blogData) => {
    createBlog(blogData).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>Create Blog</h1>
      <BlogForm handleSubmit={handleCreate} />
    </div>
  );
};

export default CreateBlog;
