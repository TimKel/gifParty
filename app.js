// const search = document.querySelector(".btn-primary");
// const remove = document.querySelector('.btn-danger');
// const searchBar = document.querySelector('.searchbar');
// const form = document.querySelector('.form');

// search.addEventListener('click', function(){
//     console.log('search button');
// })
// remove.addEventListener('click', function(){
//     console.log('remove button');
// })
// searchBar.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log('search BAR');
// })

const $gifArea = $('#gif-area');
const $searchInput = $('#searchbar');

function addGif(res){
    let numResults = res.data.length;
    if (numResults){
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $('<div>', {class: "col-md-4 col-12 mb-4"});
        let $newGif = $('<img>', {src: res.data[randomIdx].images.original.url, class: 'w-100'});
        $newCol.append($newGif);
        $gifArea.append($newCol); 
    }
}

$('.form').on('submit', async function(evt){
    evt.preventDefault();
    console.log('click');
    let searchTerm = $searchInput.val();
    $searchInput.val('');

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {params: {q: searchTerm, api_key: '29RgzMwmIEWWPRLLXJeud81nLWcGY9Q7'}});
    addGif(response.data);
});

$('#remove').on('click', function(){
    $gifArea.empty();
});

