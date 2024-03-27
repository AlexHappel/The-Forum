// form.js
document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const post = document.getElementById('post').value;

    const newPost = { username, title, post };

    // Save to local storage
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(newPost);
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to blog page
    window.location.href = 'blog.html';
});