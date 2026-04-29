# Customer Management Dashboard

A simple full-stack web application to manage customer records. Users can add new customers, view all customers in a table, and delete customers.

## Live Demo

- **Frontend:** https://arali-assignment-theta.vercel.app/
- **Backend API:** https://araliassignment-1-5tv7.onrender.com

---

## Features

- Add new customers using a form
- View customer list in a responsive table
- Delete customers instantly
- REST API integration
- Clean and user-friendly UI
- Alternating table row colors for readability

---

## Tech Stack

### Frontend

- React.js
- Axios
- CSS

### Backend

- Node.js
- Express.js
- CORS
- UUID

### Deployment

- Frontend: Vercel
- Backend: Render

---

## Project Structure

```text
ARALI/
├── backend/
│   ├── server.js
│   └── package.json
│
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CustomerForm.jsx
│   │   └── CustomerTable.jsx
│   ├── App.js
│   └── App.css
│
├── package.json
└── README.md
```

---

## API Endpoints

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | /customers     | Get all customers     |
| POST   | /customers     | Add a new customer    |
| DELETE | /customers/:id | Delete customer by ID |

---

## Installation & Setup

## Clone Repository

```bash
git clone https://github.com/Harinishri13/araliAssignment.git
cd araliAssignment
```

---

## Frontend Setup

```bash
npm install
npm start
```

Runs on:

```text
http://localhost:3000
```

---

## Backend Setup

```bash
cd backend
npm install
node server.js
```

Runs on:

```text
http://localhost:5000
```

---

## Environment Variables (Optional)

Create `.env` in frontend root:

```env
REACT_APP_API_URL=https://araliassignment-1-5tv7.onrender.com
```

---

## Assumptions

- Customer data is stored in an in-memory array.
- Data resets whenever backend server restarts.
- No database used as per assignment requirement.

---

## Future Improvements

- Edit customer details
- Search and filter customers
- Persistent database integration
- Pagination
- Authentication

---

## Author

Shri Harini

---
