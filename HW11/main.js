// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

//дістаємо дані через АРІ
fetch('https://dummyjson.com/carts?limit=5')
    .then(res => res.json())
    .then(data => {

        //деструктуруємо об'єкт, беремо лише {carts}
        let {carts} = data;

        //створюємо обгортку
        let div = document.createElement("div");
        document.body.appendChild(div);

        //ітеруємо carts
        for (const cart of carts) {

            //створюємо контейнер для кожного кошика
            let cartBox = document.createElement("div");
            cartBox.style.border = "1px solid lightgray";
            cartBox.style.padding = "10px";
            cartBox.style.margin = "10px";
            div.appendChild(cartBox);

            //заповнюємо кожен кошик даними з об'єкта
            cartBox.innerHTML = `
            <h3>Cart #${cart.userId}</h3>
             <p><strong>Total</strong>: ${cart.total}</p>
             <p><strong>Discounted Total</strong>: ${cart.discountedTotal}</p>
             <p><strong>Total Products</strong>:  ${cart.totalProducts}</p>
             <p><strong>Total Quantity</strong>:  ${cart.totalQuantity}</p>`;

            //створюємо обгортку для продуктів в кошику
            let productsBox = document.createElement("div");
            productsBox.style.display = "flex";
            productsBox.style.flexDirection = "row";
            cartBox.appendChild(productsBox);

            //ітеруємо товари в кошику
            for (const product of cart.products) {

                //створюємо обгортку для кожного продукта
                let productBox = document.createElement("div");
                productBox.style.display = "flex";
                productBox.style.flexDirection = "column";
                productBox.style.border = "1px solid lightgray";
                productBox.style.padding = "10px";
                productBox.style.margin = "10px";
                productBox.style.width = "220px";
                productsBox.appendChild(productBox);

                //наповнюємо продукти даними
                productBox.innerHTML = `
                    <h4>Products</h4>
                    <img src="${product.thumbnail}" alt="${product.title}" style="width: 200px">
                    <p>Title: ${product.title}</p>
                    <p>Price: ${product.price}</p>
                    <p>Quantity: ${product.quantity}</p>
                `;
            }
        }
    })

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

fetch('https://dummyjson.com/recipes?limit=5')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        // отримуємо масив рецептів
        const { recipes } = data;

        // створюємо контейнер для всіх рецептів
        const container = document.createElement("div");
        document.body.appendChild(container);

        // ітеруємо рецепти
        recipes.forEach(recipe => {
            // створюємо контейнер для окремого рецепту
            const recipeBox = document.createElement("div");
            recipeBox.style.border = "1px solid #ccc";
            recipeBox.style.padding = "10px";
            recipeBox.style.margin = "10px";
            container.appendChild(recipeBox);

            // виводимо рецепти
            recipeBox.innerHTML = `
                <h2>${recipe.name}</h2>
                <img src="${recipe.image}" alt="${recipe.name}" style="width: 300px">
                <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
                <p><strong>Cook Time Minutes:</strong> ${recipe.cookTimeMinutes} хвилин</p>
                <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
                <p><strong>Ingredients:</strong></p>
            `;

            // створюємо список для інгредієнтів
            const ingredientsList = document.createElement("ul");
            recipeBox.appendChild(ingredientsList);

            // додаємо інгредієнти до списку
            recipe.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        });
    })