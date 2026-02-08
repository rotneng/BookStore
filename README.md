LIBRARY CATALOG
A full-stack Book Management Library application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to view available books, while administrators can manage the inventory by adding, editing, and deleting books.

✨ Features
1. Authentication & Authorization:
2. User Signup & Login with secure password hashing (bcrypt).
3. JWT (JSON Web Token) based session management.
4. Show/Hide Password toggle for better UX.
5. Role-based access (Admin vs. Regular User).
6. Book Management (CRUD):
7. Create: Admins can add new books with details like title, author, category, stock, and cover image.
8. Read: Browse the complete collection of books.
9. Update: Edit book details (stock, location, descriptions).
10. Delete: Remove books from the library.

User Experience:
1. Responsive and clean UI.
2. No Alerts: Native browser alerts have been replaced with modern, inline success/error status messages.
3. Auto-redirects after successful actions (Login, Signup, Add Book).

🛠️ Tech Stack
1. Frontend
React.js: Component-based UI.
React Router DOM: For seamless page navigation.
Axios: For making HTTP requests to the backend.
CSS: Custom styling for a clean, card-based layout.

2. Backend
Node.js & Express.js: Server-side logic and RESTful API architecture.
MongoDB & Mongoose: NoSQL database for storing user and book data.
Bcrypt.js: For password encryption.
JsonWebToken (JWT): For secure authentication.
Cors: To handle Cross-Origin Resource Sharing.
