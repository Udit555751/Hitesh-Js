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

    // let toast = document.querySelector('#toast');

    let categoryFilter = document.querySelector('#categoryFilter');

    let sortFilter = document.querySelector('#sortFilter');

    let clearCartBtn = document.querySelector('#clearCartBtn');

    let timer;


    let limit = 10;
    let skip = 0;
    let currentPage = 1;

    let products = [];
    let cart = JSON.parse(localStorage.getItem('cart')) || [];


    async function productCard(searchProduct = '', category = ''){

        try{

            container.innerHTML = `<h2>Loading...</h2>`;

            let url = '';

            if(category){
                url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
            } else if(searchProduct){
                url = `https://dummyjson.com/products/search?q=${searchProduct}&limit=${limit}&skip=${skip}`
            } else{
                url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
            }

            let response = await fetch(url);
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

            renderProducts(products);

            pageNumber.innerText = currentPage;

            prevBtn.disabled = skip === 0;
            nextBtn.disabled = skip + limit >= data.total;

            // console.log(data);

        } catch(err){
            container.innerHTML = `<h2>Something went wrong 😔</h2>`
        }

    }

    productCard();
    updateCartCount();
    cartRender();


    function renderProducts(productList){

        let card = '';

        productList.forEach(product => {
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

    }


    searchBtn.addEventListener('click', function(){
        skip = 0;
        currentPage = 1;
        categoryFilter.value = '';

        productCard(searchInput.value);
    });

    searchInput.addEventListener('keyup', function(e){
        if(e.key === 'Enter'){
            skip = 0;
            currentPage = 1;
            categoryFilter.value = '';

            productCard(searchInput.value);
        }
    });

    nextBtn.addEventListener('click', function(){
        skip += limit;
        currentPage++;

        productCard(searchInput.value, categoryFilter.value);
    });

    prevBtn.addEventListener('click', function(){
        if(currentPage > 1){
            skip -= limit;
            currentPage--;

            productCard(searchInput.value, categoryFilter.value);
        }
        
    });


    function updateCartCount(){

        let totalItems = cart.reduce((sum, item) => {
            return sum + item.quantity;
        }, 0);

        cartCount.innerText = totalItems;
    }

    container.addEventListener('click', function(e){
        if(e.target.classList.contains('cartBtn')){

            let id =  Number(e.target.dataset.id);

            // console.log(id);

            let product = products.find(function(item){
                return item.id === id;
            });

            let existingProduct = cart.find(function(existProduct){
                return existProduct.id === id;
            });

            if(existingProduct){
                existingProduct.quantity++;

                showToast("Quantity Updated 📦","success");
            }
            else{
                cart.push({
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,
                    quantity: 1
                });

                showToast("Product Added 🛒","success");
            }
            
            // console.log(cart);
            
            saveCart();
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
                        <p>Price: $ ${item.price}</p>

                        <div class="actionBox">
                            <div class="qtyBox">
                                <button class='minusBtn' data-id='${item.id}'>-</button>

                                <span>Qty: ${item.quantity}</span>

                                <button class='plusBtn' data-id='${item.id}'>+</button>
                            </div>

                            <button class='removeBtn' data-id='${item.id}'>Remove</button>
                        </div>
                        
                    </div>
                </div>
            `;
        });

        cartItems.innerHTML = cartHtml;


        let total = cart.reduce((sum, item) => {
            return sum + (item.price * item.quantity);
        }, 0);

        cartTotal.innerText = `Total: $ ${total.toFixed(2)}`;

    }


    cartItems.addEventListener('click', function(e){
        if(e.target.classList.contains('minusBtn')){
            let id = Number(e.target.dataset.id);
            
            let product = cart.find(item => item.id === id);

            product.quantity--;

            if(product.quantity === 0){
                cart = cart.filter((item) => {
                    return item.id !== id;
                });
            }

            saveCart();

            showToast("Quantity Reduce 🗑️","error");
            cartRender();
            updateCartCount();
        }

        if(e.target.classList.contains('plusBtn')){
            let id = Number(e.target.dataset.id);

            let product = cart.find(function(item){
                return item.id === id;
            });

            product.quantity++;

            saveCart();

            showToast("Quantity Updated 📦","success");

            cartRender();
            updateCartCount();
        }

        if(e.target.classList.contains('removeBtn')){
            let id = Number(e.target.dataset.id);

            cart = cart.filter(function(item){
                return item.id !== id;
            });

            saveCart();            

            showToast("Product Removed 🗑️","error");
            
            cartRender();
            updateCartCount();
            
        }

    });


    function saveCart(){
        localStorage.setItem('cart', JSON.stringify(cart));
    }


    let toast = document.querySelector("#toast");

    function showToast(message, type){

        toast.innerText = message;

        toast.className = "";

        toast.classList.add("show");
        toast.classList.add(type);

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2000);
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


    clearCartBtn.addEventListener('click', clearCart);

    function clearCart(){
        cart = [];
        saveCart();
        cartRender();
        updateCartCount();
        showToast("Cart Cleared 🗑️");
        // console.log('Cart Clear');
    }
    

    

    // =========================== Product Details API fetch / Modal =======================>

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



    // ==================== Products filter on the basis of Categories =================>
    
    async function filterCategory(){

        try{

            let categoryResponse = await fetch(`https://dummyjson.com/products/categories`);
            let categoryData = await categoryResponse.json();

            // console.log(categoryData);

            categoryData.forEach((productCategory) => {
                categoryFilter.innerHTML += `
                    <option value='${productCategory.slug}'>${productCategory.name}</option>
                `;
            });

        } catch(err){
            console.log(err);
        }

    }

    filterCategory();

    categoryFilter.addEventListener('change', function(e){

        skip = 0;
        currentPage = 1;

        searchInput.value = '';

        productCard(searchInput.value, categoryFilter.value);

        // console.log(categoryFilter.value);
    });
    


    // =============================== Sort Filter =======================================>

    sortFilter.addEventListener('change', function(e){

        let sortBy = e.target.value;

        skip = 0;
        currentPage = 1;

        switch(sortBy){

            case "lowToHigh": 
                products.sort((a,b) => a.price - b.price);
                break;

            case 'highToLow':
                products.sort((a,b) => b.price - a.price);
                break;

            case 'rating':
                products.sort((a,b) => b.rating - a.rating);
                break;
            
            case 'name':
                products.sort((a,b) => a.title.localeCompare(b.title));

        }

        renderProducts(products);

        console.log(sortFilter.value);
    });


    
    // =========================== Debounce (Type krne pr search start kr deta) ========================>

    searchInput.addEventListener('input', function(){


        clearTimeout(timer);

        timer = setTimeout(function(){
            productCard(searchInput.value);
        }, 500);

    });