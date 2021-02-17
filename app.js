const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addNewJoke = async () => {
    const addJokeText = await getDadJokes();
    const newLI = document.createElement('li');
    newLI.append(addJokeText);
    jokes.append(newLI);
}


const getDadJokes = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    return res.data.joke;
}

button.addEventListener('click', addNewJoke)