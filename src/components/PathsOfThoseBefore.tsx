import { Box, Typography } from "@mui/material";
import theme from "../theme";

export default function PathsOfThoseBefore() {
  return (
    <Box>
      <Typography
        textAlign={"center"}
        variant="h5"
        color={theme.palette.bodytext.main}
        sx={{ mb: 10 }}
      >
        Paths Of Those Before
      </Typography>

      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontWeight: "bold", fontSize: 20 }}
      >
        Auditioning soon...
      </Typography>
    </Box>
  );
}
