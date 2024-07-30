import { Box, Button, alpha } from "@mui/material";
import theme from "./theme";

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
        src="./DG_logo.jpg"
        style={{
          height: "60vh",
          borderRadius: "100%",
          margin: "8px 0",
          boxShadow: "0px 0px 65px -17px #000000",
        }}
      />
    </Box>
  );
}
