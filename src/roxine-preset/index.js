/** @jsxImportSource theme-ui */
import { makeTheme } from '@theme-ui/css/utils';
import roxineFont from "./assets/roxine-font-icon/roxine-font.css";
import icoMoon from "./assets/icomoon/icomoon.min.css";
import animate from "./assets/animate.css";
import dropdown from './dropdown';
import config from './config';
import container from './container';
import section from './section';
import banner from './banner';
import icoBox from './ico-box';
import photography from './photography';
import grid from './grid';

const fonts = [
    "https://fonts.googleapis.com/css?family=Montserrat:200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i",
    "https://fonts.googleapis.com/css?family=Josefin+Sans:100,100i,300,300i,400,400i,600,600i,700,700i",
    "https://fonts.googleapis.com/css?family=Just+Another+Hand",
    "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700",
    "https://cdn.jsdelivr.net/gh/hung1001/font-awesome-pro@4cac1a6/css/all.css"
];
const icons = [roxineFont, icoMoon, animate];
fonts.forEach((font) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = font;
    document.head.appendChild(link);
});
icons.forEach((icon) => {
    const iconElm = document.createElement("link");
    iconElm.rel = "stylesheet";
    iconElm.href = icon;
    document.head.appendChild(iconElm);
});


export default makeTheme({
    ...config,
    styles: {
        ...config.styles
    },
    dropdown,
    container,
    section,
    banner,
    icoBox,
    photography,
    grid
})