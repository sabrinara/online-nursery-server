const data = [
    {
        id: 1,
        imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-7.jpg",
        title: "Leopard Lily",
        price: 200,
        rating: 2.5,
        category: "Indoor plant",
        details: "Leopard Lily is known for its striking spotted leaves and easy maintenance, making it a popular choice for indoor spaces."
    },
    {
        id: 2,
        imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/themes/flacio/images/newsletter-image.jpg",
        title: "Variety Plant",
        price: 28,
        rating: 3.5,
        category: "Indoor plant",
        details: "This variety plant offers a mix of textures and colors, perfect for adding diversity and vibrancy to any room."
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Foliage Plant",
        price: 10,
        rating: 1.55,
        category: "Outdoor plant",
        details: "The Green Foliage plant is admired for its lush, vibrant leaves that add a refreshing, natural touch to any space."
    },
    {
        id: 4,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba22.jpg?v=1662954220",
        title: "Grass",
        price: 50,
        rating: 5,
        category: "Decor plant",
        details: "Decorative grass brings a touch of nature indoors with its sleek and minimalist design, perfect for modern interiors."
    },
    {
        id: 5,
        imageUrl: "https://wpbingosite.com/wordpress/flacio/wp-content/uploads/2021/12/banner-10-9.jpg",
        title: "Saccula Plant",
        category: "Gift plant",
        price: 20,
        rating: 5,
        details: "Saculla plants are known for their lush green foliage and are often gifted for their elegance and easy care."
    },
    {
        id: 6,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba8.png?v=1662622937",
        title: "Spring Plant",
        category: "Office Decor plant",
        price: 25,
        rating: 5,
        details: "Spring plants bring a refreshing vibe to office spaces with their bright green leaves and minimal upkeep requirements."
    },
    {
        id: 7,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/files/ba21.jpg?v=1662954220",
        title: "Bonsai",
        price: 40,
        rating: 1,
        category: "Indoor plant",
        details: "Bonsai is the Japanese art of cultivating miniature trees, emphasizing patience, balance, and natural beauty."
    },
    {
        id: 8,
        imageUrl: "https://images.unsplash.com/photo-1578687595593-31fafb682273?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Westwood Gardens succulents",
        price: 40,
        rating: 1,
        category: "Outdoor plant",
        details: "Westwood Gardens succulents are known for their hardy, low-maintenance plants that thrive in various environments. They are perfect for beginners and seasoned gardeners."
    },
    {
        id: 9,
        imageUrl: "https://gabtor-store-demo.myshopify.com/cdn/shop/products/1_bfa8b69d-29a9-42fa-bb73-cef92fd91d9a.jpg?v=1662541921",
        title: "Tulip",
        price: 40,
        rating: 1,
        category: "Outdoor plant",
        details: "Tulip flowers are a favorite choice for gardeners, offering bright colors and graceful shapes that enhance outdoor spaces."
    }
];


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
//carousel
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

//products

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

//review section

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

displayReview(currentIndex);

//newsletter
function validateForm() {
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("error-message");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = "Please enter a valid email address.";
        errorMessage.style.display = "block";
        return false; 
    }

    
    errorMessage.style.display = "none";
    alert("Thank you for subscribing!");
    return true; 
}

