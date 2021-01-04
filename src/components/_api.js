import React from "react";

import facebookIcon from "../images/icons8-facebook-48.png";
import instgramIcon from "../images/icons8-instagram-48.png";
import linkedinIcon from "../images/icons8-linkedin-48.png";
import githubIcon from "../images/Octocat.png";
import { NetflixAnimationCard } from "./works.components/NetflixAnimationCard";
import airbnbSearchPhoto from "../images/airbnbSearch.png";
import flipCardGame from "../images/flipCardGame.png";
import cssTransitionWave from "../images/cssTransitionWave.png";
import googleMapsExample from "../images/googleMapsExample.png";
// import pensiaAngularJs from "../images/pensiaAngularJs.png";
import pensiaAngularJs from "../images/tea.jpg";
// import portfolioImg from "../images/myPhoto.png";
import portfolioImg from "../images/elena.jpeg";
import robots from "../images/robots.png";
import chat from "../images/chat.png";
import weather from "../images/weather.png";
import youtubeclone from "../images/youtubeclone.png";
import githabclone from "../images/githabclone.png";
import appointmentbook from "../images/appointmentbook.png";
import dragAndDrop from "../images/Screen Shot 2020-01-14 at 13.01.16-fullpage.png";
import test from "../images/Screen Shot 2020-01-14 at 13.20.30-fullpage.png";
import bottleWithBubble from "../images/Screen Shot 2020-01-26 at 21.19.53-fullpage.png";
import cactus from "../images/Screen Shot 2020-01-27 at 13.33.00-fullpage.png";
import sky from "../images/Screen Shot 2020-01-27 at 13.52.47-fullpage.png";
import prague from "../images/WhatsApp Image 2020-12-30 at 16.16.54.jpeg";

export const CarouselData = [
  {
    id: 14,
    component: null,
    img: test,
    name: "Test Example",
    linkOnline: "https://github.com/chekayufor/test",
    linkCode: "https://brave-banach-ec3d11.netlify.com/"
  },
  {
    id: 2,
    component: null,
    img: airbnbSearchPhoto,
    name: "Airbnb Search-component",
    linkOnline: "https://enwnf.csb.app/",
    linkCode: "https://codesandbox.io/s/airbnb-search-step-3-enwnf"
  },
  {
    id: 3,
    component: null,
    img: flipCardGame,
    name: "Flip a card - Game (JS)",
    linkOnline: "https://9hq9p.csb.app/",
    linkCode: "https://codesandbox.io/s/flippingcard-9hq9p"
  },
  {
    id: 4,
    component: null,
    img: cssTransitionWave,
    name: "Transition-Wave (CSS)",
    linkOnline: "https://2own8pjoln.csb.app/",
    linkCode: "https://codesandbox.io/s/2own8pjoln"
  },
  {
    id: 5,
    component: null,
    img: googleMapsExample,
    name: "Google-Maps (Example)",
    linkOnline: "https://b57by.csb.app/",
    linkCode: "https://codesandbox.io/s/04-google-maps--r17--start-b57by"
  },
  {
    id: 6,
    component: null,
    img: pensiaAngularJs,
    name: "Pensia - social project (AngularJs)",
    linkOnline: "https://chekayufor.github.io/pensia.dp.ua.github.io/#!/home",
    linkCode: "https://chekayufor.github.io/pensia.dp.ua.github.io/#!/home"
  },
  {
    id: 7,
    component: null,
    img: robots,
    name: "Robots-List (Fetching & Filtering & Pagination React)",
    linkOnline: "https://wn1d4.csb.app/",
    linkCode: "https://codesandbox.io/s/fetchingdatarobotslist-wn1d4"
  },
  {
    id: 8,
    component: null,
    img: chat,
    name: "Online-Chat (Socket.io)",
    linkOnline: "https://github.com/chekayufor/chat",
    linkCode: "https://online-chat.netlify.com"
  },
  {
    id: 9,
    component: null,
    img: weather,
    name: "Search Weather (API Accuweather)",
    linkOnline: "https://github.com/chekayufor/SearchWeatherAccuweather",
    linkCode: "https://searchweatheraccuweather.netlify.com/"
  },
  {
    id: 10,
    component: null,
    img: youtubeclone,
    name: " Watch Curtoons (API YouTube)",
    linkOnline: "https://github.com/chekayufor/watch-cartoons",
    linkCode: "https://watchcartoons.netlify.com"
  },
  {
    id: 11,
    component: null,
    img: dragAndDrop,
    name: "Drag & Drop (CSS)",
    linkOnline: "https://codesandbox.io/s/draganddrop-q8jc4",
    linkCode: "https://q8jc4.csb.app/"
  },

  {
    id: 12,
    component: null,
    img: cactus,
    name: "Cactus Animation (CSS)",
    linkCode: "https://jsfpg.csb.app/",
    linkOnline: "https://codesandbox.io/s/cactus-jsfpg"
  },
  {
    id: 13,
    component: null,
    img: githabclone,
    name: "Search for users (API GitHab)",
    linkOnline: "https://github.com/chekayufor/githab-searchusers",
    linkCode: "https://githab-searchusers.netlify.com"
  },
  {
    id: 15,
    component: null,
    img: bottleWithBubble,
    name: "Bottle With Bubble (CSS)",
    linkOnline: "https://kpp3m.csb.app/",
    linkCode: "https://codesandbox.io/s/bottle-with-bubble-kpp3m"
  },
  {
    id: 16,
    component: null,
    img: appointmentbook,
    name: "Contact Keeper (FullStackAplication React)",
    linkOnline: "https://github.com/chekayufor/contactkeeper",
    linkCode: "http://appointmentbook.herokuapp.com/"
  },{
    id: 1,
    component: null,
    img: prague,
    name: "Travel site",
    linkCode: "https://inprague.herokuapp.com/",
    linkOnline: "https://github.com/chekayufor/prague"
  },
  {
    id: 17,
    component: null,
    img: sky,
    name: "Sky Animation (CSS)",
    linkCode: "https://6cwqh.csb.app/",
    linkOnline: "https://codesandbox.io/s/sky-6cwqh"
  }
];
console.log({ CarouselData });

