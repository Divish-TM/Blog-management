import React, { useState, useEffect } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { Save as SaveIcon } from "@mui/icons-material";

const BlogForm = ({ initialValues = { title: "", content: "" }, handleSubmit }) => {
  const [title, setTitle] = useState(initialValues.title || "");
  const [content, setContent] = useState(initialValues.content || "");

  useEffect(() => {
    setTitle(initialValues.title || "");
    setContent(initialValues.content || "");
  }, [initialValues]);

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ title, content });
  };

  return (
    <Box
      component="form"
      onSubmit={onSubmit}
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#ffffff",
        borderRadius: 3,
        boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        textAlign="center"
        marginBottom={2}
        fontWeight="bold"
        sx={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {initialValues.title ? "Edit Blog" : "Create Blog"}
      </Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        required
        variant="outlined"
        sx={{
          "& .MuiInputLabel-root": { fontFamily: "'Poppins', sans-serif" },
          "& .MuiInputBase-root": { fontFamily: "'Poppins', sans-serif" },
        }}
      />
      <TextField
        label="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        fullWidth
        multiline
        minRows={6}
        required
        variant="outlined"
        sx={{
          "& .MuiInputLabel-root": { fontFamily: "'Poppins', sans-serif" },
          "& .MuiInputBase-root": { fontFamily: "'Poppins', sans-serif" },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        startIcon={<SaveIcon />}
        sx={{
          alignSelf: "center",
          width: "50%",
          padding: "10px",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        Save Blog
      </Button>
    </Box>
  );
};

export default BlogForm;
