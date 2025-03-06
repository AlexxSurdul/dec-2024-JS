// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

//дістаємо дані через АРІ
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(data => {
        //деструктуруємо об'єкт, беремо лише {carts}
        let {carts} = data;

        //створюємо обгортку
        let div = document.createElement("div");
        document.body.appendChild(div);

        //ітеруємо carts
        for (const cart of carts) {
            console.log(cart); //підказка як виглядає об'єкт

            //створюємо контейнер для кожного кошика
            let cartBox = document.createElement("div");
            div.appendChild(cartBox);

            //заповнюємо кожен кошик даними з об'єкта
            cartBox.innerHTML = `<br>
            userId: ${cart.userId}<br>
             total: ${cart.total}<br>
             discountedTotal: ${cart.discountedTotal}<br>
             totalProducts:  ${cart.totalProducts}<br>
             totalQuantity:  ${cart.totalQuantity}<br><br>`;

            //створюємо обгортку для продуктів в кошику
            let productsBox = document.createElement("div");
            productsBox.classList.add("products");
            cartBox.appendChild(productsBox);

            //ітеруємо товари в кошику
            for (const product of cart.products) {
                let productBox = document.createElement("div");
                productBox.classList.add("product");
                productsBox.appendChild(productBox);
                productBox.innerHTML = `
                    <h3>Products</h3>
                    <img src="${product.thumbnail}" alt="${product.title}"><br>
                    title: ${product.title}<br>
                    price: ${product.price}<br>
                    quantity: ${product.quantity}<br>


                `;
            }
        }
    })

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

