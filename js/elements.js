// This file is dedicated for the creation of HTML elements
// I wanted a place to create HTML/CSS documents in Javascript

let cssDomCreator = (function () {	
	let winningMessage = (function () {
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
	
		document.body.appendChild(messageBox);
	});
	
	let startMessage = (function () {
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
		
		document.body.appendChild(messageBox);
	});
	
	return {
		winningMessage: winningMessage,
		startMessage: startMessage
	}
})();