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
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";

export default function BlogCard() {
  const { cardInfo } = useContext(BlogContext);
  const navigate = useNavigate();
//   const [like, setlike] = useState(false)

  console.log(cardInfo);

//   const handleLike = (id) =>{
//     console.log(id);
//     const clickedId = cardInfo.filter((item) => item.id === id)
//     console.log(clickedId);
//        if(clickedId[0].id === id) {
//         <style></style>={{
//             color:  "red"
//           }}
//        }
//   };
  
  return cardInfo.map((card, index) => {
   const { id } = card;
    return (
      <Card className="card" sx={{ width: 320, height: 450, m: 3 }} key={index}>
        <Box
          sx={{
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.main",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          onClick={() => navigate(`details/${id}`)}
        >
          <CardMedia
            component="img"
            height="190"
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
              sx={{ height: 80, overflow: "hidden" }}
              variant="body2"
              color="text.primary"
            >
              {card.content}
            </Typography>
          </CardContent>
        </Box>
        <Typography
          sx={{ textAlign: "center" }}
          variant="h6"
          color="text.secondary"
        >
          {card.email}
        </Typography>

        <CardActions disableSpacing>
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
    );
  });
}
