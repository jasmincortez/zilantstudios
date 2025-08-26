import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import theme from "./theme";
import SecondChanceDungeon from "./components/SecondChanceDungeon";
import PathsOfThoseBefore from "./components/PathsOfThoseBefore";

import { useState } from "react";

type Tab = "Second Chance Dungeon" | "Paths Of Those Before";

export default function () {
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [tab, setTab] = useState<Tab>("Second Chance Dungeon");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        spacing={isDesktop ? 4 : 2}
        sx={{ justifyContent: "center", mb: 5, mt: isDesktop ? 20 : 18 }}
      >
        <Button
          variant="contained"
          onClick={() => setTab("Second Chance Dungeon")}
          sx={{
            minWidth: 0,
            fontSize: isDesktop ? 20 : 15,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Second Chance Dungeon
        </Button>
        <Button
          variant="contained"
          onClick={() => setTab("Paths Of Those Before")}
          sx={{
            minWidth: 0,
            fontSize: isDesktop ? 20 : 15,
            fontWeight: "normal",
            mb: 10,
          }}
        >
          Paths Of Those Before
        </Button>
      </Stack>

      <Typography
        color={theme.palette.bodytext.main}
        textAlign={"justify"}
        sx={{ fontSize: "1rem", mb: 5 }}
      >
        {"Find out more about Zilant Studio's series!"}
      </Typography>

      <Divider flexItem sx={{ mb: 5 }} />

      {tab === "Second Chance Dungeon" && <SecondChanceDungeon />}
      {tab === "Paths Of Those Before" && <PathsOfThoseBefore />}
    </Box>
  );
}
