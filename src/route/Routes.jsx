import { lazy } from "react";
import Home from "../pages/Home";
import Login from "../pages/Login";
import LiveChat from "../pages/LiveChat";
import Script from "../pages/Script";
import Analytics from "../pages/Analytics";
import LostLeads from "../pages/LostLeads";
import ConnectChannels from "../pages/ConnectChannels";
import Setting from "../pages/Setting";
import Register from "../pages/Register";
import EmailPassword from "../pages/submenu/EmailPassword";
import Billing from "../pages/Billing";
import ProfilePage from "../pages/ProfilePage";

export const routes = [
  {
    path: "/",
    element: Home,
    isPrivate: true,
    exact: true,
    viewLabel: true,
    isView: true,
    // roles:['admin','owner','member']
  },
  {
    path: "/register",
    element: Register,
    isPrivate: false,
    exact: true,
    viewLabel: true,
    isView: true,
    // roles:['admin','owner','member']
  },
  {
    path: "/login",
    element: Login,
    isPrivate: false,
    exact: true,
    viewLabel: true,
    isView: true,
    // roles:['admin','owner','member']
  },
  {
    path: "/register",
    element: Login,
    isPrivate: false,
    exact: true,
    viewLabel: true,
    isView: true,
    // roles:['admin','owner','member']
  },
  {
    path: "/script",
    element: Script,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/live-chat",
    element: LiveChat,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/analytics",
    element: Analytics,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/lost-leads",
    element: LostLeads,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/connect-channels",
    element: ConnectChannels,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/setting",
    element: Setting,
    isPrivate: true,
    exact: true,
    isView: true,
    // children: [
    //   {
    //     path: "add-teamates",
    //     element: AddTeamates, // The component to render for this submenu
    //     isPrivate: true,
    //     exact: true,
    //     isView: true,
    //   },
    //   {
    //     path: "email-password",
    //     element: EmailPassword, // The component to render for this submenu
    //     isPrivate: true,
    //     exact: true,
    //     isView: true,
    //   },
    //   {
    //     path: "plan-billing",
    //     element: PlanBilling, // The component to render for this submenu
    //     isPrivate: true,
    //     exact: true,
    //     isView: true,
    //   },
    // ],
    // roles: ["all"],
  },
  // submenu routes
  {
    path: "/setting/email-password",
    element: EmailPassword,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/setting/plan-billing",
    element: Billing,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/setting/add-teammates",
    element: ProfilePage,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
];
