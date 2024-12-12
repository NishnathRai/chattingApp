# 📱💬 Chat Application

This project is a fully functional **Chat Application** built using **⚛️ React** for the front-end, **🟢 Node.js** with **📦 Express.js** for the back-end, and **🍃 MongoDB** as the database. It includes several exciting features and ensures user 🔒 privacy and 🛡️ security.

---

## ✨ Features


### 1. **👤 User Account Management**
- 👥 Users can create accounts and log in securely.
- 🔑 Passwords are **hashed** and stored in the database, ensuring even the application admin cannot know the user’s password.
- "🔒 Remember Me" functionality is implemented using **🍪 cookies**, which securely store 🔐 encrypted data for persistent logins.

### 2. **💌     Messaging**
- 👥 Users can chat with each other in real-time.
- ✉️ Messages have statuses such as:
  - **✅ Sent**
  - **👀 Seen**
  - **📩 Unread** (users can track unread messages).

### 3. **🖼️ User Profile Management**
- 👤 Users can update and manage their profiles.

### 4. **⏳ Status Feature**
- 🔄 Users can set a status that lasts for **24 hours**.
- 👀 Other users can view these statuses.

### 5. **📷 Media Sharing**
- 🖼️ Users can send images to each other.
- 📂 Images are converted to **Base64 strings** and stored in the database efficiently.

---

## 🛠️ Technologies Used

### 🎨 Front-End:
- **⚛️ React.js**
  - A powerful library for building user interfaces.

### 🔧 Back-End:
- **🟢 Node.js** with **📦 Express.js**
  - For handling server-side logic and API endpoints.

### 🗄️ Database:
- **🍃 MongoDB**
  - A NoSQL database for storing user data, messages, and media.

### 🔐 Security:
- **🔒 Bcrypt** for hashing passwords.
- **🍪 Cookies** for secure and encrypted storage of user session data.

---

## ⚙️ How It Works

1. **👤 Account Creation and Login**:
   - ✍️ Users register with a unique username and password.
   - 🔑 Passwords are hashed before being stored in MongoDB.
   - On login, users can opt for the "🔒 Remember Me" option, which uses encrypted cookies for persistence.

2. **💌 Messaging**:
   - 🔄 Real-time communication between users.
   - ✅ Sent, 👀 Seen, and 📩 Unread statuses are displayed for each message.

3. **⏳ Status**:
   - 🔄 Users can set statuses that disappear after 24 hours, similar to stories in other applications.

4. **📷 Image Sharing**:
   - 🖼️ Images are converted to Base64 strings and securely stored in the database.
   - 📂 This ensures efficient storage and retrieval.

---

## 🛠️ Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/NishnathRai/chattingApp.git
   ```

2. Navigate to the project folder:
   ```bash
   cd chattingApp
   ```

3. Install dependencies:
   - For the backend:
     ```bash
     cd backEnd
     npm install
     ```
   - For the frontend:
     ```bash
     cd frontEnd
     npm install
     ```

4. Configure environment variables:
   - Create a `.env` file in the backend folder and add:
     ```
     _BackEnd
     feURL = http://localhost:1234
     jwtSecreat = Nishnath
     db_URL = mongodb+srv://nishnathnishu1122:Nishnath%401@cluster0.sykfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Togethe
     _FrontEnd
     URL = http://localhost:3000
     ```

5. Start the application:
   - Start the backend:
     ```bash
     npm run start
     npm run dev
     ```
   - Start the frontend:
     ```bash
     npm run start
     npm run dev
     ```

6. Open the application in your browser at `http://localhost:3000`.

---

## 🚀 Future Enhancements

- **🔔 Advanced Notifications**: Push notifications for unread messages and status updates.
- **🔍 Search Functionality**: Allowing users to search through messages 
- **🎨 Themes and Customization**: Users can personalize their chat interface.

---

## 🤝 Conclusion
This chat application is a secure, feature-rich platform designed to provide users with a seamless and engaging communication experience. Its emphasis on 🔒 privacy and 🛠️ functionality makes it a robust choice for real-time messaging and social interaction.