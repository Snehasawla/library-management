# 📚 Library Management System (React.js)

A simple and modular **Library Management** system built with **React.js**, designed to allow users to view, borrow, and return books, with borrowing limits and support for multiple book copies.

---

## 🧠 Features

- ✅ View available books in the library
- ✅ Borrow a book (with 2-book limit per user)
- ✅ Handle multiple copies of the same book
- ✅ Return books to the library
- ✅ Real-time UI updates via React Context
- ✅ Fully covered with unit tests (TDD approach)

---

## 🏗️ Architecture & Design

### 🔧 Technologies

- **React.js** (with Context API)
- **Jest** & **React Testing Library** for unit tests
- **Functional Component Design**
- No backend – mocked data via local state

### 📦 Installation

```bash
git clone https://github.com/yourusername/library-management.git
cd library-management
npm install
```

### 🚀 Run the App
```bash
npm start
```


### 🧱 Component Structure

```bash
src/
├── App.js
├── components/
│   ├── BookList.js          # Displays books in the library
│   ├── BorrowedList.js      # Displays borrowed books
├── context/
│   └── LibraryContext.js    # Global state for library & borrowed books
├── __tests__/
│   ├── LibraryContext.test.js
│   ├── BookList.test.js
│   └── BorrowedList.test.js
├── utils/
│   └── constants.js         # Initial mock data
└── styles.css               # Basic styling
```


