// blog.js
document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postList = document.getElementById('postList');
    
    posts.forEach(function(post) {
        const postItem = document.createElement('div');
        postItem.classList.add('post');
        postItem.innerHTML = `
            <h2>${post.title}</h2>
            <p>By: ${post.username}</p>
            <p>${post.post}</p>
        `;
        postList.appendChild(postItem);
    });
});