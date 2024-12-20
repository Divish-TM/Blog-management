import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBlogById, updateBlog } from "../services/api";
import BlogForm from "../components/BlogForm";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetchBlogById(id).then((response) => setBlog(response.data));
  }, [id]);

  const handleUpdate = (blogData) => {
    updateBlog(id, blogData).then(() => navigate("/"));
  };

  return (
    <div>
      <h1>Edit Blog</h1>
      {blog ? (
        <BlogForm initialValues={blog} handleSubmit={handleUpdate} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditBlog;
