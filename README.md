# CS-465

## Architecture
### Compare and contrast the types of frontend development you used.
Express HTML was more traditional with full page reloads handled by the server, while the SPA felt faster and more interactive since it updated content dynamically without reloading the whole page.

### Why did the backend use a NoSQL MongoDB database?
MongoDB made sense because it stores data in flexible JSON-like documents, which worked smoothly with how the frontend and backend were already exchanging data.

## Functionality
### How is JSON different from JavaScript and how does it tie frontend and backend together?
JavaScript is a programming language, while JSON is just a format for organizing and sending data. JSON connects everything because the frontend sends data in JSON, the backend processes it, and MongoDB stores it in a similar structure.

### Provide instances when you refactored code and explain the benefits of reusable UI components.
I refactored by separating API logic from components and reusing UI pieces instead of rewriting them, which made the code cleaner and easier to manage. Reusable components save time, reduce duplication, and make updates way simpler.

## Testing
### Explain your understanding of methods, endpoints, and security in a full stack app.
Methods like GET, POST, PUT, and DELETE define what action happens at an endpoint, and each endpoint needs to be tested to make sure it returns the right data. Adding security like authentication makes testing more complex because you have to verify tokens and permissions before accessing protected routes.

## Reflection
### How has this course helped you reach your professional goals?
This course helped me understand how all parts of a full stack application connect, from frontend to database. I’ve developed stronger skills in APIs, databases, and debugging, which makes me feel more confident and marketable going into a software development role.

