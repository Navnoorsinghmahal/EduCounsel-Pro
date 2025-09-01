# EduCounsel Pro

This repository contains the source code for EduCounsel Pro, a comprehensive student counseling system for universities, built with Node.js and Express. It features functionalities for handling payments, form submissions, user authentication, OTP management, and more, with separate interfaces for admin and users.

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

2. **Option A: Install dependencies:**
    ```sh
    npm install
    ```
**Option B: Using Docker**
    ```sh
    docker build -t edu-app .
    docker run -p 3000:3000 edu-app
    ```
    > The app will start at [http://localhost:3000](http://localhost:3000) and connect to your MySQL database.

3. **Set up the database:**
    - Create a MySQL database.
    - Import the provided SQL file (if available) to set up the database schema.

## Configuration

- Ensure that your MySQL server is running and accessible.
- Configure your Razorpay credentials for payment processing.
- Configure your mail service credentials for Nodemailer setup.

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
- **Password Management:** Change Password, Forgot Password with OTP
- **Application Management:** Complete applications, fill degree preferences, submit mark sheets
- **Payment Processing:** Handle user payments, view payment history
- **Profile Management:** Update and retrieve user profile information
- **Admin Management:** Manage active staff, open admission slots by degree, view student details, send offers based on preferences
- **Offer Letters:** Send offer letters to students with required details

## Folder Structure

```bash
EduCounsel-Pro/
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
│   ├── usercontroller.js   # User controller
│   └── admincontroller.js  # Admin controller
├── middleware/             # Middleware functions
├── .env                    # Environment variables
├── app.js                  # Main application file
└── package.json            # Project metadata and dependencies
```
## API Endpoints

### User Endpoints

- **GET /** - User homepage
- **GET /signup** - User signup page
- **POST /signupAction** - Handle user signup
- **GET /login-user** - User login page
- **POST /user-login** - Handle user login
- **GET /user-dashboard** - User dashboard
- **GET /admission** - Admission instructions page
- **GET /admission-form** - Admission form page
- **GET /profile** - User profile page
- **GET /user-logout** - Handle user logout
- **GET /user-forgot** - Forgot password page
- **POST /userForgotPassword** - Handle forgot password
- **GET /user-changePassword** - Change password page
- **POST /change-password** - Handle password change
- **GET /userChangeForgotPassword** - Change password via forgot password
- **POST /userChangeForgotPassword** - Handle change password via forgot password
- **POST /userVerifyOtp** - Verify OTP
- **GET /user-pending** - Pending applications page
- **GET /user-confirmed** - Confirmed applications page
- **GET /check-pref** - Check degree preferences
- **GET /checkData** - Check user data
- **GET /lock-dash** - Lock user dashboard after completing required steps
- **POST /submit** - Submit admission form
- **POST /update-profile** - Update user profile
- **GET /read-profile** - Read user profile
- **POST /add-course** - Add course preferences
- **GET /read-courses** - Read available courses
- **POST /add-marks1** - Add marks (PCM)
- **POST /add-marks2** - Add marks (Non-PCM)
- **POST /add-marks3** - Add postgraduate marks
- **GET /student-paid/:fee** - Handle student fee payment

### Admin Endpoints

- **GET /admin** - Admin login page
- **POST /login** - Handle admin login
- **GET /admin-dashboard** - Admin dashboard
- **GET /admin-logout** - Handle admin logout
- **GET /admin-forgot** - Admin forgot password page
- **POST /admin-forgot-pass** - Handle admin forgot password
- **GET /admin-otp/:email** - Admin OTP verification page
- **POST /admin-otp/:email** - Handle admin OTP verification
- **GET /admin-newpass/:email** - Admin new password page
- **POST /change-adminotp-password/:email** - Handle admin OTP password change
- **GET /admin-user** - Admin users management page
- **POST /add-admin** - Add new admin
- **GET /admin-course** - Admin course management page
- **POST /add-admin-course** - Add new course
- **POST /update-course** - Update course details
- **GET /admin-seat-allotment** - Admin seat allotment page
- **POST /add-admin-seats** - Add seat allotment
- **POST /update-seat** - Update seat details
- **GET /seat-alloted** - Alloted seat page
- **GET /read-course** - Read course details
- **GET /read-seat/:id** - Read seat details
- **POST /update_address/:id** - Update admin address
- **POST /update_degree** - Update admin degree
- **POST /update_photo** - Update admin photo
- **POST /update_signature** - Update admin signature
- **GET /allotted** - Allotted seats
- **GET /get-course-name/:id** - Get course name by ID
- **GET /getcourses/:degName** - Get courses by degree name
- **POST /getcourses** - Get courses
- **POST /seat-search** - Seat search
- **POST /Allotted-seat-search** - Allotted seat search
- **POST /update_personal_info** - Update personal information
- **GET /read-user** - Read user information
- **POST /allot-seat/:student_id** - Allot seat to student
- **GET /delete-course/:id** - Delete course
- **GET /inactive/:id** - Mark course as inactive
- **GET /active/:id** - Mark course as active
- **GET /send-email/:student_id** - Send email to student
- **GET /get-payment-info/:student_id** - Get payment information for student
- **GET /read-student-payment/:student_id** - Read student payment details
- **POST /pay-fee** - Handle fee payment
- **POST /pay-fee-online** - Handle online fee payment
- **GET /read-student** - Read student details
- **GET /read-student-confirm** - Read confirmed student details
- **GET /user-pending** - View pending users
- **GET /user-confirmed** - View confirmed users

## Dependencies

EduCounsel Pro relies on the following dependencies:

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- **MySQL**: A popular relational database management system used to manage and store the application's data.
- **Nodemailer**: A module for Node.js applications to send emails, used for handling email notifications and password resets.
- **Razorpay**: A payment gateway service integrated for processing payments.
- **jsonwebtoken**: A library for creating and verifying JSON Web Tokens for authentication.
- **dotenv**: A module to load environment variables from a `.env` file into `process.env`.
- **body-parser**: Middleware to handle incoming request data, such as form submissions.
- **mysql2**: A MySQL client for Node.js with Promise support.

