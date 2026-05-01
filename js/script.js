fetch('products.json')
.then(response => response.json())
.then(products => {
    const productsContainer = document.getElementById('products-container');
        
    products.forEach(product => {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')

        const figure = document.createElement('figure')
        const img = document.createElement('img')
        img.src = product.image
        figure.appendChild(img)
        
        const info = document.createElement('div')
        info.classList.add('info')

        const h2 = document.createElement('h2')
        h2.classList.add('name')
        h2.textContent = product.name

        const price = document.createElement('p')
        price.classList.add('price')
        price.textContent = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

        info.appendChild(h2)
        info.appendChild(price)

        const buttons = document.createElement('div')
        buttons.classList.add('buttons')

        const btn = document.createElement('button')
        btn.classList.add('btn')
        btn.innerText = "Saiba mais"

        const linkBtn = document.createElement('a')
        linkBtn.classList.add('btn')
        linkBtn.innerText = "WhatsApp"
        linkBtn.href = `https://wa.me/98992036351`

        buttons.appendChild(btn)
        buttons.appendChild(linkBtn)

        info.appendChild(buttons)

        productCard.appendChild(figure)
        productCard.appendChild(info)

        productsContainer.appendChild(productCard)

        console.log(productsContainer)
    });

})