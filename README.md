# iNotebook

iNotebook is a full-stack web application built with the MERN (MongoDB, Express.js, React, Node.js) stack. It provides users with a convenient way to manage their notes on the cloud. The application features user authentication using JWT (JSON Web Tokens) and bcrypt for secure access to user-specific notes. With iNotebook, users can perform CRUD (Create, Read, Update, Delete) operations on their notes, providing a seamless and intuitive note-taking experience.

## Key Features

- **User Authentication**: iNotebook implements secure user authentication using JWT (JSON Web Tokens) and bcrypt. Users can create accounts, log in securely, and manage their notes.
- **Note Management**: Users can perform CRUD operations on their notes, including creating new notes, viewing existing notes, updating note content, and deleting notes.
- **Responsive Design**: iNotebook is built with a responsive design, ensuring optimal user experience across different devices and screen sizes.
- **Bootstrap Framework**: The application utilizes the Bootstrap framework for a visually appealing and user-friendly interface.

## Tech Stack

- Front-end: React, HTML, CSS
- Back-end: Node.js, Express.js
- Database: MongoDB
- User Authentication: JWT, bcrypt
- Framework: Bootstrap

## Getting Started

Follow these instructions to get the iNotebook application up and running on your local machine:

1. Clone the repository: `git clone https://github.com/yourusername/iNotebook.git`
2. Navigate to the project directory: `cd iNotebook`
3. Install the dependencies: `npm install`
4. Create a `.env` file in the root directory and configure the following environment variables:
    - `PORT=3000`
    - `MONGODB_URI=your_mongodb_uri`
    - `JWT_SECRET=your_jwt_secret`
5. Start the application: `npm start`
6. Open your browser and visit `http://localhost:3000` to access the iNotebook application.

