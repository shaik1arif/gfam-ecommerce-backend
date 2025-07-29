# GFam Ecommerce Backend

A simple Express.js backend that supports registration, login, and basic product management using in-memory storage and JWT-based authentication.

## Tech Stack

- Node.js
- Express.js
- JWT for authentication
- CORS
- dotenv

## Project Structure

```
src/
├── components/ # Reusable UI components (e.g., Navbar)
├── pages/ # Page components (Login, Register, Dashboard, etc.)
├── utils/ # Helper functions or auth logic
├── assets/ # Static files/images (optional)
├── App.jsx
├── main.jsx
├── index.css
```

## Endpoints Overview

### Auth

- `POST /register`  
  Register a new user (requires name, email, password)

- `POST /login`  
  Logs in an existing user and returns a JWT token

### Products

- `GET /projects`  
  Get all product cards

- `POST /projects`  
  Create a new product (requires Authorization header)

- `DELETE /projects/:id`  
  Delete a product by ID (requires Authorization header)

## Setup Instructions

1. Clone the repository  
   `git clone https://github.com/shaik1arif/gfam-ecommerce-backend.git`

2. Install dependencies  
   `npm install`

3. Create a `.env` file with the following content:  
    JWT_SECRET=your_secret_key

4. Start the backend server  
`node server.js`  
The server will run at: `http://localhost:5000`
