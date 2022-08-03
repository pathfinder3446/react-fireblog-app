import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blog from "../assets/blog.png";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {updateCardData} from "../helpers/functions"
// import { toastSuccessNotify } from "../helpers/toastNotify";

export default function UpdateBlog() {
  const { id } = useParams();
  const { state } = useLocation();
  const [updateTitle, setUpdateTitle] = useState(state.title);
  const [updateImageURL, setUpdateImageURL] = useState(state.imgURL);
  const [updateContent, setUpdateContent] = useState(state.content);

  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCardData(updateTitle, updateImageURL, updateContent, currentUser.email, id);
    navigate("/");
    // toastSuccessNotify("Card created successfully");
  };
  
  console.log(updateImageURL);
  console.log(updateTitle);

  return (
    <Container
      maxWidth="xs"
      sx={{
        backgroundColor: "light",
        margin: " auto",
        borderRadius: "1rem",
        padding: "2rem",
      }}
    >
      <Box>
        <Typography
          variant="p"
          component="div"
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="#">
            <img
              src={blog}
              alt=""
              style={{
                height: "8rem",
                padding: "2rem",
                borderRadius: "50%",
                background: "#046582",
              }}
            />
          </a>
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#1976d2",
            margin: "1rem 0rem",
          }}
        >
          <h3 className="line-through-register">
            <span>UPDATE BLOG</span>
          </h3>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            id="outlined-error"
            autoFocus
            required
            fullWidth
            onChange={(e) => setUpdateTitle(e.target.value)}
            value={updateTitle}
            sx={{ mb: "1rem" }}
            label="Title"
          />
          <TextField
            id="outlined-error-helper-text"
            required
            fullWidth
            onChange={(e) => setUpdateImageURL(e.target.value)}
            value={updateImageURL}
            label="Image URL"
          />
          <TextField
            id="outlined-multiline-static"
            label="Content"
            multiline
            rows={10}
            fullWidth
            required
            sx={{ mt: 2 }}
            onChange={(e) => setUpdateContent(e.target.value)}
            value={updateContent}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ margin: "1rem 0", backgroundColor: "#046582" }}
            type="submit"
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
