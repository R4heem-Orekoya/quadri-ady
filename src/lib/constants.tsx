import { Instagram, Threads, XformerlyTwitter } from "@/components/icons";
import { BriefcaseBusiness, GraduationCap, ShoppingBasket } from "lucide-react";
import behanceLogo from "../../public/behance-icon.png"

export const items = [
  { title: "Experience", icon: <GraduationCap className="w-5 h-5" strokeWidth={1.4} />, href: "#experience" },
  { title: "Projects", icon: <BriefcaseBusiness className="w-5 h-5" strokeWidth={1.4} />, href: "#projects" },
  { title: "Products", icon: <ShoppingBasket className="w-5 h-5" strokeWidth={1.4} />, href: "#products" },
]

export const socials = [
  {
    title: "Behance",
    icon: behanceLogo,
    url: process.env.NEXT_PUBLIC_BEHANCE_PROFILE_URL
  },
  {
    title: "Instagram",
    icon: <Instagram className="w-8 h-8"/>,
    url: process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE_URL
  },
  {
    title: "X (formerly twitter)",
    icon: <XformerlyTwitter className="w-8 h-8"/>,
    url: process.env.NEXT_PUBLIC_X_PROFILE_URL
  },
  {
    title: "Threads",
    icon: <Threads className="w-8 h-8"/>,
    url: process.env.NEXT_PUBLIC_THREADS_PROFILE_URL
  },
]