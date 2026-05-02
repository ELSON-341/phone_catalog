
// creating card
fetch('products.json')
.then(response => response.json())
.then(products => {
    const productsContainer = document.getElementById('products-container');
    const modal = document.getElementById('modal')
    const modalContainer = document.getElementById('modal-container')
    const modalContent = document.getElementById('modal-content')
    const closeBtn = document.querySelector('#close-container .bx')

    // console.log(modalContent)

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

        // Open modal
        productCard.querySelector('button').addEventListener('click', () => {
            modal.style.display = 'flex'

            // Show the modal information
            modalContent.innerHTML =`
                <figure>
                    <img src="${product.image}" alt="${product.name}">
                </figure>
                <div class="modal-info">
                    <h2 class="name">${product.name}</h2>
                    <p class="price">${product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p class="description">${product.description}</p>
                    <div class="buttons">
                            <a class="btn" href="https://wa.me/98992036351" rel="nofollow" target="_blank"><i class='bx bxl-whatsapp'></i> WhatsApp</a>
                    </div>
                </div>
            `
        } )
    })
    closeBtn.onclik = () => console.log('test');
})
