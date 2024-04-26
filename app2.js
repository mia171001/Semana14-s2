const btnAPI = document.getElementById('btnAPI');
const userInfo = document.getElementById('userInfo');
const loader = document.getElementById('loader');
const userError = document.getElementById('userError');

btnAPI.addEventListener('click', readUsers);

async function readUsers(e) {
    // Mostrar el loader
    loader.classList.remove('hidden');

    try {
        const request = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await request.json();
        loader.classList.add('hidden');
        printHTML(data);
    } catch (error) {
        loader.classList.add('hidden');
        printError(error);
    }
}

function printHTML(data) {
    userInfo.innerHTML = ''; // Limpiar cualquier contenido anterior
    userInfo.style.display = 'block';
    data.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = `Nombre: ${user.name}, Email: ${user.email}`;
        userInfo.appendChild(userElement);
    });
}

function printError() {
    userError.innerHTML = '';
    userError.style.display = 'block';
    const error2 = document.createElement('p');
    error2.textContent = 'Error al cargar datos!!';
    userError.appendChild(error2);
}
