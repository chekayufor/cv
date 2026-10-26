import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  CapIcon,
  SparkleIcon,
  ChatIcon,
  MailIcon
} from "../components/icons";

export const navItems = [
  { label: "Home", to: "/", icon: HomeIcon, exact: true },
  { label: "About", to: "/about", icon: UserIcon },
  { label: "Experience", to: "/experience", icon: BriefcaseIcon },
  { label: "Education", to: "/education", icon: CapIcon },
  { label: "Skills", to: "/skills", icon: SparkleIcon },
  { label: "Activity", to: "/activity", icon: ChatIcon },
  { label: "Contact", to: "/contact", icon: MailIcon }
];
