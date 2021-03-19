console.log('The Cart')

let carts = document.querySelectorAll('.add-cart');

let allProducts = [
  {
    id: '01',
    name: 'Underland: A Deep Time Journey',
    tag: 'underland',
    imagePath: '.images/book-01.jpeg',
    price: 12.50,
    inCart: 0
  },
  {
    id: '02',
    name: 'Three Comrades',
    imagePath: '.images/book-02.jpeg',
    price: 10.50,
    inCart: 0
  },
  {
    id: '03',
    name: 'The Weird and The Eerie',
    tag: 'the-weird',
    imagePath: '.images/book-03.jpeg',
    price: 8.00,
    inCart: 0
  },
  {
    id: '04',
    name: 'The Haunting of Hill House',
    tag: 'the-haunting',
    imagePath: '.images/book-04.jpeg',
    price: 7.25,
    inCart: 0
  },
  {
    id: '05',
    name: 'Orlando',
    tag: 'orlando',
    imagePath: '.images/book-05.jpeg',
    price: 6.25,
    inCart: 0
  },
  {
    id: '06',
    name: 'The Little Stranger',
    tag: 'little-stranger',
    imagePath: '.images/book-06.jpeg',
    price: 7.00,
    inCart: 0
  },
  {
    id: '07',
    name: 'A Brief History of Time',
    tag: 'brief-history',
    imagePath: '.images/book-07.jpeg',
    price: 8.50,
    inCart: 0
  },
  {
    id: '08',
    name: 'Alias Grace',
    tag: 'alias-grace',
    imagePath: '.images/book-08.jpeg',
    price: 8.25,
    inCart: 0
  },
];


for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNum();
  })
}


function onLoadCartNumbers() {
  let productNum  = localStorage.getItem('cartNum');

  if(productNum) {
    document.querySelector('#cart span').textContent = productNum;
  }
}


function cartNum() {
  let productNum  = localStorage.getItem('cartNum');

  productNum = parseFloat(productNum); //to convert string to number
  
  if(productNum) {
    localStorage.setItem('cartNum', productNum + 1);
    document.querySelector('#cart span').textContent = productNum + 1;
  } else {
    localStorage.setItem('cartNum', 1);
    document.querySelector('#cart span').textContent = 1;
  }
 
}

onLoadCartNumbers();