// gutendex.com/books
// gutendex.com/books?author_year_start=1800&author_year_end=1899

var bookList = function(event) {
    fetch("https://gutendex.com/books")
        .then(function (response) {
            return response.json();
        })

        .then(function (booksResponse) {
            titleList = document.querySelector("#booksList");

            console.log(booksResponse.results);
            booksResponse.results.forEach(function (bookData) 
            {
                book = document.createElement("div");
                titleList.appendChild(book);
                book.innerHTML += bookData.title + "(" + bookData.authors[0].name + ")";
                console.log(book);
                subject = document.createElement("p");
                book.appendChild(subject);
                subject.innerHTML += bookData.subjects;

            })
        })
}

bookList();

document.addEventListener("readystatechange", bookList);