const data = [
    {
        id: 1,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Leopard Lily",
        price: 200,
        rating: 2.5,
        category: "Indoor plant",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Calathea Plant",
        price: 28,
        rating: 3.5,
        category: "Indoor plant",

details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."    },
    {
        id: 3,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Spring Plant",
        price: 10,
        rating: 1.55,
        category: "Indoor plant",

details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."    },
    {
        id: 4,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 50,
        rating: 5,
        category: "Gift plant",
  
  details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."  },
    {
        id: 5,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 20,
        rating: 5,
        category: "Indoor plant",

details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."    },
    {
        id: 6,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 25,
        rating: 5,
        category: "Office plant",

details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."    },
    {
        id: 7,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 40,
        rating: 1,
        category: "Outdoor plant",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 8,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 40,
        rating: 1,
        category: "Outdoor plant",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 9,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 40,
        rating: 1,
        category: "Outdoor plant",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];
document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.carousel .item');
    const thumbnails = document.querySelectorAll('.thumb li');
    let currentIndex = 0;
    let autoSlideInterval;

    function changeSlide(index) {
        items.forEach((item, idx) => {
            item.classList.remove('active');
            thumbnails[idx].classList.remove('active');
        });
        items[index].classList.add('active');
        thumbnails[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        changeSlide(currentIndex);
    }
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            currentIndex = index;
            changeSlide(currentIndex);
            autoSlideInterval = setInterval(nextSlide, 5000); 
        });
    });

    autoSlideInterval = setInterval(nextSlide, 5000);
    changeSlide(currentIndex);
});


let currentPage = 1;
const itemsPerPage = 3;
let filteredData = [...data];

function renderProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p><span>Price:</span> $${product.price}</p>
            <p><span>Rating:</span> ${product.rating}</p>
            <p> <span>Category:</span> ${product.category}</p>
            <h5> ${product.details}</p>
        `;
        productContainer.appendChild(productCard);
    });
}


function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add('pagination-button');
        if (currentPage === i) {
            button.classList.add('active');
        }
        button.addEventListener('click', () => {
            currentPage = i;
            paginate();
        });
        pagination.appendChild(button);
    }
}

function paginate() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedData = filteredData.slice(start, end);
    renderProducts(paginatedData);
    renderPagination();
}


document.getElementById('sort-price').addEventListener('click', () => {
    filteredData.sort((a, b) => a.price - b.price);
    currentPage = 1;
    paginate();
});

document.getElementById('sort-rating').addEventListener('click', () => {
    filteredData.sort((a, b) => b.rating - a.rating);
    currentPage = 1;
    paginate();
});

document.getElementById('search-input').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    filteredData = data.filter(product => product.title.toLowerCase().includes(searchTerm));
    currentPage = 1;
    paginate();
});

paginate();

const reviews = [
    {
        name: "John Doe",
        email: "john@example.com",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        review: "Great service and wonderful product quality! Highly recommended."
    },
    {
        name: "Jane Smith",
        email: "jane@example.com",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        review: "The support team was fantastic. Very quick to respond and assist."
    },
    {
        name: "Mark Johnson",
        email: "mark@example.com",
        image: "https://randomuser.me/api/portraits/men/3.jpg",
        review: "I am delighted with my purchase! Will definitely shop here again."
    }
];

let currentIndex = 0;

const reviewCard = document.getElementById("review-card");
const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const userImage = document.getElementById("user-image");
const userReview = document.getElementById("user-review");

function displayReview(index) {
    userName.textContent = reviews[index].name;
    userEmail.textContent = reviews[index].email;
    userImage.src = reviews[index].image;
    userReview.textContent = reviews[index].review;

    reviewCard.style.opacity = "0";
    reviewCard.style.transform = "scale(0.9)";

    setTimeout(() => {
        reviewCard.style.opacity = "1";
        reviewCard.style.transform = "scale(1)";
    }, 100);
}

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? reviews.length - 1 : currentIndex - 1;
    displayReview(currentIndex);
});

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex = (currentIndex === reviews.length - 1) ? 0 : currentIndex + 1;
    displayReview(currentIndex);
});

// Initial display
displayReview(currentIndex);
