const products = [
  {
    id: 1,
    icon: "media/favicon_io/favicon.ico",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 2,
    icon: "media/favicon_io/favicon.ico",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 3,
    icon: "media/favicon_io/favicon.ico",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 4,
    icon: "media/favicon_io/favicon.ico",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 5,
    icon: "media/favicon_io/favicon.ico",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  }
]
const board = [
  {
    id: 1,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 2,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 3,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 4,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 5,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 6,
    image: "media/favicon_io/favicon.ico",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  }
]
const patners = [
  {
    id: 1,
    logo: "media/favicon_io/favicon.ico"
  },
  {
    id: 2,
    logo: "media/favicon_io/favicon.ico"
  },
  {
    id: 3,
    logo: "media/favicon_io/favicon.ico"
  },
  {
    id: 4,
    logo: "media/favicon_io/favicon.ico"
  },
  {
    id: 5,
    logo: "media/favicon_io/favicon.ico"
  }
]

const humburger = document.querySelector('#hum');
const mobileNav = document.querySelector("#nav-mobile")
const mobileItems = document.querySelectorAll("#nav-mobile .nav-item")
const productsContainer = document.querySelector("#products .container")
const boardContainer = document.querySelector("#pps .container")
const patnersContainer = document.querySelector("#pat-container")


humburger.addEventListener('click', () => {
  mobileNav.classList.remove("mobile-hide")
});
mobileItems.forEach((item)=>{
  item.addEventListener("click", ()=>{
  mobileNav.classList.add("mobile-hide") 
})
})

products.forEach((prod, item)=>{
  const productDiv = document.createElement("div")
  productDiv.className = "product"
  productDiv.innerHTML = `

  <img src="${products[item].icon}" alt="image">
  <h2 class="${products[item].product}">Lecture</h2>
  <p>${products[item].description}</p>
  `
  productsContainer.appendChild(productDiv)
})

board.forEach((bod, item)=>{
  const boardMember = document.createElement("div")
  boardMember.className = "pp"
  boardMember.innerHTML = `
  <div class="images">
  <img src="${board[item].image}" alt="image">
  </div>
  <div>
  <h2 class="title">${board[item].name}</h2>
  <p class="orange italic">${board[item].title}</p>
  <hr>
  <p>${board[item].description}</p>
  </div>
  `
  boardContainer.appendChild(boardMember)
})
patners.forEach((pat, item)=>{
  const patner = document.createElement("li")
  patner.className = "pat-name"
  patner.innerHTML = `<img class="pat-item" src="${patners[item].logo}" alt="image">`
  patnersContainer.appendChild(patner)
})

window.onscroll = function() {myFunction()};

const navbar = document.querySelector("nav");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
