
function getJoke() {

    let jokeElement = document.getElementById("joke");
    

    fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            //  the joke
            jokeElement.textContent = data.value;
        })
        .catch(function(error) {
            // an error
            jokeElement.textContent = "Failed to load joke.";
            console.log(error);
        });
}

getJoke();