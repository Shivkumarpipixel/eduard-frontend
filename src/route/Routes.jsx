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
import NotFound from "../pages/NotFound";
import SocialMediaManager from "../components/scripts/SocialMediaManager";
import BirthdayCampaign from "../components/scripts/BirthdayCampaign";
import abandonedCart from "../components/scripts/AbandonedCart";
import festivalCampaign from "../components/scripts/FestivalCampaign";
import SettingProfile from "../Layout/SettingProfile";
import Facebook from "../components/channels/Facebook";
import Instagram from "../components/channels/Instagram";
import Whatsapp from "../components/channels/WhatsApp";
import AllPlans from "../components/AllPlans";
import CurrentPlan from "../components/CurrentPlan";

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
    path: "/script/social-media",
    element: SocialMediaManager,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/script/festive-discount",
    element: festivalCampaign,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/script/birthday-greeting",
    element: BirthdayCampaign,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/script/abandoned-cart",
    element: abandonedCart,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/channel/facebook",
    element: Facebook,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/channel/instagram",
    element: Instagram,
    isPrivate: true,
    exact: true,
    isView: true,
    roles: ["all"],
  },
  {
    path: "/channel/whatsapp",
    element: Whatsapp,
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
    element: CurrentPlan,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/setting/all-plans",
    element: AllPlans,
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
    // roles: ["all"],
  },
  {
    path: "/profile/:teammateId",
    element: ProfilePage,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/profile/add-teammates",
    element: ProfilePage,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "/setting-profile",
    element: SettingProfile,
    isPrivate: true,
    exact: true,
    isView: true,
    // roles: ["all"],
  },
  {
    path: "*",
    element: NotFound,
    isPrivate: false,
    exact: false,
    viewLabel: true,
  },
];
