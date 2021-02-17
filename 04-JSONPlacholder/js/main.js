//FETCH ALL
document.getElementById('fetchAllPostDataBtn').addEventListener('click', fetchAllPostData);
function fetchAllPostData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) { return response.json(); })
        .then(function (posts) {
        var output = '<h2>Lists of All Posts</h2>';
        output += '<ul>';
        posts.forEach(function (post) {
            output += "\n                     <li>\n                         " + post.title + "\n                     </li>\n                 ";
        });
        output += '</ul>';
        document.getElementById("response").innerHTML = output;
    });
}
//FETCH SINGLE
document.getElementById('fetchSinglePostDataBtn').addEventListener('click', fetchSinglePostData);
function fetchSinglePostData() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(function (response) { return response.json(); })
        .then(function (post) {
        var singleOutput = '<h2>Lists of a single Post</h2>';
        singleOutput += '<ul>';
        singleOutput += "\n             <li>\n                 " + post.title + "\n             </li>\n         ";
        singleOutput += '</ul>';
        document.getElementById("response").innerHTML = singleOutput;
    });
}
;
