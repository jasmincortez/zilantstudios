import { Box, Button, alpha } from "@mui/material";

export default function Home() {
  const imgsize = 40;

  return (
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
  );
}
