const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onGetBooks = function (event) {
// prevent defauklt reload
  event.preventDefault()
  console.log('Sync: before ajax call')
  // make api call suing Ajax
  api.getBooks()
  // handle success
    .then(ui.success)
  // handle failure
    .catch(ui.error)
  console.log('Sync: outside .then')
}

const onGetBook = function (event) {
// prevent defauklt reload
  event.preventDefault()

  const bookData = getFormFields(event.target)
  // returns: {book: {id: 45}}
  // To access id: bookData.book.id
  // return 45
  console.log('bookData is', bookData)
  // make api call suing Ajax
  api.getBook(bookData)
  // handle success
    .then(ui.success1)
  // handle failure
    .catch(ui.error)
  console.log('Sync: outside .then')
}

const onDeleteBook = function (event) {
// prevent defauklt reload
  event.preventDefault()

  const bookData = getFormFields(event.target)
  // returns: {book: {id: 45}}
  // To access id: bookData.book.id
  // return 45
  console.log('bookData is', bookData)
  // make api call suing Ajax
  api.deleteBook(bookData)
  // handle success
    .then(() => ui.successDelete(bookData))
  // handle failure
    .catch(ui.error)
  console.log('Sync: outside .then')
}

const onAddBook = function (event) {
// prevent defauklt reload
  event.preventDefault()

  const bookData = getFormFields(event.target)
  // returns: {book: {id: 45, title: '..' author: '...' }}
  // To access id: bookData.book.id
  // return 45
  console.log('bookData is', bookData)
  // make api call suing Ajax
  api.addBook(bookData)
  // handle success
    .then(ui.success1)
  // handle failure
    .catch(ui.error)
  console.log('Sync: outside .then')
}

const onCreateBook  = function (event) {
  event.preventDefault()

const bookData = getFormFields(event.target)
console.log(bookData)

if (data.book.title === '') {

}


api.createBook(bookData)
// handle success
  .then(ui.createSuccess)
// handle failure
  .catch(ui.error)
}

module.exports = {
  onGetBooks,
  onGetBook,
  onDeleteBook,
  onCreateBook,
  onAddBook
}
