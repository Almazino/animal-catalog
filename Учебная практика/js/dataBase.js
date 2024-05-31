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

    const bodyContent = document.getElementById('bodyContent');
    const listContent = document.getElementById('listContent');
    const inputValue = document.getElementById('inputSearch');

    function displayAnimals(animals) {
        bodyContent.innerHTML = '';
        listContent.innerHTML = '';
        animals.forEach(animal => {
            const card = document.createElement('div');
            card.classList.add('card');

            const img = document.createElement('img');
            img.src = animal.photo;
            img.alt = animal.species;
            img.className = 'card__img';

            const speciesElem = document.createElement('span');
            speciesElem.textContent = `Вид: ${animal.species}`;
            speciesElem.className = 'card__name';

            const breedElem = document.createElement('span');
            breedElem.textContent = `Порода: ${animal.breed}`;

            const ageElem = document.createElement('span');
            ageElem.textContent = `Возраст: ${animal.age} года`;
            ageElem.className = 'card__age';

            const costElem = document.createElement('span');
            costElem.textContent = `Цена: ${animal.cost} сом`;

            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = 'Узнать больше';
            button.className = 'card__button';

            card.appendChild(img);
            card.appendChild(speciesElem);
            card.appendChild(breedElem);
            card.appendChild(ageElem);
            card.appendChild(costElem);
            card.appendChild(button);

            bodyContent.appendChild(card);
        });
    }

    const addButton = document.getElementById('addButton');
    const addAnimalForm = document.getElementById('addAnimalForm');
    const submitAnimalButton = document.getElementById('submitAnimalButton');
    const speciesInput = document.getElementById('speciesInput');
    const breedInput = document.getElementById('breedInput');
    const ageInput = document.getElementById('ageInput');
    const costInput = document.getElementById('costInput');
    const photoInput = document.getElementById('photoInput');

    function toggleAddAnimalForm() {
        if (addAnimalForm.style.display === 'none') {
            addAnimalForm.style.display = 'block';
        } else {
            addAnimalForm.style.display = 'none';
        }
    }

    addButton.addEventListener('click', toggleAddAnimalForm);

    function addAnimal() {
        const newAnimal = {
            species: speciesInput.value.trim(),
            breed: breedInput.value.trim(),
            age: parseInt(ageInput.value.trim()),
            cost: parseInt(costInput.value.trim()),
            photo: photoInput.value.trim()
        };

        animals.push(newAnimal);
        displayAnimals(animals);
        toggleAddAnimalForm();
    }

    submitAnimalButton.addEventListener('click', addAnimal);

    const buttonSearch = document.getElementById('buttonSearch');
    buttonSearch.addEventListener('click', () => {
        const searchValue = inputValue.value.trim().toLowerCase();
        const filteredAnimals = animals.filter(animal => {
            return animal.species.toLowerCase().includes(searchValue) ||
                animal.breed.toLowerCase().includes(searchValue) ||
                animal.age.toString().includes(searchValue) ||
                animal.cost.toString().includes(searchValue);
        });
        displayAnimals(filteredAnimals);
    });
});
