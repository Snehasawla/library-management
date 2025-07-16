import { createContext, useContext, useState } from "react";
import { INITIAL_LIBRARY, MAX_BORROW_LIMIT } from "../utils/constant";
// import { INITIAL_LIBRARY, MAX_BORROW_LIMIT } from "../utils/constants";

const LibraryContext = createContext();

export const useLibrary = () => useContext(LibraryContext);

export const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState(INITIAL_LIBRARY);
  const [borrowed, setBorrowed] = useState([]);

  const borrowBook = (bookId) => {
    const bookInLibrary = library.find((b) => b.id === bookId);
    const alreadyBorrowed = borrowed.find((b) => b.id === bookId);

    if (!bookInLibrary || borrowed.length >= MAX_BORROW_LIMIT || alreadyBorrowed) return;

    const updatedLibrary = bookInLibrary.copies === 1
      ? library.filter((b) => b.id !== bookId)
      : library.map((b) =>
          b.id === bookId ? { ...b, copies: b.copies - 1 } : b
        );

    setLibrary(updatedLibrary);
    setBorrowed([...borrowed, { ...bookInLibrary, copies: 1 }]);
  };

  const returnBook = (bookId) => {
    const bookToReturn = borrowed.find((b) => b.id === bookId);
    if (!bookToReturn) return;

    const updatedLibrary = [...library];
    const existing = updatedLibrary.find((b) => b.id === bookId);
    if (existing) {
      existing.copies += 1;
    } else {
      updatedLibrary.push({ ...bookToReturn, copies: 1 });
    }

    setLibrary(updatedLibrary);
    setBorrowed(borrowed.filter((b) => b.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ library, borrowed, borrowBook, returnBook }}>
      {children}
    </LibraryContext.Provider>
  );
};
