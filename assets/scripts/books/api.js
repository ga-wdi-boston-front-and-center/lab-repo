// make api call
const getBooks = function () {
  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com' + '/books',
    method: 'GET'
  })
}

const getBook = function (bookData) {
  return $.ajax({
    url: `https://wdi-library-api.herokuapp.com/books/${bookData.book.id}`,
    method: 'GET'
  })
}

const deleteBook = function (bookData) {
  return $.ajax({
    url: `https://wdi-library-api.herokuapp.com/books/${bookData.book.id}`,
    method: 'DELETE'
  })
}

const addBook = function (bookData) {
  return $.ajax({
    url: `https://wdi-library-api.herokuapp.com/books/${bookData.book.id}`,
    method: 'PATCH',
    data: bookData
  })
}

const createBook = function (bookData) {
  return $.ajax({
    url: 'https://wdi-library-api.herokuapp.com' + '/books',
    method: 'POST',
    data: bookData
  })
}

module.exports = {
  getBooks,
  deleteBook,
  getBook,
  createBook,
  addBook
}
