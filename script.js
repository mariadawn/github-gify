const showResults = function(results) {
    let html = '';
    results.map((result) => {
    })
    
    console.log(html);
    $('#results').html(html);

};

const fetchSearchResults = function (searchValue) {
    let url = 'https://api.gify.com/v1/gifs/search?api_key=C27yyG9Cb6eA7XizjFlMCUSRadyROD29=${searchValue}';
    console.log(url);
    fetch(url)
    .then(function(res) {
        return res.json();
    }).then(function(response) {
        console.log(response.data);
        showResults(response.data);
    });

}
const bootUp = function() {
    $('#search').on('click', function(event){
        let searchValue = $('#search-box').val();
        console.log(searchValue);
        fetchSearchResults(searchValue);
    })
}

bootUp();