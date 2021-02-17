const jokes = document.querySelector('#jokes');


const getDadJokes = async () => {
    const config = { headers: { Accept: 'application/json' } }
    const res = await axios.get('https://icanhazdadjoke.com/', config)
    const newLI = document.createElement('li');
    newLI.append(res.data.joke);
    jokes.append(newLI);
}