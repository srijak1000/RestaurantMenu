const foodItems = [
    { name: 'Shimla Chicken Biryani', price: 229, image: "fds (1).jpg" },
    { name: 'Pancakes and Tea', price: 59, image: "fds (2).jpg" },
    { name: 'Chicken Patty Burger', price: 159, image: "fds (3).jpg" },
    { name: 'Caramel Cheese Cake', price: 189, image: "fds (4).jpg" },
    { name: 'Indian Platter', price: 319, image: "fds (5).jpg" },
    { name: 'Crispy Chilli Babycorn', price: 129, image: "fds (6).jpg" }
];

function renderFoodItems(items) {
    const foodContainer = document.getElementById("foodContainer");
    foodContainer.innerHTML = '';

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('crd');

    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.name}</h2>
            <p>₹${item.price}</p>
            <button>Order Now</button>
        `;

        cardContainer.appendChild(card);
    });

    foodContainer.appendChild(cardContainer);
}

function applySort() {
    const sortOption = document.getElementById("sortOptions").value;

    let sortedItems = [...foodItems];

    if (sortOption === "lowToHigh") {
        sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
        sortedItems.sort((a, b) => b.price - a.price);
    }

    renderFoodItems(sortedItems);
}

document.addEventListener("DOMContentLoaded", function () {
    renderFoodItems(foodItems);
});

function myFun() {
    let searchVal = document.getElementById("inp").value.toUpperCase();
    let tr = document.getElementsByTagName("tr");

    let front = document.querySelector(".main")

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            let text = td.innerText;
            if (text.toLocaleUpperCase().indexOf(searchVal) > -1) {
                tr[i].style.display = "";
                front.style.display = "none"
            } else {
                tr[i].style.display = "none"
            }
        }
    }

    if (searchVal == "") {
        front.style.display = "flex"
    }
    console.log(searchVal);
}

function handleSearch(event) {
    if (event.key === 'Enter') {
        const searchKeyword = document.getElementById("searchInput").value.toLowerCase();

        let searchedItems = [...foodItems];

        if (searchKeyword) {
            searchedItems = searchedItems.filter(item => item.name.toLowerCase().includes(searchKeyword));
        }

        renderFoodItems(searchedItems);
    }
}

function handleSearchClick() {
    performSearch();
}

function performSearch() {
    const searchKeyword = document.getElementById("searchInput").value.toLowerCase();

    let searchedItems = [...foodItems];

    if (searchKeyword) {
        searchedItems = searchedItems.filter(item => item.name.toLowerCase().includes(searchKeyword));
    }

    renderFoodItems(searchedItems);
}

function nav() {
    let nav = document.querySelector(".nav");
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "block";
    } else {
        nav.style.display = "none";
    }
    let login = document.querySelector(".login");
    login.style.display = "none";

}

function login() {
    let login = document.querySelector(".login");
    if (login.style.display === "none" || login.style.display === "") {
        login.style.display = "block";
    } else {
        login.style.display = "none";
    }
    let nav = document.querySelector(".nav");
    nav.style.display = "none"
}


// Slide bar

let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function (customer, index) {
    customer.style.left = `${index * 100}%`
})

function next() {
    count++;
    if (count == slide.length) {
        count = 0;
    }
    bar()
}

function pre() {
    count--;
    if (count == -1) {
        count = slide.length - 1
    }
    bar()
}


function bar() {
    slide.forEach(function (customer) {
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}

let a = {
    greet: "HI"
}
let c;
c = a;
a.age = 11;

console.log(c.age);