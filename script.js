const chatBox = document.getElementById("chat-box");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");

function createChat(from, message) {
	const chat = document.createElement("span");
	chat.innerHTML = message;

	if (from === "bot") {
		chat.classList.add("bot");
	} else if (from === "user") {
		chat.classList.add("user");
	}

	chatBox.appendChild(chat);
	chatBox.scrollTo(0, chatBox.scrollHeight);
}

function botReply(message) {
	const replies = {
		halo: "Halo juga!",
		nama: "Nama aku Botam",
		salam: "Salam kenal juga",
		bertanya: "Boleh, mau nanya apa?",
		makanan: "Aku suka pisang dan apel :D",
		tinggal: "Rahasia dong",
		bye: "Sampai jumpa kembali!",

	};
	let words = message.split(" ");
	words = words.map((word) => word.toLowerCase());

	let replied = false;

	words.forEach((word) => {
		if (Object.keys(replies).includes(word)) {
			createChat("bot", replies[word]);
			replied = true;
			return;
		}
	});

	if (!replied) createChat("bot", "Maaf, saya tidak mengerti.");
}

function handleForm(e) {
	e.preventDefault();
	const message = chatInput.value;
	if (message === "") {
		return;
	} else {
		createChat("user", message);
	}
	chatInput.value = "";
	setTimeout(() => botReply(message), 500);
}

chatForm.addEventListener("submit", handleForm);
const newYear=new Date(2023,0,1,)
const dayHolder=document.querySelector(".days")
const hourHolder=document.querySelector(".hours")
const minHolder=document.querySelector(".mins")
const secHolder=document.querySelector(".secs")

function updateTime(){
const difference=new Date(newYear - new Date())
console.log(difference.getTime().toString())
dayHolder.textContent=(difference.getTime().toString().split("").splice(0,2).join("")).toLocaleString('en-US', {minimumIntegerDigits: 2})
hourHolder.textContent=difference.getHours().toLocaleString('en-US', {minimumIntegerDigits: 2})
minHolder.textContent=difference.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2})
secHolder.textContent=difference.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2})
secHolder.setAttribute("data-active",difference.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2}))
}

setInterval(()=>{
updateTime()
},
	    
500
)
