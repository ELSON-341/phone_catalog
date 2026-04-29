fetch('products.json')
.then(response => response.json())
.then(products => {
    const productsContainer = document.getElementById('products-container');
    console.log(products.price)
    // products.forEach(product => {
    //     console.log(product.price)

    //     const productCard = document.createElement('div')
    //     productCard.classList.add('product-card')

    //     const figure = document.createElement('figure')
    //     const img = document.createElement('img')
    //     img.src = product.image
    //     figure.appendChild(img)
    // })
})