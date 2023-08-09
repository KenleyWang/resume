const routes = [
  {
    path: "/",
    name: "aboutme",
    menuTitle: "AboutMe",
    component: () => import("../views/aboutme.vue"),
  },
  {
    path: "/skill",
    name: "skill",
    menuTitle: "Skill",
    component: () => import("../views/skill.vue"),
  },
]

export default routes
