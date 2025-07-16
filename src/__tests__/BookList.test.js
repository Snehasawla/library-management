import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import { LibraryProvider } from "../context/LibraryContext";

test("shows empty library message", () => {
  const emptyProvider = ({ children }) => (
    <LibraryProvider>
      {children}
    </LibraryProvider>
  );
  render(<BookList />, { wrapper: emptyProvider });
  expect(screen.getByText(/library books/i)).toBeInTheDocument();
});

test("renders books and borrows one", () => {
    render(
      <LibraryProvider>
        <BookList />
      </LibraryProvider>
    );
  
    const beforeText = screen.getByText(/The Great Gatsby/i);
    expect(beforeText.textContent).toMatch(/\(2 copy\/copies\)/);
  
    fireEvent.click(screen.getAllByText("Borrow")[0]);
  
    const afterText = screen.getByText(/The Great Gatsby/i);
    expect(afterText.textContent).toMatch(/\(1 copy\/copies\)/);
  });
  
