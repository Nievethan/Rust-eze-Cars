let listCarHTML = document.querySelector('.carList');

let listCar = [];

const addDataToHTML = () => {
    listCarHTML.innerHTML = '';
    if (listCar.length > 0) {
        listCar.forEach(car => {
            let newCar = document.createElement('div');
            newCar.classList.add('car')
            newCar.innerHTML = `
            <img src="${car.image}" class="pic" alt="Lightning McQueen">
            <h2>${car.name}</h2>
            <div class="price"><img src="Images/PistonCup.webp" class="PistonCup" alt="PistonCup">${car.price}</div>
            `;
            listCarHTML.appendChild(newCar);
        });
    }
};

const initApp = () => {
    fetch('Cars.json')
    .then(response => response.json())
    .then(data => {
        listCar = data;
        addDataToHTML();
    });
};

initApp();