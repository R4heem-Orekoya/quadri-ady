import { Instagram, Threads, XformerlyTwitter } from "@/components/icons";
import { BriefcaseBusiness, GraduationCap, ShoppingBasket } from "lucide-react";

export const items = [
  { title: "Experience", icon: <GraduationCap className="w-5 h-5" strokeWidth={1.4} />, href: "#experience" },
  { title: "Projects", icon: <BriefcaseBusiness className="w-5 h-5" strokeWidth={1.4} />, href: "#projects" },
  { title: "Products", icon: <ShoppingBasket className="w-5 h-5" strokeWidth={1.4} />, href: "#products" },
]

export const socials = [
  {
    title: "Behance",
    icon: "./behance-icon.png",
    url: "https://www.behance.net/adeniyiady94dc"
  },
  {
    title: "Instagram",
    icon: <Instagram className="w-8 h-8"/>,
    url: "https://instagram.com/quadriaden"
  },
  {
    title: "X",
    icon: <XformerlyTwitter className="w-8 h-8"/>,
    url: "https://x.com/QuadriAden"
  },
  {
    title: "Threads",
    icon: <Threads className="w-8 h-8"/>,
    url: "https://www.threads.net/@quadriaden"
  },
]