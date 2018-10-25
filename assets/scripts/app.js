'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./books/events')

$(() => {
  // your JS code goes here

  // Set up event listener and event handler
  $('#get-books').on('submit', events.onGetBooks)
  $('#get-book').on('submit', events.onGetBook)
  $('#delete-book').on('submit', events.onDeleteBook)
  $('#add-book').on('submit', events.onAddBook)
  $('#create-book').on('submit', events.onCreateBook)
})
