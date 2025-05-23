# Booking API

This is a RESTful API for managing users, activities, and bookings. The API is built using Node.js, Express, and MongoDB.

## Project Structure

The project is organized into the following folders:

### Root Files
- **`app.js`**: Initializes the Express app, sets up middleware, and defines routes.
- **`server.js`**: Starts the server and connects to the database.
- **`package.json`**: Contains project metadata and dependencies.

### Config
- **`config.env`**: Contains environment variables (e.g., database connection string, JWT secret). This file is ignored by Git.

### Controllers
- **`activityController.js`**: Handles activity-related operations such as adding and retrieving activities.
- **`bookingController.js`**: Handles booking-related operations such as booking an activity.
- **`user.js`**: Handles user-related operations such as registration, login, and profile management.

### Database
- **`Database.js`**: Establishes a connection to the MongoDB database.

### Middlewares
- **`auth.js`**: Middleware for user authentication and authorization.
- **`error.js`**: Middleware for handling errors globally.

### Models
- **`activityModel.js`**: Defines the schema and model for activities.
- **`bookingModel.js`**: Defines the schema and model for bookings.
- **`user.js`**: Defines the schema and model for users.

### Routers
- **`activityRoutes.js`**: Defines routes for activity-related operations.
- **`bookingRoutes.js`**: Defines routes for booking-related operations.
- **`user.js`**: Defines routes for user-related operations.

### Utils
- **`catchAsyncError.js`**: Utility for handling asynchronous errors in controllers.
- **`ErrorHandler.js`**: Custom error handler class.
- **`features.js`**: Contains utility functions like `sendCookie` for sending cookies.

### Other Files
- **`.gitIgnore`**: Specifies files and folders to be ignored by Git (e.g., `node_modules`, `config.env`).

## API Endpoints

### User Routes
- **POST `/users/new`**: Register a new user.
- **POST `/users/login`**: Log in a user.
- **GET `/users/me`**: Get the logged-in user's profile (requires authentication).
- **GET `/users/logout`**: Log out the user (requires authentication).

### Activity Routes
- **POST `/activity/add/activitie`**: Add a new activity (requires authentication).
- **GET `/activity/activities`**: Get all activities.

### Booking Routes
- **POST `/book/booking/:activityId`**: Book an activity (requires authentication).

## Environment Variables

The following environment variables are required:
- **`PORT`**: Port number for the server.
- **`DATA_BASE`**: MongoDB connection string.
- **`JWT_SECRET`**: Secret key for signing JWT tokens.

## Installation and Usage

1. Clone the repository:
   ```sh
   git clone https://github.com/Ashis2002/project.git
   cd todoapp-master

2. Install dependencies:
   ```sh
   npm install

3. Create a .env file in the Config folder and add the required environment variables.

4. Start the server:
   ```sh
   npm start
