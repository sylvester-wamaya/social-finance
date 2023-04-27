const products = [
  {
    id: 1,
    icon: "media/sofi.jpg",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 2,
    icon: "media/sofi.jpg",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 3,
    icon: "media/sofi.jpg",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 4,
    icon: "media/sofi.jpg",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  },
  {
    id: 5,
    icon: "media/sofi.jpg",
    product: "Investment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?"
  }
]
const board = [
  {
    id: 1,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 2,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 3,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 4,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 5,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  },
  {
    id: 6,
    image: "media/sofi.jpg",
    name: "Sylvester Wamaya",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, rerum?",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda explicabo nemo reprehenderit velit delectus, vero quia commodi tempora vel. Voluptates."
  }
]
const patners = [
  {
    id: 1,
    logo: "media/sofi.jpg"
  },
  {
    id: 2,
    logo: "media/sofi.jpg"
  },
  {
    id: 3,
    logo: "media/sofi.jpg"
  },
  {
    id: 4,
    logo: "media/sofi.jpg"
  },
  {
    id: 5,
    logo: "media/sofi.jpg"
  }
]

const humburger = document.querySelector('#hum');
const mobileNav = document.querySelector("#nav-mobile")
const mobileItems = document.querySelectorAll("#nav-mobile .nav-item")

humburger.addEventListener('click', () => {
  mobileNav.classList.remove("mobile-hide")
});
mobileItems.forEach((item)=>{
  item.addEventListener("click", ()=>{
  mobileNav.classList.add("mobile-hide") 
})
})
