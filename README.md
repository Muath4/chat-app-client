# Chat App with Next.js, React, and .NET SignalR
This is a simple chat application built with Next.js, React, and .NET SignalR. The app allows users to enter their name and join or create chat rooms with unique room IDs. Inside a room, users can send messages, see a list of participants, and leave the room. This application is part of my portfolio demonstrating my proficiency in web development.

### You can find a live demo [here](https://muath4.github.io/) 

**Note**: This repository contains the frontend code. The .NET backend code can be found in a separate repository: https://github.com/Muath4/chat-app-backend

## Features
User authentication with name input
Unique room ID creation
Real-time messaging with .NET SignalR
Display participant count in chat rooms
Option to leave chat room
Responsive user interface
## Getting Started
To get started with running the application locally, follow these steps:

### Installation
1. Clone both the frontend and backend repositories:
- git clone https://github.com/Muath4/chat-app-client.git
- git clone https://github.com/Muath4/chat-app-backend.git
2. Install the frontend dependencies:
- cd chat-app
- npm install
3. Install the backend dependencies:
- cd ../chat-app-backend
- dotnet restore

### Running the Application
1- Start the backend server by running the following command inside the chat-app-backend directory:
- dotnet run
2- Start the frontend development server by running the following command inside the chat-app directory:
- npm run dev
3- Open your browser and visit http://localhost:3000 to access the chat app. The backend server is accessible at https://mchatapp.azurewebsites.net/chatHub.

## Deployment
To deploy the application, follow the instructions for your preferred hosting platform. Below are guides for deploying Next.js applications to some popular platforms:

- Vercel
- Netlify
- Heroku
For deploying the .NET backend, refer to the official Microsoft documentation.

## Contributing
If you're interested in contributing to this project, feel free to submit a pull request or open an issue for discussion.

## Acknowledgements
- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [.NET](https://dotnet.microsoft.com/en-us/)
- [SignalR](https://learn.microsoft.com/en-us/aspnet/signalr/)

