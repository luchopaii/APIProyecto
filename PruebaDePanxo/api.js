function getJoke() {
    const jokeArea = document.getElementById('jokeArea'); 
    const apiUrl = 'https://api.chucknorris.io/jokes/random';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            jokeArea.value = data.value; 
        })
        .catch(error => {
            console.error('Error fetching the joke:', error);
            jokeArea.value = 'Failed to fetch a joke. Please try again.';
        });
}

document.getElementById('clear').addEventListener('click', () => {
    const jokeArea = document.getElementById('jokeArea');
    jokeArea.value = ''; 
});