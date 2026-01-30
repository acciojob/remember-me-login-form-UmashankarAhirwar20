//your JS code here. If required.
let submitBtn = document.getElementById("submit");
let nameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let checkbox = document.getElementById("checkbox");
let existingBtn = document.getElementById("existing");
let form = document.querySelector("form");


const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

if(savedPassword && savedUsername){
	existingBtn.style.display = "inline-block";
}

form.addEventListener("submit", (e) => {
	e.preventDefault();
	
	let name = nameInput.value;
	let password = passwordInput.value;
	
	alert(`Logged in as ${name}`);

	if(checkbox.checked){
		localStorage.setItem("username", name);
		localStorage.setItem("password", password);
		existingBtn.style.display = "inline-block";
	} else {
		localStorage.removeItem("username");
		localStorage.removeItem("password");
		existingBtn.style.display = "none";
	}
})

existingBtn.addEventListener("click", () => {
	const storedUsername = localStorage.getItem("username");
	if(storedUsername){
		alert(`Logged in as ${storedUsername}`);
	}
	
	
})