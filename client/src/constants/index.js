import {
  dashboard,
  logout1,
  profile,
  withdraw,
  createCampaign,
} from "../assets";

export const navlinks = [
  {
    name: "dashboard",
    imgUrl: dashboard,
    link: "/",
    title: "Dashboard",
  },
  {
    name: "campaign",
    imgUrl: createCampaign,
    link: "/create-campaign",
    title: "Add Idea",
  },
  {
    name: "profile",
    imgUrl: profile,
    link: "/profile",
    title: "Idea Created",
  },
];
