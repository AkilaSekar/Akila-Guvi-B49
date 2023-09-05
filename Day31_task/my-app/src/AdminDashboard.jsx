import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

// Sample initial data (you should fetch this from your API)
const initialBooks = [
  { id: 1, title: "Book 1", author: "Author 1", ISBN: "1234567890", publicationDate: "2023-01-01" },
  // Add more initial book data as needed
];

const initialAuthors = [
  { id: 1, name: "Author 1", birthDate: "1990-01-01", biography: "Bio of Author 1" },
  // Add more initial author data as needed
];

const AdminDashboard = () => {
  const [books, setBooks] = useState(initialBooks);
  const [authors, setAuthors] = useState(initialAuthors);

  // Function to add a book
  const addBook = (values, { resetForm }) => {
    const newBook = {
      id: Date.now(), // Generate a unique ID (you may want to handle this on the server)
      ...values,
    };

    setBooks([...books, newBook]);
    resetForm();
  };

  // Function to edit a book
  const editBook = (id, values) => {
    const updatedBooks = books.map((book) => (book.id === id ? { ...book, ...values } : book));
    setBooks(updatedBooks);
  };

  // Function to delete a book
  const deleteBook = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
  };

  // Function to add an author
  const addAuthor = (values, { resetForm }) => {
    const newAuthor = {
      id: Date.now(), // Generate a unique ID (you may want to handle this on the server)
      ...values,
    };

    setAuthors([...authors, newAuthor]);
    resetForm();
  };

  // Function to edit an author
  const editAuthor = (id, values) => {
    const updatedAuthors = authors.map((author) =>
      author.id === id ? { ...author, ...values } : author
    );
    setAuthors(updatedAuthors);
  };

  // Function to delete an author
  const deleteAuthor = (id) => {
    const updatedAuthors = authors.filter((author) => author.id !== id);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <h1>Admin Dashboard - Library Management System</h1>

      {/* Book Management */}
      <div>
        <h2>Manage Books</h2>
        {/* Book Form */}
        <Formik
          initialValues={{ title: "", author: "", ISBN: "", publicationDate: "" }}
          validate={(values) => {
            const errors = {};

            // Add validation rules for book form fields here

            return errors;
          }}
          onSubmit={addBook}
        >
          {({ handleSubmit }) => (
            <Form>
              {/* Book form fields go here */}
              <button type="submit">Add Book</button>
            </Form>
          )}
        </Formik>

        {/* List of Books */}
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} by {book.author} (ISBN: {book.ISBN}, Published: {book.publicationDate})
              <button onClick={() => editBook(book.id, /* Edit form values */)}>Edit</button>
              <button onClick={() => deleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Author Management */}
      <div>
        <h2>Manage Authors</h2>
        {/* Author Form */}
        <Formik
          initialValues={{ name: "", birthDate: "", biography: "" }}
          validate={(values) => {
            const errors = {};

            // Add validation rules for author form fields here

            return errors;
          }}
          onSubmit={addAuthor}
        >
          {({ handleSubmit }) => (
            <Form>
              {/* Author form fields go here */}
              <button type="submit">Add Author</button>
            </Form>
          )}
        </Formik>

        {/* List of Authors */}
        <ul>
          {authors.map((author) => (
            <li key={author.id}>
              {author.name} (Born: {author.birthDate})
              <button onClick={() => editAuthor(author.id, /* Edit form values */)}>Edit</button>
              <button onClick={() => deleteAuthor(author.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
    