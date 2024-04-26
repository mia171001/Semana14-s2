const axios = require('axios');

async function readUsers() {
    printLoader();
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(printHTML(data));
    } catch (error) {
        printError(error);
    } finally {
        console.log('Se acabo');
    }
}

function printHTML(data) {
    console.log(data);
}

function printError(error) {
    console.log(error);
}

function printLoader() {
    console.log('Loader');
}

readUsers();
