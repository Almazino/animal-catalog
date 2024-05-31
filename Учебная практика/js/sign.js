window.addEventListener("DOMContentLoaded", (event) => {
    const defaultPeople = [
        {
            email: "almazmarlisov7@gmail.com",
            password: "Almaz112211",
            favoritesAnimalId: [],
            phoneNumber: "996702295084"
        },
    ];

    const storedPeople = localStorage.getItem('people');
    const people = storedPeople ? JSON.parse(storedPeople) : defaultPeople;

    const signButton = document.getElementById('signButton');
    signButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        let emailExists = false;

        people.forEach(person => {
            if (person.email === email) {
                emailExists = true;
            }
        });

        if (emailExists) {
            alert("This email is already in use. Please use a different email.");
        } else {
            const password = document.getElementById('password').value;
            const number = document.getElementById('number').value;
            people.push({
                email: email,
                password: password,
                favoritesAnimalId: [],
                phoneNumber: number
            });
            document.getElementById('id01').style.display = 'none';
            localStorage.setItem('people', JSON.stringify(people));
        }
    });
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', (event) => {
        event.preventDefault();
        const email = document.getElementById('emailLogin').value;
        const password = document.getElementById('passwordLogin').value;
        let validUser = false;
        document.getElementById('heartButton').style.display='none'
        people.forEach(person => {
            if (person.email === email && person.password === password) {
                validUser = true;

                const personContent = document.getElementById('upi');
                const Plist = document.createElement('div');
                Plist.classList.add('Plist');
                const backButton = document.createElement('button');
                backButton.type = 'button';
                backButton.id = "backButt";
                backButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="25" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>`;
                const header = document.createElement('h1');
                header.textContent = `Добро пожаловать ${person.email}`;
                const phone = document.createElement('p');
                phone.textContent = `Ваш номер: ${person.phoneNumber}`;
                Plist.appendChild(header);
                Plist.appendChild(backButton);
                Plist.appendChild(phone);
                personContent.appendChild(Plist);
                backButton.addEventListener('click', () => {
                    document.getElementById('upi').style.display = 'none';
                    document.getElementById('bodyContent').style.display = 'flex';
                    document.getElementById('listContent').style.display = 'flex';
                });
            }
        });

        if (!validUser) {
            alert("Invalid email or password.");
        } else {
            document.getElementById('id02').style.display = 'none';
            document.querySelector('.navbar__cab button[onclick*="id01"]').style.display = 'none';
            document.querySelector('.navbar__cab button[onclick*="id02"]').style.display = 'none';
            document.getElementById('userIcon').style.display = 'block';
        }
    });

    const userPageButton = document.getElementById('userPageButton');
    userPageButton.addEventListener('click', (event) => {

        document.getElementById('bodyContent').style.display = 'none';
        document.getElementById('listContent').style.display = 'none'
        document.getElementById('upi').style.display = 'block';

    });
});

