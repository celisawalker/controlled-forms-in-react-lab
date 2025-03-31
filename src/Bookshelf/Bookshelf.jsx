import { useState } from "react";

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ])

    const initialState = 
        {title: '', author: ''}

    const [newBook, setNewBook] = useState(initialState);


    const handleInputChange = (event) => {
        setNewBook({ ...newBook, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook])
        console.log(books);
        setNewBook(initialState);

    }
    
    return (
        <div className="bookshelfDiv>">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={newBook.title}
                        onChange={handleInputChange}
                    />
                <label htmlFor="author">Author: </label>
                    <input 
                        type="text" 
                        id="author" 
                        name="author"
                        value={newBook.author}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Add Book</button>
                </form>
                <div className="bookCardsDiv">
                    <ul>
                    {books.map((book, index) => (
                        <li key={index}>
                            {book.title} by {book.author}
                        </li> 
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Bookshelf