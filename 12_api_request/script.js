    let container = document.querySelector('#container');
    let searchInput = document.querySelector('#searchInput');
    let searchBtn = document.querySelector('#searchBtn');

    let prevBtn = document.querySelector('#prevBtn');
    let pageNumber = document.querySelector('#pageNumber');
    let nextBtn = document.querySelector('#nextBtn');

    let modal = document.querySelector('#modal');
    let modalContent = document.querySelector('#modalContent');
    let modalClsBtn = document.querySelector('#closeBtn');

    let cartCount = document.querySelector('#cartCount');
    let cartIcon = document.querySelector('#cartIcon');
    let cartModal = document.querySelector('#cartModal');
    let cartItems = document.querySelector('#cartItems');
    let closeCart = document.querySelector('#closeCart');
    let cartTotal = document.querySelector('#cartTotal');

    let limit = 10;
    let skip = 0;
    let currentPage = 1;

    let products = [];
    let cart = [];

    async function productCard(searchProduct = ''){

        try{

            container.innerHTML = `<h2>Loading...</h2>`;

            let response = await fetch(`https://dummyjson.com/products/search?q=${searchProduct}&limit=${limit}&skip=${skip}`);
            let data = await response.json();

            products = data.products;

            
            if (data.products.length === 0) {
                container.innerHTML = `
                <h2>No Products Found 😕</h2>
                `;

                prevBtn.disabled = true;
                nextBtn.disabled = true;

                return;
            }

            let card = '';

            data.products.forEach(product => {
                card += `
                    <div class='card'>
                        <img src='${product.thumbnail}' alt='${product.title}'>
                        <h4>${product.title}</h4>
                        <p>${product.brand || 'No Brand'}</p>
                        <p>⭐ ${product.rating}</p>
                        <p>Price: $ ${product.price}</p>

                        <div class="btns">
                            <button class="viewBtn" data-id='${product.id}'>View Details</button>
                            <button class="cartBtn" data-id='${product.id}'>Add To Cart</button>
                        </div>
                    </div>
                `;

            });

            container.innerHTML = card;

            pageNumber.innerText = currentPage;

            prevBtn.disabled = skip === 0;
            nextBtn.disabled = skip + limit >= data.total;

            // console.log(data);

        } catch(err){
            container.innerHTML = `<h2>Something went wrong 😔</h2>`
        }

    }

    productCard();

    searchBtn.addEventListener('click', function(){
        skip = 0;
        currentPage = 1;
        productCard(searchInput.value);
    });

    searchInput.addEventListener('keyup', function(e){
        if(e.key === 'Enter'){
            skip = 0;
            currentPage = 1;
            productCard(searchInput.value);
        }
    });

    nextBtn.addEventListener('click', function(){
        skip += limit;
        currentPage++;
        productCard(searchInput.value);
    });

    prevBtn.addEventListener('click', function(){
        if(currentPage > 1){
            skip -= limit;
            currentPage--;
            productCard(searchInput.value);
        }
        
    });


    function updateCartCount(){
        cartCount.innerText = cart.length;
    }

    container.addEventListener('click', function(e){
        if(e.target.classList.contains('cartBtn')){

            let id =  Number(e.target.dataset.id);

            console.log(id);

            let product = products.find(function(item){
                return item.id === id;
            });

            let existingProduct = cart.find(function(existProduct){
                return existProduct.id === id;
            });

            if(existingProduct){
                existingProduct.quantity++;
            }
            else{
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: 1
                });
            }
            
            console.log(cart);

            updateCartCount();
        }
    });


    function cartRender(){

        if(cart.length === 0){
            cartItems.innerHTML = `
                <div class="emptyCart">
                    <h3>Your cart is empty 🛒</h3>
                    <p>Add some products to get started.</p>
                </div>
            `;

            cartTotal.innerText = '';            
            return;
        }

        let cartHtml = '';

        cart.forEach((item) => {
            cartHtml += `
                <div class="cartItem">
                    <img src='${item.thumbnail}'>

                    <div>
                        <h4>${item.title}</h4>
                        <p>Price: ${item.price}</p>
                        <p>Qty: ${item.quantity}</p>
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = cartHtml;

    }

    cartIcon.addEventListener('click', function(e){
        cartRender();
        cartModal.style.display = 'flex';
    });

    closeCart.addEventListener('click', function(e){
        cartModal.style.display = 'none';
    });

    cartModal.addEventListener('click', function(e){
        if(e.target === cartModal){
            cartModal.style.display = 'none';
        }
    });

    

    // Product Details API fetch =====>

    async function getProductDetail(id){

        try{

            let detailResponse = await fetch(`https://dummyjson.com/products/${id}`);
            let detailData = await detailResponse.json();

            console.log(detailData);

            modalContent.innerHTML = `
            
                <span id="closeBtn">&times;</span>

                <img src="${detailData.thumbnail}">

                <div id="productDetail">
                    <h2>${detailData.title}</h2>

                    <p class="desc">
                        ${detailData.description}
                    </p>

                    <div class="info">
                        <span class="price">$${detailData.price}</span>
                        <span class="rating">⭐ ${detailData.rating}</span>
                    </div>

                    <div class="meta">
                        <p><strong>Brand:</strong> ${detailData.brand}</p>
                        <p><strong>Category:</strong> ${detailData.category}</p>
                        <p><strong>Stock:</strong> ${detailData.stock}</p>
                    </div>
                </div>
            
            `;

            modal.style.display = 'flex';

        } catch(err){
            console.log(err);
        }

    }

    container.addEventListener('click', function(e){
        if(e.target.classList.contains('viewBtn')){
            const id = e.target.dataset.id;
            getProductDetail(id);
        }
    });


    modal.addEventListener('click', function(e){
        if(e.target.id === 'closeBtn'){
            modal.style.display = 'none';
        }
    });

    modal.addEventListener('click', function(e){
        if(e.target === modal){
            modal.style.display = 'none';
        }
    });


    