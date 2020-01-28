import { createGlobalStyle } from "styled-components";
const SliderStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Just+Another+Hand');

body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Just Another Hand', cursive;
    overflow-X: hidden;
}

$big_width: 70%;            //Slider width - large display
$big_height: 40%;       //Slider height - large display
$big_nav_width: 12%;    // Previous and Next width - large display

$small_width: 100%;     //Slider width - small display
$small_height: 55%;     //Slider height - small display
$small_nav_width: 15%;// Previous and Next width - small display

$box-shadow: 0 11px 22px rgba(0, 0, 0, 0.20), 0 7px 7px rgba(0, 0, 0, 0.24);
$brown: #795548;
$blue: #2196F3;
$green: #4CAF50;
$magenta: #F44336;
$nav_color: rgba(255, 82, 82, .2);
$nav_hover_color: rgba(255, 82, 82, .8);

`;
export default SliderStyle;
