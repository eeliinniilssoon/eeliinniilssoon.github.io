import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { useDarkMode } from "../../DarkModeContext";
import { fetchBlogPosts } from "./BlogApi";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";

const BlogPost = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const { postId } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const posts = await fetchBlogPosts(); // Hämta alla blogginlägg
        const post = posts.find((post) => post.id === postId); // Hitta det specifika blogginlägget baserat på postId
        setBlogPost(post);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!blogPost) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box
      sx={{
        height: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: darkMode ? "#242424" : "#fff",
        color: darkMode ? "#fff" : "#000",
        padding: "20px",
        paddingTop: "20vh",
      }}
    >
      <Paper
        sx={{
            width: "80%",
            minHeight: "60vh",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: darkMode ? "#2C2C2C" : "#D9D9D9",
            color: darkMode ? "#fff" : "#000",
            position: "relative",

        }}
      >
       <div style={{ width: "100%", position: "relative" }}>
       <CardMedia
          component="img"
          image={blogPost.image}
          alt={blogPost.title}
          sx={{
            width: "100%",
            height: "400px",
            position: "relative",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        />
           <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "80%",
            left: "40%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            color: "#fff",
            padding: "10px",
          }}
          >
            {blogPost.title}
          </Typography>
        </div>
        <Typography variant="body1">{blogPost.content}</Typography>
        <Typography variant="subtitle1">By {blogPost.author}</Typography>
        <Typography variant="subtitle2">
          Published on {blogPost.date}
        </Typography>
      </Paper>
    </Box>
  );
};

export default BlogPost;
