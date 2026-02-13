const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value) {
    addMessage("You: " + input.value);
    socket.emit("chat-message", input.value);
    input.value = "";
  }
});

socket.on("chat-message", (msg) => {
  addMessage("Friend: " + msg);
});

function addMessage(text) {
  const li = document.createElement("li");
  li.textContent = text;

  // 👇 inline styles (NO CSS used)
  li.style.color = "white";
  li.style.fontSize = "16px";
  li.style.marginBottom = "10px";
  li.style.listStyle = "none";

  messages.appendChild(li);
}

