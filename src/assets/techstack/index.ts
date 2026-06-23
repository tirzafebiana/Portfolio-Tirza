// Tech stack assets module - consolidates all tech stack icons


import CPP from './CPP.svg';
import CSS from './CSS.svg';
import FlutterLight from './Flutter-Light.svg';
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaScript from './JavaScript.svg';
import Postman from './Postman.svg';
import ReactLight from './React-Light.svg';
import TypeScript from './TypeScript.svg';

export const techStackIcons = {
  CPP,
  CSS,
  FlutterLight,
  GithubLight,
  HTML,
  JavaScript,
  Postman,
  ReactLight,
  TypeScript,
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;