import { createContext, useReducer, useEffect } from "react";
import { bookReducer } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, dispatch] = useReducer(bookReducer, [], () => {
		const locaDate = localStorage.getItem("books");
		return locaDate ? JSON.parse(locaDate) : [];
	});

	useEffect(() => {
		localStorage.setItem("books", JSON.stringify(books));
	}, [books]);

	// const addBook = (title, author) => {
	// 	setBooks([...books, { title, author, id: uuidv1() }]);
	// };

	// const removeBook = (id) => {
	// 	setBooks(books.filter((book) => book.id !== id));
	// };

	return (
		<BookContext.Provider value={{ books, dispatch }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
