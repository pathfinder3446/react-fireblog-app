import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { BlogContext } from "../contexts/BlogContext";
import { AuthContext } from "../contexts/AuthContext";
import { Box } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { Button, ButtonGroup } from "@mui/material";
import { deleteBlog } from "../helpers/functions";

const Details = () => {
  const { cardInfo } = useContext(BlogContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(cardInfo);

  return cardInfo
    .filter((data) => data.id === id)
    .map((card, index) => {
      return (
        <div className="details-container" key={index}>
          <h2 className="details-header" > ──── DETAILS ────</h2>
          <Card sx={{ width: 900, height: 1000, m: 3, mb: 0}} >
            <Box
              sx={{
                textAlign: "center"
              }}
            >
              <CardMedia
                component="img"
                height="600"
                image={card.imgURL}
                alt=""
                sx={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ background: "#E7E6F5" }}>
                <Typography variant="h6" sx={{ color: "#1976d2" }}>
                  {card.title}
                </Typography>

                <Typography
                  sx={{ height: 160, overflow: "hidden" }}
                  variant="body2"
                  color="text.primary"
                >
                  {card.content}
                </Typography>
              </CardContent>
            </Box>
            <Typography
              sx={{ textAlign: "center", height: 80 }}
              variant="h6"
              color="text.secondary"
            >
              {card.email}
            </Typography>

            <CardActions 
            disableSpacing
            sx={{ height: 100 }}
            >
              <IconButton
                aria-label="add to favorites"
                //   onClick={() => handleLike(id)}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ChatBubbleOutlineIcon />
              </IconButton>
            </CardActions>
          </Card>
          {card.email === currentUser.email && (
            <ButtonGroup
            disableElevation
            variant="contained"
            size="large"
            sx={{
              display: "flex",
              justifyContent: "space-between" ,
              mt: 2,
            }}
          >
            <Button
            sx={{marginRight: "6rem", backgroundColor:"green",borderRadius:"16px"}}
            onClick={() => navigate(`/update-blog/${id}`, {state:card})}
            >UPDATE</Button>

            <Button
            sx={{marginLight: "6rem", backgroundColor:"RED", borderRadius:"16px"}}
            onClick={() => deleteBlog(card, navigate)}
            >DELETE</Button>
          </ButtonGroup>
          )}
        </div>
      );
    });
};

export default Details;
