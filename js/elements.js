// This file is dedicated for the creation of HTML elements
// I wanted a place to create HTML/CSS documents in Javascript

let cssDomCreator = (function () {	
	let winningMessage = (function () {
		let canvas = document.querySelector("canvas");

		let wrapper = document.createElement("div");
		wrapper.setAttribute("id", "wrapper");

		let messageBox = document.createElement("div");
		messageBox.setAttribute("id", "winner");
		
		let winningText = document.createElement("p");
		winningText.setAttribute("class", "title");
		winningText.innerHTML = "You did it!";
		messageBox.appendChild(winningText);
		
		let winningTextInput = document.createElement("p");
		winningTextInput.setAttribute("class", "subtitle");
		winningTextInput.innerHTML = "(Spacebar to Restart!)";
		messageBox.appendChild(winningTextInput);

		wrapper.appendChild(messageBox);
		document.body.insertBefore(wrapper, document.body.childNodes[0]);
	});
	
	let startMessage = (function () {
		let wrapper = document.createElement("div");
		wrapper.setAttribute("id", "wrapper");

		let messageBox = document.createElement("div");
		messageBox.setAttribute("id", "start");
		
		let startText = document.createElement("p");
		startText.setAttribute("class", "title");
		startText.innerHTML = "GAME START";
		messageBox.appendChild(startText);
		
		let startTextInput = document.createElement("p");
		startTextInput.setAttribute("class", "subtitle");
		startTextInput.innerHTML = "(Spacebar to Start!)";
		messageBox.appendChild(startTextInput);
		
		wrapper.appendChild(messageBox);
		document.body.appendChild(wrapper);
	});
	
	return {
		winningMessage: winningMessage,
		startMessage: startMessage
	}
})();