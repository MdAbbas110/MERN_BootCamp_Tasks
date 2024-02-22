const books = [
  { title: 'Book 1', author: 'Author 1', year: 2020 },
  { title: 'Book 2', author: 'Author 2', year: 2018 },
  { title: 'Book 3', author: 'Author 3', year: 2022 },
];

const BookList = () => {
  return (
    <div>
      {books.map((book, index) => {
        return (
          <div key={index} style={{ border: '1px solid white' }}>
            <ul>
              <li>{book.title}</li>
              <li>{book.author}</li>
              <li>{book.year}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default BookList;
