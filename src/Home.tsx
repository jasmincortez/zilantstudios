import { Box, Button, Stack, Typography, alpha } from "@mui/material";
import theme from "./theme";
import { Margin } from "@mui/icons-material";
import { Navigate } from "react-router-dom";

export default function Home() {
  const imgsize = 40;

  return (
    <>
      <Box
        alignItems={"center"}
        sx={{
          display: "flex",
          justifyContent: "center",
          zIndex: 99,
          pt: 22,
          maxHeight: "100vh",
        }}
      >
        <img
          src="./ZS_logo_noBG.png"
          style={{
            height: "50vh",
            borderRadius: "100%",
            margin: "8px 0",
          }}
        />
      </Box>

      {/* Youtube Video */}
      <Box
        sx={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          textAlign={"center"}
          sx={{ fontSize: 20 }}
        >
          Second Chance Dungeon trailer:
        </Typography>
        <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          textAlign={"center"}
          sx={{ fontWeight: "bold", fontSize: 20 }}
        >
          Watch now!
        </Typography>
        <p style={{ textAlign: "center" }}>
          <iframe
            style={{ maxWidth: "85%", aspectRatio: 16 / 9 }}
            src="https://www.youtube.com/embed/ABPCDHJL5X0?si=EciUYk1DGa4wqoDb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </p>
      </Box>
      {/* Serie Button */}
      <Stack spacing={4} alignItems={"center"} sx={{ mb: 20 }}>
        <Button
          variant="contained"
          component="a"
          href="https://zilantstudios.com/series"
          sx={{
            color: "white",
            minWidth: 0,
            fontSize: 20,
            fontWeight: "normal",
            backgroundColor: "#3F7CAC",
          }}
        >
          more about our series
        </Button>
      </Stack>
    </>
  );
}
