import Home from "./../pages/Home";
import Workers from "./../pages/Workers";

const router = {
  home: {
    path: "/",
    component: Home,
  },

  workers: {
    path: "/workers",
    component: Workers,
  },
};

export default router;
