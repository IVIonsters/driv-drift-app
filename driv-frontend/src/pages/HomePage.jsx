import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

import Navbar from "@/components/NavBar";

function HomePage() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default HomePage;
