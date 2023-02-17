// To create list and save searched items in it

// List is empty array at the start

// When 'add' button is clicked in search result page,
// row item is turned into object and 
// and pushed into array
// Array is then rendered as a list/table

// When user clicks 'add' in search result page
// row item is turned into object (might not need to create object,
// cos el is already an object) => state lifted to parent App.js

// a new collection is created with empty array
// row item object pushed into this array => passed down as props to SavedItems.js
// Array is then rendered as a list/table in saved items page