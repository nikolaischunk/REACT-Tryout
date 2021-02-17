 //FETCH ALL
 document.getElementById('fetchAllPostDataBtn').addEventListener('click', fetchAllPostData);

 function fetchAllPostData() {
     fetch('https://jsonplaceholder.typicode.com/posts')
         .then(response => response.json())
         .then(posts => {
             let output = '<h2>Lists of All Posts</h2>';
             output += '<ul>';
             posts.forEach(function(post) {
                 output += `
                     <li>
                         ${post.title}
                     </li>
                 `;
             });
             output += '</ul>'
             document.getElementById("response").innerHTML = output;
         });
 }


 //FETCH SINGLE
 document.getElementById('fetchSinglePostDataBtn').addEventListener('click', fetchSinglePostData);

 function fetchSinglePostData() {
     fetch('https://jsonplaceholder.typicode.com/posts/1')
         .then(response => response.json())
         .then(post => {
             let singleOutput = '<h2>Lists of a single Post</h2>';
             singleOutput += '<ul>';
             singleOutput += `
             <li>
                 ${post.title}
             </li>
         `;
             singleOutput += '</ul>'
             document.getElementById("response").innerHTML = singleOutput;
         });
 };