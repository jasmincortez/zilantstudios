import Typography from "@mui/material/Typography";
import theme from "./theme";
import { Box } from "@mui/material";
import Grid from "./Grid";

export default function About() {
  return (
    <>
      <Typography
        textAlign={"center"}
        variant="h5"
        color={theme.palette.bodytext.main}
        sx={{ mt: 18 }}
      >
        ABOUT
      </Typography>
      <Box>
        {/* <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
        >
          The project: Second Chance Dungeon
        </Typography> */}
        <Typography
          color={theme.palette.bodytext.main}
          sx={{ my: 3, fontSize: 20, pb: 2 }}
        >
          As creators of immersive, cinematic TTRPG experiences, Zilant Studios
          features a team of dynamic voice actors from across the globe to debut
          "Second Change Dungeon," a 5E experience with a focus on high-stakes,
          story-driven adventure that pivots on the roll of the dice.
        </Typography>
      </Box>
      <Box>
        <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
        >
          The cast
        </Typography>
        <Typography
          color={theme.palette.bodytext.main}
          sx={{ my: 3, fontSize: 20, pb: 2 }}
        >
          Talk about cast if we want
        </Typography>
        <Grid />
      </Box>
    </>
  );
}
