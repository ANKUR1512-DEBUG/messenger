# Messenger Web App

A real-time web-based messaging application built using **Node.js, Express.js, and Socket.IO**. The application enables multiple users to communicate instantly through a simple browser-based chat interface.

## 🚀 Features

* Real-time messaging using Socket.IO
* Multiple users can communicate simultaneously
* Instant message broadcasting
* Client connection and disconnection handling
* Simple web-based chat interface
* Static frontend served using Express
* Ready for deployment on platforms such as Render

## 🛠️ Tech Stack

* **HTML, CSS, JavaScript** — Frontend
* **Node.js** — Runtime environment
* **Express.js** — Web server and static file serving
* **Socket.IO** — Real-time bidirectional communication

## 📁 Project Structure

```text
Messenger/
│
├── common/
│   └── layout.html
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ How It Works

The application uses Socket.IO to establish a persistent connection between the browser and the server.

When a user sends a message:

1. The client emits a `chat-message` event.
2. The server receives the message.
3. Socket.IO broadcasts the message to the other connected users.
4. Other users receive the message instantly without refreshing the page.

```text
User A
   │
   │ chat-message
   ▼
Node.js + Socket.IO Server
   │
   │ broadcast
   ▼
User B ─── User C ─── User D
```

## 📦 Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd Messenger
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

The application will run at:

```text
http://localhost:3000
```

Open the application in multiple browser tabs or devices to test real-time messaging.

## 🔌 Socket.IO Events

### `connection`

Triggered whenever a new user connects to the server.

### `chat-message`

Used to send and broadcast chat messages.

```javascript
socket.on("chat-message", (msg) => {
    socket.broadcast.emit("chat-message", msg);
});
```

### `disconnect`

Triggered when a user leaves the application or loses their connection.

## 🌐 Deployment

The server is configured to use the port provided by the hosting platform:

```javascript
const PORT = process.env.PORT || 3000;
```

This makes the application suitable for deployment on platforms such as **Render**.

## 🔮 Future Improvements

* User authentication and registration
* Private one-to-one conversations
* Online/offline user status
* Typing indicators
* Message timestamps
* Persistent message storage using MongoDB
* Message history
* Emoji and file sharing
* Read receipts
* Responsive mobile UI

## 👨‍💻 Author

**Ankur Sinha**

Built as a real-time web development project to learn and implement **Socket.IO, Express.js, and client-server communication**.
