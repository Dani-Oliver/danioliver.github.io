let products = [
    { id: 1, name: 'Mouse sem fio: ', price: 9.99, image: 'img/produto1.jpg' },
    { id: 2, name: 'Teclado mecanico: ', price: 19.99, image: 'img/produto2.jpg' },
    { id: 3, name: 'Microfone fifine: ', price: 29.99, image: 'img/produto3.jpg' },
    { id: 4, name: 'Microfone pro: ', price: 39.99, image: 'img/produto4.jpg' },
    { id: 5, name: 'Microfone lapela: ', price: 49.99, image: 'img/produto5.jpg' },
    { id: 6, name: 'Gabinete ATX: ', price: 59.99, image: 'img/produto6.jpg' },
    { id: 7, name: 'Placa mãe: ', price: 69.99, image: 'img/produto7.jpg' },
    { id: 8, name: 'Carregador portatil: ', price: 79.99, image: 'img/produto8.jpg' },
    { id: 9, name: 'Fone bluetooth JBL: ', price: 89.99, image: 'img/produto9.jpg' },
    { id: 10, name: 'Carregador: ', price: 99.99, image: 'img/produto10.jpg' },
    { id: 11, name: 'Cabo USB Macho e Fêmia: ', price: 109.99, image: 'img/produto11.jpg' },
    { id: 12, name: 'Cabo USB: ', price: 119.99, image: 'img/produto12.jpg' },
    { id: 13, name: 'Monitor: ', price: 129.99, image: 'img/produto13.jpg' },    
    { id: 14, name: 'Processador: ', price: 139.99, image: 'img/produto14.jpeg' },
];

let cart = [];

function renderProducts()
{
    let productGrid = document.querySelector('.product-grid');
    productGrid.innerHTML = '';
    products.forEach((product) =>
    {
        let productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img scr="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button>Adicionar ao carrinho</button>
        `;
        productDiv.querySelector('button').addEventListener('click',() => addToCart(product.id));
        productGrid.appendChild(productDiv);
    });
}

function addToCart(productId)
{
    let product = products.find((product) => product.id === productId);
    cart.push(product);
    renderCart();
}

function renderCart()
{
    let cartTable = document.querySelector('.cart table tbody');
    cartTable.innerHTML = '';
    cart.forEach((product) =>
    {
        let cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${product.name}</td>
            <td>1</th>
            <td>$${product.price}</td>
            <td>$${product.price}</td>
        `;
        cartTable.appendChild(cartRow);
    });
    updateTotal();
}

function updateTotal()
{
    let total = cart.reduce((acc, product) => acc + product.price, 0);
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

let currentProduct = 0;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0)
    {
        alert('Seu carrinho está vazio!');
    } else
    {
        alert('Pedido realizado com sucesso!');
        cart = [];
        renderCart();
    }
    });
    
renderProducts();