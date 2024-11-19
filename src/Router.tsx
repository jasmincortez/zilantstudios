import {
  Link,
  createBrowserRouter,
  Navigate,
  useLocation,
  matchRoutes,
} from "react-router-dom";
import NotFound from "./NotFound";
import About from "./About";
import App from "./App";
import theme from "./theme";
import { Button, ListItem } from "@mui/material";
import Contact from "./Contact";
import Home from "./Home";

export interface RouteDefinition {
  label: string;
  aria: string;
  to: string;
  element: JSX.Element;
}

export const BASE_URL = "/mythbringers/";

export const routes: RouteDefinition[] = [
  {
    label: "Home",
    aria: "Navigate to home",
    to: "home",
    element: <Home />,
  },
  {
    label: "About",
    aria: "Navigate to about",
    to: "about",
    element: <About />,
  },
  {
    label: "Contact",
    aria: "Navigate to contact",
    to: "contact",
    element: <Contact />,
  },
];

export const useCurrentPath = () => {
  const location = useLocation();
  return location.pathname;
};

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" replace />,
        },
        ...routes.map((route) => {
          return {
            path: route.to,
            element: route.element,
          };
        }),
      ],
    },
  ],
  {
    basename: BASE_URL,
  }
);

export type RouterLinkProps = {
  to: string;
  label: string;
  color?: string;
};

export function RouterLink(props: RouterLinkProps) {
  return (
    <Link to={props.to}>
      <Button
        sx={{
          color: props.color || theme.palette.secondary.main,
          mx: 2,
          fontSize: 20,
          "&:hover": { color: theme.palette.highlight.main },
        }}
      >
        {props.label}
      </Button>
    </Link>
  );
}

export function ListRouterLink(props: RouterLinkProps) {
  return (
    <ListItem disablePadding sx={{ justifyContent: "center" }}>
      <Link
        to={props.to}
        style={{ width: "100%", textDecoration: "none", padding: "0 1rem" }}
      >
        <Button
          fullWidth
          sx={{
            color: theme.palette.secondary.main,
            my: 1,
            fontSize: 20,
          }}
        >
          {props.label}
        </Button>
      </Link>
    </ListItem>
  );
}
