const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readForm = document.querySelector("#read");
const addBookButton = document.querySelector("#addBookButton");
const library = document.querySelector(".library");

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
    while(library.firstChild) 
            library.removeChild(library.firstChild);
    for(let i=0; i<myLibrary.length; i++){
        const card = document.createElement("div");
        const cardText = document.createElement("p");
        cardText.textContent = `Title: ${myLibrary[i].title}
        Author: ${myLibrary[i].author}
        Pages: ${myLibrary[i].pages}
        Read : ${myLibrary[i].read}`;
        library.appendChild(card);
        card.appendChild(cardText);
    }
}

function cleanForm() {
    titleForm.value = "";
    authorForm.value = "";
    pagesForm.value = ""; 
    readForm.value = 0;
}

addBookButton.addEventListener("click", () => {
    if(titleForm.value != "" && authorForm.value != "" && pagesForm.value != ""){
        addBookToLibrary();
        render();
        cleanForm();
    }
});
