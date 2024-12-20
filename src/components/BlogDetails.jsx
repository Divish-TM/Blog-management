import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";

const BlogCard = ({ blog, onEdit, onDelete }) => {
  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "20px auto",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }}
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginTop: 1, fontFamily: "'Poppins', sans-serif" }}
        >
          {blog.content.substring(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          startIcon={<EditIcon />}
          onClick={() => onEdit(blog.id)}
          sx={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="secondary"
          startIcon={<DeleteIcon />}
          onClick={() => onDelete(blog.id)}
          sx={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
