import mygalery from "../../images/my-galery.png";
import interior from "../../images/interior.png";
import homepage from "../../images/homepage.png";
import checkout from "../../images/checkout.png";
import recipe from "../../images/recipe.png";
import team from "../../images/team.png";
import notfound from "../../images/notfound.png";
import tracker from "../../images/tracker.png";
import buttons from "../../images/button-component.png";

const PROJECTS = [
  {
    title: "Expense Tracker",
    tags: ["react", "context"],
    description: "Web site created using React context",
    image: tracker,
    demo: "https://lorenagarcia.github.io/expense-tracker-react/",
    code: "https://github.com/LorenaGarcia/expense-tracker-react",
    hash: "#React #context"
  },
  {
    title: "Interior Consultant",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: interior,
    demo: "https://lorenagarcia.github.io/interior-consultant/",
    code: "https://github.com/LorenaGarcia/interior-consultant",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "My Gallery",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: mygalery,
    demo: "https://lorenagarcia.github.io/my-gallery/",
    code: "https://github.com/LorenaGarcia/my-gallery",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "Homepage",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: homepage,
    demo: "https://lorenagarcia.github.io/edie-homepage/",
    code: "https://github.com/LorenaGarcia/edie-homepage",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "Checkout Page",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: checkout,
    demo: "https://lorenagarcia.github.io/checkout-page/",
    code: "https://github.com/LorenaGarcia/checkout-page",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "Recipe Page",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: recipe,
    demo: "https://lorenagarcia.github.io/recipe-page/",
    code: "https://github.com/LorenaGarcia/recipe-page",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "My Team Page",
    tags: ["html", "css", "react", "styled"],
    description: "Web site created using React",
    image: team,
    demo: "https://lorenagarcia.github.io/my-team-page/",
    code: "https://github.com/LorenaGarcia/my-team-page",
    hash: "#HTML #CSS #React #styled-components"
  },
  {
    title: "404 Not Found",
    tags: ["html", "css"],
    description: "Web site created using React",
    image: notfound,
    demo: "https://lorenagarcia.github.io/404-not-found/",
    code: "https://github.com/LorenaGarcia/404-not-found",
    hash: "#HTML #CSS"
  },
  {
    title: "Input Component",
    tags: ["html", "css", "react"],
    description: "Web site created using React",
    image: "https://raw.githubusercontent.com/LorenaGarcia/input-component/master/public/imageHome.jpg",
    demo: "https://lorenagarcia.github.io/input-component/",
    code: "https://github.com/LorenaGarcia/input-component",
    hash: "#HTML #CSS #React"
  },
  {
    title: "Button Component",
    tags: ["html", "css", "react"],
    description: "Web site created using React",
    image: buttons,
    demo: "https://lorenagarcia.github.io/button-component/",
    code: "https://github.com/LorenaGarcia/button-component",
    hash: "#HTML #CSS #React"
  }
];

const TAGS = ["all", "html", "css", "react", "styled", "context"];

export { PROJECTS, TAGS };
