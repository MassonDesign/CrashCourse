import { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
	const { /*removeBook*/ dispatch } = useContext(BookContext);
	return (
		<li
			onClick={() =>
				/*removeBook(book.id)*/ dispatch({ type: "REMOVE_BOOK", id: book.id })
			}
		>
			<div className='title'>{book.title}</div>
			<div className='author'>{book.author}</div>
		</li>
	);
};

export default BookDetails;
