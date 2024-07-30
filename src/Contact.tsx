import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import theme from "./theme";
import { Box } from "@mui/material";

export default function Contact() {
  const imgsize = 40;
  return (
    <>
      <Typography
        textAlign={"center"}
        variant="h5"
        color={theme.palette.bodytext.main}
        sx={{ mt: 18 }}
      >
        CONTACT
      </Typography>

      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ mt: 10, fontSize: 20 }}
      >
        For questions and enquiries:
      </Typography>
      <Typography
        color={theme.palette.bodytext.main}
        variant="body1"
        textAlign={"center"}
        sx={{ fontWeight: "bold", fontSize: 20 }}
      >
        Talk to us!
      </Typography>
      <Stack spacing={4} alignItems="center" sx={{ mt: 5 }}>
        {/* WhatsApp button */}
        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        ></Box>
        {/* Email button */}
        <Box
          alignItems={"center"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            target="_blank"
            href=""
            component="a"
            startIcon={<AlternateEmailIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 20,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            Email
          </Button>
          {/* Instagram button */}

          <Button
            target="_blank"
            href=""
            component="a"
            startIcon={<InstagramIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 20,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            Instagram
          </Button>
          <Button
            target="_blank"
            href=""
            component="a"
            startIcon={<InstagramIcon />}
            sx={{
              color: theme.palette.secondary.main,
              fontSize: 20,
              px: 1.5,
              py: 0.5,
              mx: 1,
              textTransform: "none",
              fontWeight: "bold",
              "&:hover": { color: theme.palette.highlight.main },
            }}
          >
            TikTok
          </Button>
        </Box>
      </Stack>
    </>
  );
}
