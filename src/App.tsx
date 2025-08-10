import StickyFooter from "./StickyFooter";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import { routes, RouterLink, ListRouterLink, useCurrentPath } from "./Router";
import { Container, CssBaseline, Stack, useMediaQuery } from "@mui/material";
import theme from "./theme";

const drawerWidth = 240;

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isBig = useMediaQuery(theme.breakpoints.up("sm"));

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
      }}
    >
      <img
        src="./ZS_logo_noBG.png"
        style={{
          width: "25vw",
          marginTop: "1rem ",
          borderRadius: "100%",
        }}
      />
      <Divider />
      <List>
        {routes.map((route) => (
          <ListRouterLink to={route.to} label={route.label} key={route.label} />
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="./ZS_logo_noBG.png"
            style={{
              height: 80,
              borderRadius: "100%",
              margin: "8px 0",
            }}
          />
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {routes.map((route) => (
              <RouterLink to={route.to} label={route.label} key={route.label} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Stack sx={{ width: "100vw" }}>
        {/* <video
          // src="./Dungeon.mov"
          // src="./AniDungeon.mov"
          src="./Code.mov"
          autoPlay
          loop
          muted
          playsInline
          style={{
            marginTop: 60,
            marginBottom: 0,
            padding: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            objectFit: "cover",
            position: "fixed",
            display: useCurrentPath() === "/home" ? "block" : "none",
          }}
        /> */}
        <Container
          maxWidth="lg"
          component="main"
          sx={{ minHeight: "100dvh", zIndex: 99 }}
        >
          <Outlet />
        </Container>

        <StickyFooter />
      </Stack>
    </Box>
  );
}
