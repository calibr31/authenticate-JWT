# 🛡️ JWT Authentication API with MongoDB & Swagger

A secure authentication REST API built with **Node.js**, **Express**, **JWT**, **MongoDB**, and **Swagger**. It supports signup, login, token refresh, logout, and protected user routes — all fully documented and testable via Swagger UI.

---

## 🚀 Features

- 🔐 User signup & login
- 🪪 JWT-based authentication (Access & Refresh tokens)
- 🍪 Refresh token stored securely in HTTP-only cookies
- 🔄 Token renewal with refresh endpoint
- 🔒 Logout with cookie clearing
- 🧾 Swagger documentation with full testing support
- 💾 MongoDB with Mongoose for user persistence

---

## 🛠 Tech Stack

- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **jsonwebtoken**
- **bcryptjs**
- **cookie-parser**
- **swagger-jsdoc + swagger-ui-express**

---

## 🛠️ Setup Instructions

```bash
1:git clone https://github.com/calibr31/authenticat-jwt.git
2:cd /authenticat-jwt
3:npm install
4:Create a .env file in the root directory and add the following variables: PORT,DB_URI, ACCESS_TOKEN_SECRET, and REFRESH_TOKEN_SECRET{
    example:PORT=3000
            DB_URI=mongodb://localhost:27017/authdb
            ACCESS_TOKEN_SECRET=yourAccessSecretKeyHere
            REFRESH_TOKEN_SECRET=yourRefreshSecretKeyHere
}
5:npm run dev
6:Visit: http://localhost:{your port}/api/docs
---

 '\'
 */*
-/-

@calibr31