// Firebase configuration
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

// Function to add a product
const addProduct = (name, price, expiryDate) => {
    return db.collection('products').add({
        name,
        price,
        expiryDate
    });
};

document.getElementById('add-product-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const price = e.target.price.value;
    const expiryDate = e.target.expiryDate.value;
    
    addProduct(name, price, expiryDate)
        .then(() => {
            document.getElementById('status-message').textContent = 'Produto adicionado com sucesso!';
            e.target.reset();
        })
        .catch((error) => {
            document.getElementById('status-message').textContent = `Erro ao adicionar produto: ${error.message}`;
        });
});
