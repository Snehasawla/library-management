import { LibraryProvider } from "./context/LibraryContext";
import BookList from "./components/BookList";
import BorrowedList from "./components/BorrowedList";
import "./styles.css";

function App() {
  return (
    <LibraryProvider>
      <div className="app">
        <h1>📖 Library Management</h1>
        <div className="container">
          <BookList />
          <BorrowedList />
        </div>
      </div>
    </LibraryProvider>
  );
}

export default App;
