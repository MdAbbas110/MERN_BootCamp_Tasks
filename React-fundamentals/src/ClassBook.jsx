import { Component } from 'react';

const books = [
  { title: 'English', author: 'Author 1', year: 2020 },
  { title: 'Hindi', author: 'Author 2', year: 2018 },
  { title: 'Weather', author: 'Author 3', year: 2022 },
];

class ClassBookList extends Component {
  constructor() {
    super();
    this.books = '';
  }

  componentDidMount() {
    const fetchBooks = async () => {
      const books = await fetch('randomBooks.api');
      const data = await books.json();
      this.books = data;
    };
    fetchBooks();
  }

  componentDidUpdate() {
    // if any constructor will be render this will work and component will render again
    // in this case if this.books
  }

  componentWillUnmount() {
    // this is to use for cleaning purpose if user changes the route the component needs to be un mount and stop all the expensive tasks
    // if any setTimeOut is used or or so
    //if user will change the path react will trigger willUnmount and stop the operations going on in this component
    this.timer = clearInterval();
  }

  //useEffect is combination of all this three methods of class comp. we write the logic in use effect body callback function
  // and component didUpdate is handled by the useEffect dependency array [] it use to monitor weather of re run the use effect or not
  //  for the c.willUnmount part useEffect has its return statement for any cleanup purpose and we can use clear interval in it and will trigger on route change

  render() {
    return (
      <div>
        {books.map((book, index) => {
          return (
            <div
              key={index}
              style={{
                border: '1px solid white',
                margin: '15px',
                padding: '10px',
              }}
            >
              <h1>{book.title}</h1>
              <p>{book.author}</p>
              <p>{book.year}</p>
            </div>
          );
        })}
        {/* <OtherClassCompt />  its constr its render its component did mount did unmount then parent did mount unmount */}
      </div>
    );
  }
}

export default ClassBookList;

/*
 * react life cycle event in this order it will trigger
 ? first the constructor will load up and then the initial paint i.e render method will get trigger 
 / then the dom will display just jsx written in render first
 . then the component did mount will get render where api fetching and other stuff wil happen state update will trigger
 / then we will rerender the the render() and second paint will get happen 
 / the component did unmount will run that is as dependency array and will check if any state variable change trigger
 / at last the c.willUnmount so to clean up the code and other stuff
 */
