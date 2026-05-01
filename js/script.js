fetch('products.json')
.then(response => response.json())
.then(products => {
    const productsContainer = document.getElementById('products-container');
    console.log(products.price)
        
    products.forEach(element => {
        const img = document.createElement('img')
        
        
        console.log(img)
    });

})