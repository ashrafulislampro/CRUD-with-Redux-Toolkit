import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBooks } from "./BookSlice";

const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteBooks(id));
  };
  return (
    <div style={{ textAlign: "center", margin: "5rem" }}>
      <h1>List of Books</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map((book, index) => {
                const { id, title, author } = book;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{title}</td>
                    <td>{author}</td>
                    <td>
                      <Link to="/edit-book" state={{ id, title, author }}>
                        <button>Edit</button>
                      </Link>
                      <button onClick={() => handleDelete(id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BooksView;
