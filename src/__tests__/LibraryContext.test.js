import { renderHook, act } from "@testing-library/react";
import { LibraryProvider, useLibrary } from "../context/LibraryContext";

const wrapper = ({ children }) => <LibraryProvider>{children}</LibraryProvider>;

test("borrows and returns books via context", () => {
  const { result } = renderHook(() => useLibrary(), { wrapper });

  // Initially 3 books
  expect(result.current.library.length).toBeGreaterThan(0);
  expect(result.current.borrowed.length).toBe(0);

  act(() => result.current.borrowBook(1));
  expect(result.current.borrowed.length).toBe(1);

  act(() => result.current.returnBook(1));
  expect(result.current.borrowed.length).toBe(0);
});
