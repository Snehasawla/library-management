import { render, screen, fireEvent } from "@testing-library/react";
import BorrowedList from "../components/BorrowedList";
import BookList from "../components/BookList";
import { LibraryProvider } from "../context/LibraryContext";

test("borrowed list shows after borrowing", () => {
  render(
    <LibraryProvider>
      <BookList />
      <BorrowedList />
    </LibraryProvider>
  );

  const borrowButtons = screen.getAllByText("Borrow");
  fireEvent.click(borrowButtons[0]);

  expect(screen.getByText(/borrowed books/i)).toBeInTheDocument();
  expect(screen.getByText(/return/i)).toBeInTheDocument();
});

test("returns a borrowed book", () => {
  render(
    <LibraryProvider>
      <BookList />
      <BorrowedList />
    </LibraryProvider>
  );

  const borrowButtons = screen.getAllByText("Borrow");
  fireEvent.click(borrowButtons[0]);

  const returnButton = screen.getByText("Return");
  fireEvent.click(returnButton);

  expect(screen.queryByText("Return")).not.toBeInTheDocument();
});
