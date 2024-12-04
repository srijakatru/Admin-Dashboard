 # Admin Dashboard (RBAC) UI using React JS
 This project is an Admin Dashboard built with React.js that implements Role-Based Access Control (RBAC). The dashboard allows administrators to manage users, roles, and permissions within the application. Each feature—User Management, Role Management, and Permission Management—is designed to enable easy administration of system entities, offering both a seamless user experience and robust control over access and rights.
his project is built using React.js for the front end, ensuring a dynamic, component-based structure. It is designed to be simple, responsive, and easy to maintain while providing essential functionality for role-based management in a web application.
The application structure is organized into the following key components:
1. **User Management:**
    - View a list of users in the system.
    - Add new users, edit existing users, or delete users.
    - Assign roles to users to define their access levels.
Toggle user status (Active/Inactive) to enable or disable their access.
2. **Role Management:**
    - Define and edit system roles such as Admin, User, etc.
    - Assign permissions to roles (e.g., Read, Write, Delete).
    - Create custom roles to meet specific application requirements.
3. **Dynamic Permissions:**
    - Assign or modify permissions for each role.
    - Clear visualization of permissions (e.g., Read, Write, Delete) assigned to each role.
    - Manage permissions with ease, allowing administrators to grant or revoke specific access levels.

![image](https://github.com/user-attachments/assets/3b64de5f-1bd5-4d14-bbdd-6afaa37668c4)

## **Setup Instructions:**

Follow the instructions below to set up the **Admin Dashboard (RBAC)** UI on your local machine.

### **1. Clone the Repository:**

Clone this repository to your local machine using Git:

git clone https://github.com/srijakatru/Admin-Dashboard

### **2.  Install Dependencies: Navigate to the project directory and install the required dependencies.**

npm install
## This will install all necessary libraries and dependencies, such as React.js and other required packages.

3. Run the Application
Start the React development server:

npm start
This will launch the app in your default browser, usually accessible at http://localhost:3000.

## Technologies Used

- **React.js:** The frontend is developed using React.js, a popular JavaScript library for building user interfaces.
- **HTML/CSS:** Basic HTML and CSS for structuring and styling the pages.
- **JavaScript:** The logic for user management, role management, and permission management is implemented in JavaScript.
- **React Router:** Used for navigation between pages like User Management, Role Management, and Permission Management.
- **Local Storage (Optional):** Data can be stored temporarily in local storage, though this can be replaced with a backend for persistent data storage.

## **Flow of the Application:**

### **Dashboard View:**
The admin accesses the main dashboard, where three sections are displayed: User Management, Role Management, and Permission Management.

### **Manage Users:**
Click on **User Management** to view users, add/edit/delete users, and assign roles.

### **Manage Roles:**
Click on **Role Management** to view, edit, or add new roles, as well as assign permissions to roles.

### **Manage Permissions:**
Click on **Permission Management** to view and assign permissions to roles.

## **Project Flow Diagram:**
+---------------------+
|    Start            |
+---------------------+
         |
         v
+---------------------+
|   Admin opens       |
|   Admin Dashboard   |
+---------------------+
         |
   +-----+-----+-----+
   |           |     |
   v           v     v
+-----------+ +-----------+ +-----------------+
| User      | | Role      | | Permission      |
| Management| | Management| | Management      |
+-----------+ +-----------+ +-----------------+
         |           |            |
    +----+----+  +---+---+    +----+-----+
    | View Users|  | View  |    | View    |
    | Add Users |  | Roles |    | Permissions|
    | Edit Users|  | Edit  |    | Add/Del   |
    +----+----+  +---+---+    +----+-----+
         |           |            |
    +----+----+  +---+---+    +----+-----+
    | Assign   |  | Assign|    | Assign   |
    | Roles    |  | Roles |    | Permissions|
    | Manage   |  | Manage|    | Manage   |
    | Status   |  | Permissions| | Permissions|
    +----------+  +--------+  +----------+


## **Future Enhancements:**

##### **Authentication:**
- Implement user authentication to secure access to the dashboard.

##### **Database Integration:**
- Connect the front-end to a backend (e.g., Node.js, Express, MongoDB) for persistent storage of users, roles, and permissions.

##### **Search & Filter:**
- Implement search and filter functionality to make it easier to manage large datasets.

## **Conclusion:**

This **Admin Dashboard (RBAC) UI** project serves as an essential tool for administrators to  efficiently manage user roles and permissions. Built with **React.js**, the dashboard provides a clean, interactive interface that enhances productivity and streamlines administrative tasks.
