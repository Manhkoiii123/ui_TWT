import { MdDashboard } from "react-icons/md";
import { FaUserCog } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { BiImages } from "react-icons/bi";

export type TMenuLink = {
  id: number;
  name: string;
  link?: string;
  icon?: React.ReactNode;
  subMenu?: TMenuLink[];
};
export const menuLink = [
  {
    id: 1,
    name: "Dashboard",
    link: "/dashboard",
    icon: <MdDashboard size={20} />,
  },
  {
    id: 2,
    name: "Audience",
    link: "/audiences?website=all",
    icon: <FaUserCog size={20} />,
  },
  {
    id: 3,
    name: "Campaign",
    link: "/campaign",
    icon: <RiFilePaper2Fill size={20} />,
    subMenu: [
      {
        id: 1,
        name: "All Campaign",
        link: "/all-campaigns?type=all",
      },
      {
        id: 2,
        name: "Campaign Manager",
        link: "/campaigns-manager?type=all",
      },
    ],
  },
  {
    id: 4,
    name: "Analytics",
    link: "/analytics",
    icon: <IoAnalytics size={20} />,
    subMenu: [],
  },
  {
    id: 5,
    name: "Settings",
    link: "/settings",
    icon: <MdOutlineSettings size={20} />,
    subMenu: [
      {
        id: 1,
        name: "Audience Manager",
        link: "/audience-manager",
      },
      {
        id: 2,
        name: "Templates",
        link: "/templates",
      },
      {
        id: 3,
        name: "Email Settings",
        link: "/email-settings",
      },
      {
        id: 4,
        name: "Header & Footer",
        link: "/header-footer",
      },
    ],
  },
  {
    id: 6,
    name: "Image Library",
    link: "/image-library",
    icon: <BiImages size={20} />,
  },
];
