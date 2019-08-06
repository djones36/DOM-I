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
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Nav
const navBar = document.querySelectorAll('nav a')
navBar[0].textContent = siteContent['nav']['nav-item-1']
navBar[1].textContent = siteContent['nav']['nav-item-2']
navBar[2].textContent = siteContent['nav']['nav-item-3']
navBar[3].textContent = siteContent['nav']['nav-item-4']
navBar[4].textContent = siteContent['nav']['nav-item-5']
navBar[5].textContent = siteContent['nav']['nav-item-6']

navBar.forEach(color => color.style.color = 'green')

let globalNav = document.querySelector('nav')

let home = document.createElement('a')
home.textContent = "Home"
home.style.color = 'green'

let returns = document.createElement('a')
returns.textContent = "Returns"
returns.style.color = 'green'

globalNav.prepend(home)
globalNav.appendChild(returns)


//CTA

// let ctaH1 = document.querySelector('.cta-text h1')
// ctaH1.textContent=siteContent["cta"]["h1"];

let ctaH1 = document.querySelectorAll(".cta .cta-text h1");
ctaH1[0].textContent = siteContent["cta"]["h1"];
ctaH1[0].innerText = siteContent.cta.h1.split(' ').join('\n')


let ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent= siteContent["cta"]["button"]

let ctaImg = document.querySelector('#cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

//Main Content
let topContenth4 = document.querySelectorAll('.top-content h4')
topContenth4[0].textContent = siteContent["main-content"]["features-h4"]
topContenth4[1].textContent = siteContent["main-content"]["about-h4"]

//Stretch increased font size to 70px for the h4.
topContenth4.forEach(fontSizing => fontSizing.style.fontSize = "70px")

let topContentp = document.querySelectorAll('.top-content p')
topContentp[0].textContent = siteContent["main-content"]["features-content"]
topContentp[1].textContent = siteContent["main-content"]["about-content"]

//Stretch added padding to top of paragraphs and changed font color to blue.
topContentp.forEach(pad => pad.style.paddingTop = "20px")
topContentp.forEach(color => color.style.color = "blue")

const midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

let bottomContenth4 = document.querySelectorAll('.bottom-content h4')
bottomContenth4[0].textContent = siteContent["main-content"]["services-h4"]
bottomContenth4[1].textContent = siteContent["main-content"]["vision-h4"]

//Stretch increased font size to 70px for the h4.
bottomContenth4.forEach(fontSizing => fontSizing.style.fontSize = "70px")

let bottomContentp = document.querySelectorAll('.bottom-content p')
bottomContentp[0].textContent = siteContent["main-content"]["services-content"]
bottomContentp[1].textContent = siteContent["main-content"]["vision-content"]

//Stretch -padding on top and changed font color to blue.
bottomContentp.forEach(pad => pad.style.paddingTop = "20px")
bottomContentp.forEach(color => color.style.color = "blue")

let contactH4 = document.querySelector(".contact h4")
contactH4.textContent = siteContent["contact"]["contact-h4"]

//Stretch centered the h4 and increased font size to 70px.
contactH4.style.textAlign = "center"
contactH4.style.fontSize = "70px"

let contactP = document.querySelectorAll(".contact p")

let addressArray = siteContent['contact']['address'].split(' ');
addressArray.splice(4, 0, '\r\n');
contactP[0].innerText = addressArray.join(' ');

// contactP[0].textContent = siteContent["contact"]["address"]
contactP[1].textContent = siteContent["contact"]["phone"]
contactP[2].textContent = siteContent["contact"]["email"]

//Stretch centered the contact paragraphs. 
contactP.forEach(center => center.style.textAlign = "center")

//Footer

 let footerContent = document.querySelector("footer p")
 footerContent.textContent = siteContent["footer"]["copyright"]

