<img width="944" height="640" alt="image" src="https://github.com/user-attachments/assets/10ebad01-8921-4750-a7ae-4171c443f4f9" /># Finance Data Processing and Access Control Backend

## Project Overview

This project implements a backend system for managing financial records with role-based access control. The system allows users to register, login, manage financial records, filter records, and view dashboard summaries based on their roles.

The backend is built using Node.js, Express.js, MongoDB, and JWT authentication, and follows a structured architecture using routes, controllers, models, and middleware.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Render (Deployment)
* GitHub (Version Control)

---

## Deployed API

Base URL:
https://finance-backend-8lws.onrender.com

---

## Features

* User Authentication (JWT)
* Role-Based Access Control (Admin, Analyst, Viewer)
* Financial Records CRUD Operations
* Record Filtering (by type and category)
* Dashboard Summary APIs
* Category-wise Summary
* User Management
* Input Validation
* Error Handling
* MongoDB Data Persistence
* REST API Architecture
* Backend Deployment on Render

---

## Project Structure

```
config/        -> Database connection
controllers/   -> Business logic
models/        -> Database schemas
routes/        -> API routes
middleware/    -> Authentication and role middleware
app.js         -> Entry point
```

---

## API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login

### Records

POST /api/records
GET /api/records
PUT /api/records/:id
DELETE /api/records/:id
GET /api/records/filter/search

### Dashboard

GET /api/dashboard/summary
GET /api/dashboard/category-summary

### Users

GET /api/users
PUT /api/users/:id
DELETE /api/users/:id

---

## API Testing Guide

Base URL:
https://finance-backend-8lws.onrender.com

All protected routes require a JWT token in the request header:
Authorization: <token>

### Step 1: Register Admin User

POST /api/auth/register

Body:
{
"name": "Admin",
"email": "[admin@test.com](mailto:admin@test.com)",
"password": "123456",
"role": "admin"
}

### Step 2: Login

POST /api/auth/login

Body:
{
"email": "[admin@test.com](mailto:admin@test.com)",
"password": "123456"
}

Copy the token returned and use it in Authorization header.

### Step 3: Create Financial Record

POST /api/records

Body:
{
"amount": 5000,
"type": "income",
"category": "Salary",
"date": "2024-01-10",
"notes": "January Salary"
}

### Step 4: Get Records

GET /api/records

### Step 5: Filter Records

GET /api/records/filter/search?type=expense
GET /api/records/filter/search?category=Food

### Step 6: Dashboard Summary

GET /api/dashboard/summary

### Step 7: Category Summary

GET /api/dashboard/category-summary

### Step 8: User Management (Admin only)

GET /api/users
PUT /api/users/:id
DELETE /api/users/:id

---

## Role-Based Access

| Role    | Permissions                          |
| ------- | ------------------------------------ |
| Admin   | Full access (CRUD records and users) |
| Analyst | View records and dashboard           |
| Viewer  | View dashboard only                  |

---

## How to Run Locally

1. Clone repository
2. Install dependencies using `npm install`
3. Create `.env` file and add:
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
4. Run server using:
   npm run dev

---

## Author

Dhruv Gupta
