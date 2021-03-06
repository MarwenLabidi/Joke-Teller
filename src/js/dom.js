const buttontellMe = document.querySelector('#tellMe');

// get the joke from joke api

const speech = (data) => {
	VoiceRSS.speech({
		key: 'e8fba84f89544318b3e7ec3b1e529e83',
		src: data,
		hl: 'en-us',
		v: 'Linda',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false
	});
}

let jokePunchline = null

const getJoke = async () => {
	const data = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
	const joke = await data.json();
	jokePunchline = joke.joke;
}


buttontellMe.addEventListener('click', () => {
	//mouse click sound
	const audio = new Audio('/Mouse-Click-00-c-FesliyanStudios.com.mp3');
	audio.play();
	//tell me joke
	getJoke().then(() => {
		speech(jokePunchline);
	})
})