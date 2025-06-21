# Task Management API
This is a simple RESTful API for managing a to-do list, built with Node.js, Express, and MongoDB.

## Features
*   Create, Read, Update, and Delete (CRUD) operations for to-do items.
*   Pagination for listing to-do items.

## Prerequisites

*   Node.js
*   npm (Node Package Manager)
*   MongoDB

## Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/poonampadmani/task-management.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd task-management
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Create a `.env` file in the root of the project and add the following environment variables:
    ```
    MONGO_URI=mongodb://127.0.0.1:27017/tododb
    PORT=3000
    ```

## Usage

To start the server, run the following command:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

All endpoints are relative to `/api/todos`.

### Create a To-Do

*   **POST** `/`
*   **Description:** Creates a new to-do item.
*   **Request Body:**
    ```json
    {
        "title": "My first to-do",
        "description": "This is a description."
    }
    ```
*   **Response:** The created to-do object.

### List To-Dos

*   **GET** `/`
*   **Description:** Retrieves a paginated list of to-do items.
*   **Query Parameters:**
    *   `page` (optional): The page number to retrieve. Defaults to `1`.
*   **Response:** An object containing the total number of to-dos, the current page, and an array of to-do items.

### Update a To-Do

*   **PUT** `/:id`
*   **Description:** Updates an existing to-do item.
*   **Parameters:**
    *   `id`: The ID of the to-do item to update.
*   **Request Body:** The fields to update.
    ```json
    {
        "completed": true
    }
    ```
*   **Response:** The updated to-do object.

### Delete a To-Do

*   **DELETE** `/:id`
*   **Description:** Deletes a to-do item.
*   **Parameters:**
    *   `id`: The ID of the to-do item to delete.
*   **Response:** A confirmation message.

## Note

This project has been tested and is confirmed to be running on a local machine. Below are references to successful tests using Postman for the API endpoints and MongoDB Compass for database verification.

See below images

For [Postman Test]: postman_screenshot.png

For [MongoDB Data]: mongodb_screenshot.png
``` 