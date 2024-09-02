const readBooks = [{
    title: "Born a Crime",
    author: "Trevor Noah",
    cover: "images/born-a-crime.jpg"
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
},
{
    title: "Modern Romance",
    author: "Aziz Ansari",
    cover: "images/modern-romance.jpg"

},
{
    title: "The Voice of the Jamaican Ghetto",
    author: "Adidja Palmer, Michael Dawson",
    cover: "images/the-voice-of-the-jamaican-ghetto.jpg"
},
{
    title: "Permanent Record",
    author: "Edward Snowden",
    cover: "images/permanent-record.jpg"
    
},
{
    title: "Elon Musk",
    author: "Walter Isaacson",
    cover: "images/elon-musk.jpg"
},
{
    title: "Becoming",
    author: "Michelle Obama",
    cover: "images/becoming.jpg"
},
{
    title: "Working: People Talk About What They Do All Day and How They Feel About What They Do",
    author: "Studs Terkel",
    cover: "images/working.jpg"
}

]

function displayBooks(listId, books) {
    books.sort((a, b) => a.title.localeCompare(b.title));
    const ul = document.getElementById(listId);
    ul.innerHTML = '';
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

function searchBooks() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filteredBooks = readBooks.filter(book => book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query));
    displayBooks('read-books', filteredBooks);

}

document.getElementById('search-input').addEventListener('input', searchBooks);

