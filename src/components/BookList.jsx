import { useLibrary } from "../context/LibraryContext";

const BookList = () => {
  const { library, borrowBook } = useLibrary();

  return (
    <div>
      <h2>Library Books</h2>
      {library.length === 0 ? (
        <p>The library is empty.</p>
      ) : (
        <ul>
          {library.map((book) => (
            <li key={book.id}>
              {book.title} ({book.copies} copy/copies)
              <button onClick={() => borrowBook(book.id)}>Borrow</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookList;