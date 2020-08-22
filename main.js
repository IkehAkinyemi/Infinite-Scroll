//UI variables
let mContainer = document.querySelector('.container');
let firstUI = document.querySelector('.first');
let secondUI = document.querySelector('.second');
let thirdUI = document.querySelector('.third');
let text = document.querySelector('.text');
let UIloader = document.querySelector('.loading');

// Local variables
let num = 0;
let time = 1000;
let post = ['Third.png', 'Second.png', 'First.png'];
let postLimit = 5;

//Function causing an infinite posting, resulting in infinite scrolling
function myFunction() {
	setInterval(function() {
		setTimeout(function(){
			UIloader.style.display = 'none';
		}, 4000)
		let postsPerSeconds = Math.floor(Math.random() * postLimit);
		for(let x = 0; x < postsPerSeconds; x++) {
			let randomPost = Math.floor(Math.random() * (post.length));
			const generatedDIV = document.createElement('div');
			generatedDIV.className = 'first';
			const imgContainer = document.createElement('div');
			imgContainer.className = 'img-container';
			imgContainer.innerHTML = `<img src="${post[randomPost]}">`;
			let textContainer = document.createElement('div');
			textContainer.className = 'text';
			let para = document.createElement('p');
			para.textContent = `${text.firstElementChild.textContent}`;
			textContainer.appendChild(para);
			generatedDIV.appendChild(imgContainer);
			generatedDIV.appendChild(textContainer);
			mContainer.appendChild(generatedDIV);
		};
		setTimeout(function() {
			UIloader.style.display = 'block';
		}, 100)
	}, 2000)
};

//Load all available events
function loadEvents() {
	document.addEventListener('DOMContentLoaded', myFunction);
}
loadEvents();