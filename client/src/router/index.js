import { createRouter, createWebHashHistory } from "vue-router";
import StateList from "@/components/StateList";
import AboutSite from "@/components/AboutSite";
import StateMap from "@/components/StateMap";
import PageNotFound from "@/components/PageNotFound";
import VisitedStatesList from "@/components/VisitedStatesList";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "StateList",
      component: StateList,
    },
    {
      path: "/visited-states",
      name: "VisitedStatesList",
      component: VisitedStatesList,
    },
    {
      path: "/about",
      name: "AboutSite",
      component: AboutSite,
    },
    {
      path: "/map/:state",
      name: "StateMap",
      component: StateMap,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "PageNotFound",
      component: PageNotFound,
    },
  ],
});
