const books = [
  { title: "A Promised Land",                                                              author: "Barack Obama",            cover: "images/a-promised-land.jpg" },
  { title: "Becoming",                                                                     author: "Michelle Obama",          cover: "images/becoming.jpg" },
  { title: "Born a Crime",                                                                 author: "Trevor Noah",             cover: "images/born-a-crime.jpg" },
  { title: "Elon Musk",                                                                    author: "Walter Isaacson",         cover: "images/elon-musk.jpg" },
  { title: "Masters of Doom",                                                              author: "David Kushner",           cover: "images/masters-of-doom.jpg" },
  { title: "Modern Romance",                                                               author: "Aziz Ansari",             cover: "images/modern-romance.jpg" },
  { title: "Permanent Record",                                                             author: "Edward Snowden",          cover: "images/permanent-record.jpg" },
  { title: "Steve Jobs",                                                                   author: "Walter Isaacson",         cover: "images/steve-jobs.jpg" },
  { title: "The Voice of the Jamaican Ghetto",                                            author: "Adidja Palmer, Michael Dawson", cover: "images/the-voice-of-the-jamaican-ghetto.jpg" },
  { title: "Working: People Talk About What They Do All Day and How They Feel About It",  author: "Studs Terkel",            cover: "images/working.jpg" },
  { title: "Zero to One",                                                                  author: "Peter Thiel",             cover: "images/zero-to-one.jpg" },
];

function renderBooks(list) {
  const sorted = [...list].sort((a, b) => a.title.localeCompare(b.title));
  document.getElementById("read-books").innerHTML = sorted
    .map(
      ({ title, author, cover }) => `
      <li>
        <img src="${cover}" alt="${title}" />
        <div>
          <span class="book-title">${title}</span>
          <span class="book-author">by ${author}</span>
        </div>
      </li>`
    )
    .join("");
}

renderBooks(books);

document.getElementById("search-input").addEventListener("input", (e) => {
  const q = e.target.value.toLowerCase();
  renderBooks(
    books.filter(
      ({ title, author }) =>
        title.toLowerCase().includes(q) || author.toLowerCase().includes(q)
    )
  );
});
