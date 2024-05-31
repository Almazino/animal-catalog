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
    ];

    const bodyContent = document.getElementById('bodyContent');
    const listContent = document.getElementById('listContent');

    function displayAnimals(animals, species, breed, time, time2) {
        bodyContent.innerHTML = '';
        listContent.innerHTML = '';

        animals.forEach(animal => {
            if (animal.species === species && animal.breed === breed) {
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
                const backButton = document.createElement('button');
                backButton.textContent = 'На главную';
                backButton.className = 'backButton';

                backButton.addEventListener('click', () => {
                    bodyContent.innerHTML = time;
                    listContent.innerHTML = time2;
                });


                card.appendChild(img);
                card.appendChild(speciesElem);
                card.appendChild(breedElem);
                card.appendChild(ageElem);
                card.appendChild(costElem);
                card.appendChild(button);

                bodyContent.appendChild(card);
                bodyContent.appendChild(backButton);            }
        });
    }

    function displayBreeds(animals, species) {
        const time = bodyContent.innerHTML;
        const time2 = listContent.innerHTML;
        bodyContent.innerHTML = '';
        listContent.innerHTML = '';

        const breedCounts = {};
        animals.forEach(animal => {
            if (animal.species === species) {
                const breed = animal.breed;
                if (breedCounts[breed]) {
                    breedCounts[breed]++;
                } else {
                    breedCounts[breed] = 1;
                }
            }
        });

        for (const breed in breedCounts) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.breed = breed;

            const breedElem = document.createElement('span');
            breedElem.textContent = `Порода: ${breed}`;
            breedElem.className = 'card__name';

            const countElem = document.createElement('span');
            countElem.textContent = `Количество: ${breedCounts[breed]}`;

            card.appendChild(breedElem);
            card.appendChild(countElem);

            card.addEventListener('click', () => {
                displayAnimals(animals, species, breed, time, time2);
            });

            bodyContent.appendChild(card);
        }

        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = 'Back';
        button.className = 'backButton';
        button.id = 'backButton';

        bodyContent.appendChild(button);

        const backButt = document.getElementById('backButton');
        backButt.addEventListener('click', ev => {
            bodyContent.innerHTML = time;
            listContent.innerHTML = time2;
        });
    }

    const changeBody = document.getElementById('changeBody');
    changeBody.addEventListener("click", event => {
        const species = event.target.textContent.toUpperCase();

        switch (species) {
            case "СОБАКИ":
                displayBreeds(animals, "Собака");
                break;
            case "КОШКИ":
                displayBreeds(animals, "Кошка");
                break;
            case "ПТИЦЫ":
                displayBreeds(animals, "Птица");
                break;
            case "ГРЫЗУНЫ":
                displayBreeds(animals, "Грызун");
                break;
            case "РЫБКИ":
                displayBreeds(animals, "Рыба");
                break;
        }
    });
});
