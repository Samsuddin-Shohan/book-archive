document.getElementById('basic-addon1').addEventListener('click',()=>{
    loadBooks( );
})
const loadBooks = ()=>{
    const inputField = document.getElementById('input-id');
    const inputValue = inputField.value;
    fetch(`http://openlibrary.org/search.json?q=${inputValue}`)
    .then(res => res.json())
    .then(data => displayBooks(data))
};
const displayBooks = data =>{
    console.log(data);
    const books = data.docs;
    const bookSection = document.getElementById('book-section');
    const searchSection = document.getElementById('search-section');
    bookSection.innerHTML = ``;
    searchSection.innerHTML = ``;
    const searchResultCount = document.createElement('div');
    searchResultCount.innerHTML = `
        <div>
            <h2>Search Results: ${data.numFound} </h2>
        </div>
    `
    searchSection.appendChild(searchResultCount);
    books.forEach(book => {
        // console.log(book);
        //console.log(book);
       
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="col">
        <div class="card">
          <img src=https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Author: ${book?.author_name ? book.author_name[0] : 'N/A'}</h5>
            <h4>1st Publish Year : ${book?.publishyear ?  book?.publishyear[0] : "N/A"}</h4> 
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
    </div>
        `
        bookSection.appendChild(div);

    })
   

}