const titleForm = document.querySelector("#title");
const authorForm = document.querySelector("#author");
const pagesForm = document.querySelector("#pages");
const readForm = document.querySelector("#read");
const addBookButton = document.querySelector("#addBookButton");
const library = document.querySelector(".library");

let myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary() {
    myLibrary.push(new Book(titleForm.value, authorForm.value,
        pagesForm.value, readForm.value));

}

function render() {
    while (library.firstChild)
        library.removeChild(library.firstChild);

    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement("div");
        const cardText = document.createElement("p");
        const delCardBut = document.createElement("button");
        const toggleReadBut = document.createElement("button");

        delCardBut.textContent = "delete";
        delCardBut.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            render();
        });

        toggleReadBut.textContent = "read";
        toggleReadBut.addEventListener("click", () => {
            myLibrary[i].read = !myLibrary[i].read;
            render();
        });

        cardText.innerHTML = `Title: ${myLibrary[i].title} <br>
        Author: ${myLibrary[i].author}<br>
        Pages: ${myLibrary[i].pages}<br>
        Read: ${myLibrary[i].read}`;

        library.appendChild(card);
        card.appendChild(cardText);
        card.appendChild(delCardBut);
        card.appendChild(toggleReadBut);
    }
}

function cleanForm() {
    titleForm.value = "";
    authorForm.value = "";
    pagesForm.value = "";
    readForm.value = "read";
}

addBookButton.addEventListener("click", () => {
    if (titleForm.value != "" && authorForm.value != "" && pagesForm.value != "") {
        addBookToLibrary();
        render();
        cleanForm();
    }
});


