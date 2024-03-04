##Building a RESTful API with Node.js and Express This is a RESTful API for managing a blog application. Users can register, log in, create, update, and delete blog posts.<br>

#Project Structure The project structure is organized as follows:<br>

##Controllers: Contains controller functions to handle requests.<br> ##Models: Contains Mongoose models for user and post entities. ##Routes: Defines routes for handling HTTP requests.<br> ##Middleware: Contains middleware functions for authentication and request validation.<br>## app.js: Main application file where Express is configured and routes are connected. <br>##.env: Stores environment variables. <br>##server.js: Entry point of the application



Blog App API This is a RESTful API for managing a blog application. Users can register, log in, create, update, and delete blog posts.<br>

Project Structure The project structure is organized as follows:<dr>

Controllers: Contains controller functions to handle requests.<br> Models: Contains Mongoose models for user and post entities. <br>Routes: Defines routes for handling HTTP requests. <br>Middleware: Contains middleware functions for authentication and request validation.<br> app.js: Main application file where Express is configured and routes are connected. <br>.env: Stores environment variables. <br>server.js: Entry point of the application. <br>Setup Clone the repository:

Install dependencies:

npm install Set up MongoDB:

Make sure MongoDB is installed and running. Create a MongoDB database named blog_app. Set environment variables:

Create a .env file in the root directory. Add the following environment variables:

PORT=3000 JWT_SECRET=your_secret_key <br>Start the server: npm start<br>


Blog App API This is a RESTful API for managing a blog application. Users can register, log in, create, update, and delete blog posts.

Project Structure The project structure is organized as follows:

Controllers: Contains controller functions to handle requests.
Models: Contains Mongoose models for user and post entities.
Routes: Defines routes for handling HTTP requests.
Middleware: Contains middleware functions for authentication and request validation.
app.js: Main application file where Express is configured and routes are connected.
.env: Stores environment variables.
server.js: Entry point of the application.
##Setup *Clone the repository:

*

##API Endpoints<br>
#Authentication<br>
*1.POST /api/auth/register: Register a new user.<br>
*2.POST /api/auth/login: Log in a user and receive a JWT.<br>
*3.POST /api/auth/logout: Log out a user.<br>
#Blog Posts<br>
*1.GET /api/posts: Fetch all blog posts.<br>
*2.POST /api/posts: Create a new blog post (authenticated users only).<br>
*3.GET /api/posts/:postId: Fetch a specific blog post.<br>
*4.PUT /api/posts/:postId: Update a specific blog post (authenticated users only).<br>
*5.DELETE /api/posts/:postId: Delete a specific blog post (authenticated users only).<br>
Libraries used:<br>
#express-for creating Rest APIs<br>
#jsonwebtoken-for authentication using json webtoken<br>
#mongoose-connecting with mongoose database<br>
#body-parse-dealing with json data<br>
#bcrypt-for hashing password<br>
#zod-for validation<br>
