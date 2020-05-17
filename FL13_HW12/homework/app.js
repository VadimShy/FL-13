const root = document.getElementById('root');

let displayDefaultBookList = defaultBooks.map((element) => '<li>' + element.name + '</li>').join('');

root.innerHTML = displayDefaultBookList;
