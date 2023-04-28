const products = [
  {
    id: 1,
    icon: 'media/icons/save-money.png',
    product: 'Savings',
    description: 'Enjoy the simplicity of saving with the SoFi on real time basis, secure your future!',
  },
  {
    id: 2,
    icon: 'media/icons/profits.png',
    product: 'Investments',
    description: 'Enjoy the simplicity of investing with the SoFi on real time basis, secure your future!',
  },
  {
    id: 3,
    icon: 'media/icons/cycle.png',
    product: 'Lending',
    description: 'Enjoy the simplicity of lending with the SoFi on real time basis, secure your future!',
  },
  {
    id: 4,
    icon: 'media/book-keeping.png',
    product: 'Budgeting',
    description: 'Enjoy the simplicity of budgeting with the SoFi on real time basis, secure your future!',
  },
  {
    id: 5,
    icon: 'media/borrow.png',
    product: 'Borrowing',
    description: 'Enjoy the simplicity of borrowing with the SoFi on real time basis, secure your future!',
  },
];
const board = [
  {
    id: 1,
    image: 'media/pps/p1.jpg',
    name: 'John Mwangi',
    title: 'Managing Director of Finserve Africa',
    description: 'John Mwangi was the master mind behind the famous financial inclusity campaign that rocked all over Africa and gave birth to the new era of Fintech.',
  },
  {
    id: 2,
    image: 'media/pps/p2.jpg',
    name: 'Sylvester Wamaya',
    title: 'CEO of Safaricom, the Actuary and a software engineer.',
    description: 'Sylvester Wamaya was the master mind behind the famous digital campaign that rocked all over Africa and gave birth to the new era of Fintech.',
  },
  {
    id: 3,
    image: 'media/pps/p3.jpg',
    name: 'Jane Mbita',
    title: 'A former minister of Finance in USA and former Navy seal.',
    description: 'Jane Mbita is the master mind behind the famous philantropic activities in East Africa and beyond, mainly focusing on SMES for all for growth.',
  },
  {
    id: 4,
    image: 'media/pps/p4.jpg',
    name: 'Ryan Mike',
    title: 'CEO of Creative Commons, ex COO  of the Mozilla Foundation',
    description: 'Ryan had been leading open - source projects at the Mozilla Foundation such as the open source movement.',
  },
  {
    id: 5,
    image: 'media/pps/p5.jpg',
    name: 'Julia Leda',
    title: 'President of Law Society of Kenya',
    description: 'Julia is a seasoned advocate of the high court, she specializes in criminal and corporate. She has been instrumental in formulating some of the financial crime laws',
  },
  {
    id: 6,
    image: 'media/pps/p6.jpg',
    name: 'Edwin Ouma',
    title: 'The chairperson Edwin Ouma Mwangi is the spearheader of the mind for books movement in universities and underserved communities in Africa.',
  },
];
const patners = [
  {
    id: 1,
    logo: 'media/patners/p1.png',
  },
  {
    id: 2,
    logo: 'media/patners/p2.jpeg',
  },
  {
    id: 3,
    logo: 'media/patners/p3.jpeg',
  },
  {
    id: 4,
    logo: 'media/patners/p4.png',
  },
  {
    id: 5,
    logo: 'media/patners/p5.png',
  },
];

const humburger = document.querySelector('#hum');
const mobileNav = document.querySelector('#nav-mobile');
const mobileItems = document.querySelectorAll('#nav-mobile .nav-item');
const productsContainer = document.querySelector('#products .container');
const boardContainer = document.querySelector('#pps .container');
const patnersContainer = document.querySelector('#pat-container');

humburger.addEventListener('click', () => {
  mobileNav.classList.remove('mobile-hide');
});
mobileItems.forEach((item) => {
  item.addEventListener('click', () => {
    mobileNav.classList.add('mobile-hide');
  });
});

products.forEach((prod, item) => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `

  <img src="${products[item].icon}" alt="image">
  <h2 class="title orange">${products[item].product}</h2>
  <p>${products[item].description}</p>
  `;
  productsContainer.appendChild(productDiv);
});

board.forEach((bod, item) => {
  const boardMember = document.createElement('div');
  boardMember.className = 'pp';
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
  `;
  boardContainer.appendChild(boardMember);
});
patners.forEach((pat, item) => {
  const patner = document.createElement('li');
  patner.className = 'pat-name';
  patner.innerHTML = `<img class="pat-item" src="${patners[item].logo}" alt="image">`;
  patnersContainer.appendChild(patner);
});

const navbar = document.querySelector('nav');
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function scroll() { myFunction(); };
