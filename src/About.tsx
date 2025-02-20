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
        <Typography
          color={theme.palette.bodytext.main}
          variant="body1"
          sx={{ mt: 3, pt: 2, fontWeight: "bold" }}
        >
          The project: Second Chance Dungeon
        </Typography>
        <Typography
          color={theme.palette.bodytext.main}
          sx={{ my: 3, fontSize: 20, pb: 2 }}
        >
          A high stakes dungeon dive for those who have met their demise; watch
          as they strive for the chance to survive.
          <Typography
            color={theme.palette.bodytext.main}
            sx={{ my: 3, fontSize: 20 }}
          >
            Setting: The creator of this seemingly endless dungeon has stopped
            select individuals at the moment of their death, offering them a
            second chance to see if they have what it takes to make it to the
            final floor and win back their lives through any means necessary.
          </Typography>
          Plot: The players are humans from Earth who have, in their most recent
          memories, died, but are given the chance to make one unique avatar to
          continue living on inside Death Game in a desperate attempt to return
          to living with their circumstances altered. In order to do that, they
          must reach the final floor of a dungeon which seems to never end but
          grows increasingly difficult.
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
