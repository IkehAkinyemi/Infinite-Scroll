let mContainer = document.querySelector('.container');
let firstUI = document.querySelector('.first');
let secondUI = document.querySelector('.second');
let thirdUI = document.querySelector('.third');
let text = document.querySelector('.text');

let num = 0;
let time = 1000;
let post = ['Third.png', 'Second.png', 'First.png'];

 function myFunction() {
	setInterval(function() {
		let randomPost = Math.floor(Math.random() * ( post.length));
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
	}, 3000)
 }


function loadEvents() {
	document.addEventListener('DOMContentLoaded', myFunction);
}
loadEvents();