const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readForm = document.querySelector("#read");
const addBookButton = document.querySelector("#addBookButton");

let myLibrary = [];

function Book(title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    myLibrary.push(new Book(titleForm.value, authorForm.value, 
        pagesForm.value, readForm.value));
    
}

function render() {

}

function cleanForm() {

}

addBookButton.addEventListener("click", () => {
    addBookToLibrary();
    render();
    cleanForm();
});
