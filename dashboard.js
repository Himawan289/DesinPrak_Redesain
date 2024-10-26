document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        window.location.href = `search-results.html?query=${encodeURIComponent(searchTerm)}`;
    }
});

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

document.title = `Hasil Pencarian: ${query}`; 

