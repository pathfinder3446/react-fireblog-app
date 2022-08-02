import * as React from "react";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import blog from "../assets/blog.png";
import google from "../assets/google.png";
import { useState } from "react";
import { signIn, signUpGoogleProvider } from "../helpers/firebase";
import { useNavigate } from "react-router-dom";
import register from "../assets/register.jpg";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password, navigate);
    setEmail("");
    setPassword("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${register})`,
        height: "92.5vh",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          height: "620px",
          backgroundColor: "white",
          margin: "60px auto",
          borderRadius: "1rem",
          boxShadow: "3px 5px 3px 3px #090000d6",
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
              margin: "1rem 0rem",
            }}
          >
            <h3 className="line-through-register">
              <span>--REGISTER--</span>
            </h3>
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              
              id="outlined-error"
              label="Email"
              autoFocus
              type="email"
              required
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              
              sx={{ mb: "1rem" }}
            />
            <TextField
              id="outlined-error-helper-text"
              label="Password"
              type="password"
              required
              fullWidth
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{ margin: "1rem 0", backgroundColor:"#046582", fontSize:"16px", fontWeight:"bold"}}
              type="submit"
            >
              REGISTER
            </Button>
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor:"lightgray", color:"black", fontSize:"16px", fontWeight:"bold"}}
              onClick={() => signUpGoogleProvider(navigate)}
            >
            WITH  <img className="google" src={ google} alt="" />
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