export const SosialLinksList = [
  {
    id: 1,
    name: "Facebook",
    icon: facebookIcon,
    link: "https://www.facebook.com/chekayu"
  },
  {
    id: 2,
    name: "Linkedin",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/elena-dubinsky-bb5b39122/"
  },
  {
    id: 3,
    name: "Instagram",
    icon: instgramIcon,
    link: "https://www.instagram.com/lenenok/?hl=ru"
  },
  {
    id: 3,
    name: "GitHub",
    icon: githubIcon,
    link: "https://github.com/chekayufor?tab=repositories"
  }
];
console.log({ SosialLinksList });

export const PrivateData = {
  img: portfolioImg,
  first_name: "ELENA",
  last_name: "DUBINSKY",
  specialization: "Project manager",
  email: "dubinsky.cv@gmail.com",
  tel: "+972(58)-7838377",
  country: "ISRAEL"
};
console.log({ PrivateData });

export const Description = [
'I hold a masters degree in Economics and a B.S in Civil Engineering.',
'I have 10 years expiries in project management and warehouse Logistics.',
'I have 6 years expiries as a trainer and ERP support.',
'In the past two years I entered the software development world, graduating SheCodes training and Netcraft Academy’s Full Stack development course.',
'I am a hardworking, dedicated and loyal employee, combining high self-study abilities, excellent interpersonal skills and a “can-do” attitude.' 
];

export const EducationData = [
  {
    name: "2019 Cours “Full Stack Development",
    establishment: "Netcraft Academy",
    link: "https://netcraftacademy.co.il",
    subject:
      "HTML5, SASS, Advanced JavaScript, React.js, Node.js, MongoDB, Redux.js"
  },
  {
    name: "2018 Cours “Web Development”",
    establishment: "SheCodes",
    link: "https://she-codes.org/about/",
    subject: "HTML, CSS, JavaScript, Angular.js"
  },
  {
    name: "2001-2003",
    establishment: "DIIT",
    link: "http://www.diit.edu.ua/index.php?lang=en&page=main",
    subject: "M.A in economics."
  },
  {
    name: "1998-2003",
    establishment: "DIIT",
    link: "http://www.diit.edu.ua/index.php?lang=en&page=main",
    subject: "B.S civil engineering."
  }
];
console.log({ EducationData });
