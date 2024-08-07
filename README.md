# EduCounsel Pro

This repository contains the source code for **EduCounsel Pro**, a comprehensive Student Counseling and User Management System built with Node.js and Express. It features functionalities for handling payments, form submissions, user authentication, OTP management, and more. The project serves as a student counseling website for a university, facilitating both user and admin operations.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Dependencies](#dependencies)

## Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/Navnoorsinghmahal/EduCounsel-Pro.git
    cd EduCounsel-Pro
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    - Create a MySQL database.
    - Import the provided SQL file (if available) to set up the database schema.

## Configuration

- Ensure that your MySQL server is running and accessible.
- Configure your Razorpay credentials in the `app.js` file for payment processing.
- Configure your mail service credentials in the `app.js` file for Nodemailer setup.

## Usage

1. **Start the server:**
    ```sh
    npm run dev
    ```

2. **Access the application:**
    - User Interface: [http://localhost:3000](http://localhost:3000)
    - Admin Interface: [http://localhost:3000/admin](http://localhost:3000/admin)

## Features

- **User Authentication:** Signup, Login, Logout
- **Password Management:** Change Password, Forgot Password
- **Payment Processing:** Handle user payments
- **Form Submissions:** Manage user form submissions, including file uploads
- **OTP Management:** Verify OTP for password reset
- **Course Management:** Add and manage user course preferences
- **Marks Management:** Upload and manage student marks
- **Profile Management:** Update and retrieve user profile information
- **Dashboard Lock:** Lock user dashboard after completing required steps

## Folder Structure

```bash
edu-counsel-pro/
├── public/                 # Static files (CSS, JS, images)
├── routes/                 # Route definitions
│   ├── index.js            # User routes
│   └── admin.js            # Admin routes
├── views/                  # Template files
│   ├── user/               # User templates
│   └── admin/              # Admin templates
├── dbconnection/           # Database connection setup
│   └── connection.js
├── controllers/            # Controller files
│   ├── indexController.js  # User controller
│   └── adminController.js  # Admin controller
├── middleware/             # Middleware functions
├── app.js                  # Main application file
└── package.json            # Project metadata and dependencies
