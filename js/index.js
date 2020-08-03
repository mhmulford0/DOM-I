const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// const nav = Array.from(document.querySelectorAll("nav a"));
// for (let i = 0; i < nav.length; i++) {
//   nav.innerHTML = siteContent["nav"][`nav-item-${i}`]
// }


const heading = document.querySelector("h1");
heading.innerHTML = "DOM <br/> IS <br/> AWESOME"

const headImg = document.querySelector("#cta-img");
headImg.src = siteContent["cta"]["img-src"];

const headBtn = document.querySelector(".cta-text button")
headBtn.innerHTML = "Get Started"


const mainContent = document.querySelector("main-content")

const textContentHead = document.querySelectorAll(".text-content h4");
const textContentPara = document.querySelectorAll(".text-content p");
textContentHead[0].innerHTML = siteContent["main-content"]["features-h4"];
textContentPara[0].innerHTML = siteContent["main-content"]["features-content"];


textContentHead[1].innerHTML = siteContent["main-content"]["about-h4"];
textContentPara[1].innerHTML = siteContent["main-content"]["about-content"];

const midImg = document.querySelector("#middle-img");


textContentHead[2].innerHTML = siteContent["main-content"]["services-h4"];
textContentPara[2].innerHTML = siteContent["main-content"]["services-content"];

textContentHead[3].innerHTML = siteContent["main-content"]["product-h4"];
textContentPara[3].innerHTML = siteContent["main-content"]["product-content"];

textContentHead[4].innerHTML = siteContent["main-content"]["vision-h4"];
textContentPara[4].innerHTML = siteContent["main-content"]["vision-content"];

midImg.src = siteContent["main-content"]["middle-img-src"]