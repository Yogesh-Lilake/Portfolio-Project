# 🚀 Full Stack Portfolio Project

This is my personal portfolio project built using modern technologies.

---

## 🧱 Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios

### Backend

- Spring Boot
- Spring Data JPA
- MySQL

---

## 📁 Project Structure

```
portfolio-project/
├── portfolio-frontend/   # React frontend
├── portfolio-backend/    # Spring Boot backend
```

---

## ⚙️ Setup Instructions

### 🔹 Frontend

```
cd portfolio-frontend
npm install
npm run dev
```

---

### 🔹 Backend & 🔹 Environment Setup (.env)

````
cd portfolio-backend

1. Install MySQL
2. Create database:

```sql
CREATE DATABASE portfolio_db;
````

3. Update `.env.example` to `.env`:

```properties
DB_URL=jdbc:mysql://localhost:3306/portfolio_db
DB_USERNAME=root
DB_PASSWORD=your_mysql_password
```

4. Run backend:

```bash
./mvnw spring-boot:run
```

---

## 🔗 API Endpoint

```
http://localhost:8080/api
```

---

## 🎯 Features

- Portfolio website
- Projects showcase
- Contact form
- REST API integration

---

## 🚀 Future Improvements

- Authentication system
- Deployment (Docker)

---

## 👨‍💻 Author

Yogesh Lilake
