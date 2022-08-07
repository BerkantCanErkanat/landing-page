import React from "react";
import { CardGroupComponent } from "../cardgroup/CardGroup";
import { NavigationComponent } from "../navigation/Navbar";

export function Home() {
  return (
    <div>
         <NavigationComponent />
         <CardGroupComponent/>
    </div>
  );
}