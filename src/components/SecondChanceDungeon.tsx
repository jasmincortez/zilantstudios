import { Box, Typography } from "@mui/material";
import theme from "../theme";

export default function SecondChanceDungeon() {
  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h5"
        color={theme.palette.bodytext.main}
        sx={{ mb: 10 }}
      >
        Second Chance Dungeon
      </Typography>
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontSize: 20 }}
      >
        {" Welcome to Second Chance Dungeon!"}
        <br />
        {
          "A dungeon dive podcast featuring TheGoblinExplorer's The Endless Dungeon..."
        }
      </Typography>
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontSize: 20, mt: 3 }}
      >
        {
          " Second Chance Dungeon is Zilant Studio's flagship production and prequel to Zilant Theory, Using the 5E toolsets to bring their stories to life, six friends from across the globe have come together to share their fates based on the roll of the dice."
        }
      </Typography>

      {/* Youtube Video */}
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontWeight: "bold", fontSize: 20, mt: 8 }}
      >
        Trailer out now!
      </Typography>
      <p style={{ textAlign: "center" }}>
        <iframe
          style={{ maxWidth: "75%", aspectRatio: 16 / 9 }}
          src="https://www.youtube.com/embed/ABPCDHJL5X0?si=EciUYk1DGa4wqoDb"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </p>
    </Box>
  );
}
