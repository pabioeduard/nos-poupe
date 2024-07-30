// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCfahi5o-AflnyayWtEXgzMMjueLj56adw",
    authDomain: "nos-poupe.firebaseapp.com",
    projectId: "nos-poupe",
    storageBucket: "nos-poupe.appspot.com",
    messagingSenderId: "128191465138",
    appId: "1:128191465138:web:2213ec7aaa583a59c1abab",
    measurementId: "G-WNSSNCPZYK"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Function to fetch and display products
const fetchProducts = () => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const product = doc.data();
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            productDiv.innerHTML = `
                <h3>${product.name}</h3>
                <p>Preço: ${product.price}</p>
                <p>Data de Validade: ${product.expiryDate}</p>
            `;

            productList.appendChild(productDiv);
        });
    });
};

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = document.querySelectorAll('.product');

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Fetch products on page load
window.addEventListener('DOMContentLoaded', fetchProducts);
