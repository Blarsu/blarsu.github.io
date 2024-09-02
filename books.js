console.log("JavaScript is running!");
const readBooks = [ {
    title: "Born a Crime",
    author: "Trevor Noah",
    cover : "images/born-a-crime.jpg"
},
{
    title: "A Promised Land",
    author: "Barack Obama",
    cover: "images/a-promised-land.jpg"
},
{
    title: "Masters of Doom",
    author: "David Kushner",
    cover: "images/masters-of-doom.jpg"
},
{
    title: "Steve Jobs",
    author: "Walter Isaacson",
    cover: "images/steve-jobs.jpg"
},
{
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "images/zero-to-one.jpg"
}

]

function displayBooks(listId, books) {
    const ul = document.getElementById(listId);
    books.forEach(book => {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = book.cover;
        img.alt = book.title;

        const div = document.createElement('div');

        div.style.display = "flex";
        div.style.flexDirection = "column";

        const titleSpan = document.createElement('span');
        titleSpan.textContent = book.title;
        titleSpan.style.fontWeight = "bold";

        const authorSpan = document.createElement('span');
        authorSpan.textContent = `by ${book.author}`;
        authorSpan.style.fontSize = "0.9em";

        div.appendChild(titleSpan);
        div.appendChild(authorSpan);
        li.appendChild(img);
        li.appendChild(div);

        ul.appendChild(li);
    });

}

displayBooks('read-books', readBooks);