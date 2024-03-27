const modeToggle = document.getElementById('modeToggle');
const body = document.body;

  modeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});

// Check if there are existing posts in local storage
let posts = JSON.parse(localStorage.getItem('posts')) || [];

// Function to save posts to local storage
function savePostsToLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Function to render posts
function renderPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <p>${post.content}</p>
                <small>${post.timestamp}</small>
            </div>
        `;
        postList.appendChild(li);
    });
}


function handleFormSubmission(event) {
    event.preventDefault();

    const postContent = event.target.postContent.value;

    if (postContent.trim() !== '') {
        const newPost = {
            id: Date.now(),
            content: postContent.trim(),
            timestamp: new Date().toLocaleString()
        };

        posts.push(newPost);
        savePostsToLocalStorage();
        renderPosts();
        
        
        event.target.reset();

        // Optionally, display a confirmation message
        alert('Post submitted successfully!');
    } else {
        alert('Please enter some content for your post.');
    }
}

// Attach event listener to form submission
document.addEventListener('DOMContentLoaded', function() {
    const createPostForm = document.getElementById('postForm');
    if (createPostForm) {
        createPostForm.addEventListener('submit', handleFormSubmission);
    }

    // Render existing posts when the page loads
    renderPosts();
});