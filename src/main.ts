import "./style.css";
import { HomeScreen } from "./ui/HomeScreen";

const homeScreen = new HomeScreen();

homeScreen.render();

import { getSkill } from "./content/getSkill";

console.log(getSkill("hundreds-tens-ones"));