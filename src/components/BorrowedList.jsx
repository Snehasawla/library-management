import { useLibrary } from "../context/LibraryContext";

const BorrowedList = () => {

  const { borrowed, returnBook, library } = useLibrary();

  if(library?.length === 0){
      return //if no book in library.
  }

  return (
    <div>
      <h2>Borrowed Books</h2>
      {borrowed?.length === 0 ? (
        <p>No books borrowed.</p>
      ) : (
        <ul>
          {borrowed?.map((book) => (
            <li key={book?.id}>
              {book?.title}
              <button onClick={() => returnBook(book?.id)}>Return</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BorrowedList;