import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useDarkMode } from "../../DarkModeContext";
import { Link } from "react-router-dom";
import { fetchBlogPosts, IBlog } from "./BlogApi";

const Blog = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await fetchBlogPosts(); // Anropa fetchBlogPosts-funktionen för att hämta blogginlägg
        setBlogPosts(posts); // Uppdatera tillståndet med hämtade blogginlägg
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchData(); // Anropa funktionen för att hämta data vid montering av komponenten
  }, []);

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
      <Typography
        variant="h4"
        sx={{ color: darkMode ? "#fff" : "#000", margin: "5vh" }}
      >
        Blogg
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={6} lg={3} key={post.id}>
            <Link
              to={`/blog/${post.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card
                sx={{
                  bgcolor: darkMode ? "#333" : "#D9D9D9",
                  color: darkMode ? "#fff" : "#000",
                }}
              >
                <CardContent>
                  {post.image && (
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      <img
                        src={post.image}
                        alt="Bild"
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  )}
                  <Typography variant="h6" component="h2" gutterBottom>
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    {post.author} - {post.date}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Blog;
