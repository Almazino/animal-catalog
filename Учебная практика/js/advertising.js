
    document.addEventListener('DOMContentLoaded', () => {
        const animals = [
            {
                species: "Собака",
                breed: "Лабрадор",
                age: 3,
                cost: 100,
                photo: "./images/img1.jpg"
            },
            {
                species: "Кошка",
                breed: "Персидская",
                age: 2,
                cost: 150,
                photo: "./images/img2.jpg"
            },
            {
                species: "Собака",
                breed: "Лабрадор",
                age: 3,
                cost: 100,
                photo: "./images/img1.jpg"
            },
            {
                species: "Кошка",
                breed: "Доберман",
                age: 2,
                cost: 150,
                photo: "./images/img2.jpg"
            },
            {
                species: "Собака",
                breed: "Лабрадор",
                age: 3,
                cost: 100,
                photo: "./images/img1.jpg"
            },
            {
                species: "Кошка",
                breed: "Персидская",
                age: 2,
                cost: 150,
                photo: "./images/img2.jpg"
            },
            {
                species: "Собака",
                breed: "Лабрадор",
                age: 3,
                cost: 100,
                photo: "./images/img1.jpg"
            },
            {
                species: "Кошка",
                breed: "Доберман",
                age: 2,
                cost: 150,
                photo: "./images/img2.jpg"
            },
        ];
        const animalList = document.getElementById('animalList');
        const animalDetails = document.getElementById('animalDetails');
        const backButton = document.getElementById('backButton');

        function displayAnimals(animals) {
            animalList.innerHTML = '';
            animals.forEach(animal => {
                const card = document.createElement('div');
                card.classList.add('card');
                const img = document.createElement('img');
                img.src = animal.photo;
                img.alt = animal.species;
                img.className = 'card__img';
                const species = document.createElement('span');
                species.textContent = `Вид: ${animal.species}`;
                species.className = 'card__name';
                const breed = document.createElement('span');
                breed.textContent = `Порода: ${animal.breed}`;
                const age = document.createElement('span');
                age.textContent = `Возраст: ${animal.age} года`;
                age.className = 'card__age';
                const cost = document.createElement('span');
                cost.textContent = `Цена: ${animal.cost} сом`;
                const button = document.createElement('button');
                button.type = 'button';
                button.textContent = 'Узнать больше';
                button.className = 'card__button';
                button.addEventListener('click', () => showAnimalDetails(animal));
                card.appendChild(img);
                card.appendChild(species);
                card.appendChild(breed);
                card.appendChild(age);
                card.appendChild(cost);
                card.appendChild(button);
                animalList.appendChild(card);
            });
        }

        function showAnimalDetails(animal) {
            document.getElementById('detailImg').src = animal.photo;
            document.getElementById('detailImg').alt = animal.species;
            document.getElementById('detailSpecies').textContent = `Вид: ${animal.species}`;
            document.getElementById('detailBreed').textContent = `Порода: ${animal.breed}`;
            document.getElementById('detailAge').textContent = `Возраст: ${animal.age} года`;
            document.getElementById('detailCost').textContent = `Цена: ${animal.cost} сом`;

            document.getElementById('bodyContent').style.display='none';
            document.getElementById('listContent').style.display='none';
            animalDetails.style.display = 'block';
        }

        backButton.addEventListener('click', () => {
            document.getElementById('bodyContent').style.display='flex'
            document.getElementById('listContent').style.display='flex'
            animalDetails.style.display = 'none';
        });
        displayAnimals(animals);
        const filterForm = document.getElementById('filterForm');
        filterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const filterBy = document.getElementById('filterOptions').value;
            const filterValue = document.getElementById('filterValue').value.toLowerCase();
            const filteredAnimals = animals.filter(animal => {
                if (filterBy === 'age') {
                    return animal.age == filterValue;
                } else {
                    return animal[filterBy].toLowerCase().includes(filterValue);
                }
            });
            displayAnimals(filteredAnimals);
        });
        const changeList = document.getElementById('showTypes');
        changeList.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const filterValue = event.target.textContent;
                const filteredAnimals = animals.filter(animal => {
                    return animal.breed.toUpperCase() === filterValue;
                });
                displayAnimals(filteredAnimals);
            }
        });
        const changeList2 = document.getElementById('showTypes2');
        changeList2.addEventListener('click', (event) => {
            if (event.target.tagName === 'BUTTON') {
                const filterValue2 = event.target.textContent;
                const filteredAnimals2 = animals.filter(animal => {
                    return animal.breed.toUpperCase() === filterValue2;
                });
                displayAnimals(filteredAnimals2);
            }
        });
    });

