import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Avatar, Stack, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export default function ResponsiveGrid() {
  const [isHover, setIsHover] = useState("");

  //   TODO: Center grid on mobile view
  return (
    <Box
      sx={{
        flexGrow: 1,
        textAlign: "center",
        marginBottom: 10,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {itemData.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Accordion sx={{ backgroundColor: "transparent" }} elevation={0}>
              <AccordionSummary>
                <Stack>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                    width="95%"
                    style={{ filter: " grayscale(100%)" }}
                  />
                  <Stack direction="row" justifyContent="space-between" mb={3}>
                    <Typography sx={{ color: "secondary.main" }}>
                      {item.title}
                    </Typography>

                    <Avatar
                      srcSet={`${item.avatar}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item.avatar}?w=248&fit=crop&auto=format`}
                      alt="Character Avatar"
                      sx={{ width: 96, height: 96, mt: -7.5, ml: -2 }}
                    />
                  </Stack>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={18} color="secondary" textAlign="justify">
                  {item.bio}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const itemData = [
  {
    img: "./Alcina.jpeg",
    title: "Alcina Summers",
    bio: "Playing as Medea, Alcina Summers is a voice actor, actress and a singer with a deep love for musical theatre and TTRPGs. Based in the Netherlands, she has experience in voice acting in Dutch and English. Her love for DnD and storytelling compels her to come together with like minded people to create beautiful narratives.",
    avatar: "./Medea.png",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "./Ian.jpeg",
    title: "Ian DePriest",
    bio: "Playing as Noboru, born in Singapore and raised in Kansas, Ian DePriest is a voice actor, singer-songwriter, and new TTRPG performer currently based in Nashville, Tennessee. Whether it is to escape into fantastical places, or to be grounded in the contradictions of being human, Ian seeks to bring people and their hearts together through storytelling.",
    avatar: "./Noboru.png",
  },

  {
    img: "./Jasmin.jpg",
    title: "Jasmin Cortez",
    bio: "Playing as Lady Rapture, Jasmin Cortez is a Brazilian-German actor, VO artist, director and singer-songwriter. Based both in the UK and Brazil, they have been woking in the industry for over 10 years. With a passion for fantasy worlds, TTRPGs, nature and art, Jasmin looks to combine it all to create something special that touches people's hearts.",
    avatar: "./Lady_Rapture.png",
  },
  {
    img: "./ZS_logo.png",
    title: "Matt",
    bio: "Text bio",
    avatar: "./Vrick.png",
    cols: 2,
  },
  {
    img: "./Richard.jpg",
    title: "Richard Garceau",
    bio: "Playing as Jack Biggins, born in the humid swamps of Florida, Richard journeyed long ago to the mountains of North Georgia where he has been crafting emotionally driven TTRPGs from deep within the woods of Appalachia. Classically trained in choral music in addition to performing in various productions, Richard now seeks to bring his expertise in storytelling to a wider audience while staying true to the principles of emotional authenticity, improvisation, and immersive transformation.",
    avatar: "./Jack_Biggins.png",
    cols: 2,
  },
  {
    img: "./Wit.jpg",
    title: "Wit Wrangler",
    bio: "Playing as the Game Master, South Carolina native author Wit Wrangler has been roping stories around audiences for the past 16 years. From community engagement, world building and voice acting, Wit implements improv and a theater upbringing to instill a sense of real emotion amongst TTRPG players. When he isn’t spinning epic narratives, he spends his time connecting with nature and drawing inspiration from wildlife.",
    avatar: "./Dreau.png",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
