function renderBooks(filter){
  const booksWrapper = document.querySelector('.books');

  const books = getBooks();

  if(filter === 'LOW_TO_HIGH'){
    const filterBooks = books.sort((a,b)=>a.originalPrice - b.originalPrice);
  }

  if(filter === 'HIGH_TO_LOW'){
    const filterBooks = books.sort((a,b)=>b.originalPrice - a.originalPrice);
  }

  if(filter === 'RATING'){
    const filterBooks = books.sort((a,b)=>b.rating - a.rating);
  }
  


  const booksHTML = books.map((book) => {
    return `<div class="book">
    <figure class="book__image--wrapper">
        <img class="book__image" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
        ${book.title}
    </div>
    <div class="book__author">
      ${book.author}
    </div>
    <div class="book__ratings">
    ${displayRating(book.rating)}
    </div>
    <div class="book__price">
        <span class="book__price--normal">$${book.originalPrice.toFixed(2)}</span> $${book.salePrice}

    </div>
</div>`
  }).join("");

  booksWrapper.innerHTML = booksHTML;

  
}

function displayRating(rating){
  let ratingHTML = ' ';

  for(let i = 0; i < Math.floor(rating); i++){
    ratingHTML += '<i class="fas fa-star"></i>';
  }

  if(!Number.isInteger(rating)){
    ratingHTML += '<i class="fas fa-star-half-alt"></i>';
  }
  
  if(rating <= 4){
    let rest = Math.floor(5 - rating);
    for(let i = 0; i < rest; i++){
    ratingHTML += '<i class="fa fa-star-o"></i>';
  }
  }
  return ratingHTML;

}

function filterBooks(event){
  renderBooks(event.target.value);
}

// this is to make it call after HTML is loaded
setTimeout(()=>{
  renderBooks();
});

// FAKE DATA
function getBooks() {
  return [
    {
      id: 1,
      title: "Crack the Coding Interview",
                url: "assets/crack the coding interview.png",
      author: "Author",
      originalPrice: 49.95,
      salePrice: 14.95,
      rating: 4.5,
    },
    {
      id: 2,
      title: "Atomic Habits",
      url: "assets/atomic habits.jpg",
      author: "Author",
      originalPrice: 39,
      salePrice: null,
      rating: 5,
    },
    {
      id: 3,
      title: "Deep Work",
      url: "assets/deep work.jpeg",
      author: "Author",
      originalPrice: 29,
      salePrice: 12,
      rating: 5,
    },
    {
      id: 4,
      title: "The 10X Rule",
      url: "assets/book-1.jpeg",
      author: "Author",
      originalPrice: 44,
      salePrice: 19,
      rating: 4.5,
    },
    {
      id: 5,
      title: "Be Obsessed Or Be Average",
      url: "assets/book-2.jpeg",
      author: "Author",
      originalPrice: 32,
      salePrice: 17,
      rating: 4,
    },
    {
      id: 6,
      title: "Rich Dad Poor Dad",
      url: "assets/book-3.jpeg",
      author: "Author",
      originalPrice: 70,
      salePrice: 12.5,
      rating: 5,
    },
    {
      id: 7,
      title: "Cashflow Quadrant",
      url: "assets/book-4.jpeg",
      author: "Author",
      originalPrice: 11,
      salePrice: 10,
      rating: 4,
    },
    {
      id: 8,
      title: "48 Laws of Power",
      url: "assets/book-5.jpeg",
      author: "Author",
      originalPrice: 38,
      salePrice: 17.95,
      rating: 4.5,
    },
    {
      id: 9,
      title: "The 5 Second Rule",
      url: "assets/book-6.jpeg",
      author: "Author",
      originalPrice: 35,
      salePrice: null,
      rating: 4,
    },
    {
      id: 10,
      title: "Your Next Five Moves",
      url: "assets/book-7.jpg",
      author: "Author",
      originalPrice: 40,
      salePrice: null,
      rating: 1.5,
    },
    {
      id: 11,
      title: "Mastery",
      url: "assets/book-8.jpeg",
      author: "Author",
      originalPrice: 30,
      salePrice: null,
      rating: 4.5,
    },
  ];
}
