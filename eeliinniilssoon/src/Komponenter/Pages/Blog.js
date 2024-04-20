import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { useDarkMode } from "../../DarkModeContext";
import { Link } from "react-router-dom";
import "firebase/firestore";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebaseConfig.js";

// Skapa Firebase-appen med konfigurationen
const app = initializeApp(firebaseConfig);

const Blog = () => {
  const { toggleDarkMode, darkMode } = useDarkMode();
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Hämta referens till Firestore-databasen
    const db = getFirestore(app); // Använd din appreferens här

// Hämta blogginlägg från Firestore-databasen
const getBlogPosts = async () => {
    const blogPostsCollection = collection(db, "BlogPosts");
    const snapshot = await getDocs(blogPostsCollection);
    const blogPosts = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return blogPosts;
  };
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
                  <Typography
                    variant="h6"
                    component="h2"
                    gutterBottom
                  ></Typography>
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
