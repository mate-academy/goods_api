Certainly! Here's the complete content for your `README.md` file in plain text format:

---

## Introduction
`goodsAPI` is a REST API developed using Node.js and Express, designed for managing goods and their associated colors. This document provides instructions on how to set up and run the API, along with documentation for its endpoints.

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone [repository-url]
   ```
2. **Navigate to the directory:**
   ```bash
   cd goodsAPI
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the server:**
    - For development (with hot-reload):
      ```bash
      npm run dev
      ```
    - For production:
      ```bash
      npm start
      ```

## API Endpoints

### 1. List of All Goods (GET `/goods`)

- **Request:** No parameters required.
- **Response:**
    - **Status Code:** 200 OK
    - **Data:**
      ```json
      [
        { "id": 1, "colorId": 1, "name": "Dumplings" },
        ...
        { "id": 10, "colorId": 1, "name": "Garlic" }
      ]
      ```

### 2. Get a Specific Good (GET `/goods/:id`)

- **Request:**
    - **Path Parameter:** `id` (integer, required)
- **Response:**
    - **Success:**
        - **Status Code:** 200 OK
        - **Data:** `{ "id": 1, "colorId": 1, "name": "Dumplings" }`
    - **Error (Good Not Found):**
        - **Status Code:** 404 Not Found
        - **Message:** `"Good not found"`

### 3. Add a New Good (POST `/goods`)

- **Request:**
    - **Body:** `{ "name": "New Good", "colorId": 2 }` (both fields required)
- **Response:**
    - **Success:**
        - **Status Code:** 201 Created
        - **Data:** `{ "id": [newly assigned ID], "name": "New Good", "colorId": 2 }`
    - **Error (Missing Name or Color):**
        - **Status Code:** 400 Bad Request
        - **Message:** `"Good name is required"` or `"Color not found"`

### 4. Update an Existing Good (PATCH `/goods/:id`)

- **Request:**
    - **Path Parameter:** `id` (integer, required)
    - **Body:** `{ "name": "Updated Name", "colorId": 3 }` (optional, at least one required)
- **Response:**
    - **Success:**
        - **Status Code:** 200 OK
        - **Data:** `{ "id": 1, "name": "Updated Name", "colorId": 3 }`
    - **Error (Good Not Found or Invalid Color):**
        - **Status Code:** 404 Not Found / 400 Bad Request
        - **Message:** `"Good not found"` / `"Color not found"`

### 5. Delete a Good (DELETE `/goods/:id`)

- **Request:**
    - **Path Parameter:** `id` (integer, required)
- **Response:**
    - **Success:**
        - **Status Code:** 204 No Content
    - **Error (Good Not Found):**
        - **Status Code:** 404 Not Found
        - **Message:** `"Good not found"`

### 6. List of All Colors (GET `/colors`)

- **Request:** No parameters required.
- **Response:**
    - **Status Code:** 200 OK
    - **Data:**
      ```json
      [
        { "id": 1, "name": "red" },
        ...
        { "id": 4, "name": "pink" }
      ]
      ```

### 7. Get a Specific Color (GET `/colors/:id`)

- **Request:**
    - **Path Parameter:** `id` (integer, required)
- **Response:**
    - **Success:**
        - **Status Code:** 200 OK
        - **Data:** `{ "id": 1, "name": "red" }`
    - **Error (Color Not Found):**
        - **Status Code:** 404 Not Found
        - **Message:** `"Color not found"`

---
