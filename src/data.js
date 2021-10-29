import Chat from "./assets/chat.png";
import Dynasty from "./assets/dynasty.png";
import Team from "./assets/team.png";
import Btkd from "./assets/btkd.png";
import AWS from "./assets/icons/aws.png";
import CSS from "./assets/icons/css.png";
import Figma from "./assets/icons/figma.png";
import Firebase from "./assets/icons/firebase.png";
import Gatsby from "./assets/icons/gatsby.png";
import Git from "./assets/icons/git.png";
import Graphql from "./assets/icons/graphql.png";
import Html5 from "./assets/icons/html5.png";
import Javascript from "./assets/icons/javascript.png";
import Mongodb from "./assets/icons/mongodb.png";
import Node from "./assets/icons/node.png";
import Photoshop from "./assets/icons/photoshop.png";
import React from "./assets/icons/react.png";
import Redux from "./assets/icons/redux.png";
import Sass from "./assets/icons/sass.png";
import Stripe from "./assets/icons/stripe.png";
import W3C from "./assets/icons/w3c.png";
import Webflow from "./assets/icons/webflow.png";

export const projects = [
  {
    title: "Dynasty Clothing",
    tags: [
      "React",
      "Redux",
      "Redux-Saga",
      "Javascript",
      "Sass",
      "CSS",
      "Firebase",
      "Heroku",
      "Stripe",
    ],
    links: [
      {
        live: "https://dynasty-clothing.herokuapp.com/",
        github: "https://github.com/saashapina/dynasty-clothing",
      },
    ],
    description:
      "Full website build for a concept e-commerce online clothing store. The website is built with React, Redux & JavaScript on the front-end and uses Firebase for authentication and a cloud database. Stripe integration is used to handle user payments.",
    image: Dynasty,
  },
  {
    title: "Team App",
    tags: ["Webflow", "Memberstack", "Zapier", "Figma", "Photoshop"],
    links: [
      {
        live: "https://team-app-concept-page.webflow.io/",
      },
    ],
    description:
      "Full website designed in Figma and developed in Webflow for a concept team collaboration platform app. This website utilizes Memberstack and Zapier to integrate membership authentication into the app. It uses Webflow's powerful CMS to create dynamic blog posts and pages.",
    image: Team,
  },
  {
    title: "Chat App",
    tags: ["Webflow", "Figma", "Photoshop"],
    links: [
      {
        live: "https://chat-app-concept.webflow.io/",
      },
    ],
    description:
      "This is a homepage designed in Figma and built in Webflow as a concept project for a chat application. The page was built into responsive web application using Webflow.",
    image: Chat,
  },
  {
    title: "Boston Tae Kwon Do",
    tags: ["React", "GatsbyJS", "JavaScript", "Sass", "CSS"],
    links: [
      {
        live: "http://www.bostontaekwondoacademy.net/",
        github: "https://github.com/saashapina/btkd",
      },
    ],
    description:
      "Local martial arts school website built with React and the fastest static-site generation framework: GatsbyJS. Designed and fully responsive site on all devices.",
    image: Btkd,
  },
];

export const skillIcons = [
  {
    title: "React",
    icon: React,
  },
  {
    title: "Redux",
    icon: Redux,
  },
  {
    title: "JavaScript",
    icon: Javascript,
  },
  {
    title: "HTML5",
    icon: Html5,
  },
  {
    title: "CSS3",
    icon: CSS,
  },
  {
    title: "Sass",
    icon: Sass,
  },
  {
    title: "AWS",
    icon: AWS,
  },
  {
    title: "Firebase",
    icon: Firebase,
  },
  {
    title: "MongoDB",
    icon: Mongodb,
  },
  {
    title: "NodeJS",
    icon: Node,
  },
  {
    title: "Gatsby",
    icon: Gatsby,
  },
  {
    title: "GraphQL",
    icon: Graphql,
  },
  {
    title: "Git",
    icon: Git,
  },
  {
    title: "Stripe",
    icon: Stripe,
  },
  {
    title: "W3C - Web Accessibility",
    icon: W3C,
  },
  {
    title: "Webflow",
    icon: Webflow,
  },
  {
    title: "Figma",
    icon: Figma,
  },
  {
    title: "Photoshop",
    icon: Photoshop,
  },
];
