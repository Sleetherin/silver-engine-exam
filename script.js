// Click handler for search button
const captureSearchValue = () => {
    let searchIt = document.getElementById("search-bar").value;
    return searchIt;
  };
  
  // Filter books based on search input
  const filterBooks = (searchWord, listOfBooks) => {
      listOfBooks = flattenObjectValuesIntoArray(listOfBooks);
      let returnedList = [];
      for (let i = 0; i < listOfBooks.length; i++) {
        for (let j = 0; j < listOfBooks[i].length; j++) {
          if (listOfBooks[i][j].toLowerCase() === searchWord.toLowerCase()) {
            listOfBooks[i] = Object.assign({}, listOfBooks[i]);
            returnedList.push(books[i]);
          }
        }
      }
      return returnedList;
  };
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js`
  const structureBooksAsHtml = (listOfBooks) => {
    let htmledList = [];
    for (let i = 0; i < listOfBooks.length; i++) {
      htmledList.push(structureBookAsHtml(listOfBooks[i]));
    }
    return htmledList;
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = () => {
    let searchValue = captureSearchValue();
    let list = filterBooks(searchValue, books);
    let formattedList = structureBooksAsHtml(list);
    console.log(formattedList)
    let showList = document.getElementById('bookList');
    renderBooksToDom(formattedList); 
};
  
  // Grab search button from the DOM
  let searchBtn = document.getElementById("search-btn");
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });