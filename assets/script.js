const blogForm = document.getElementById('blog-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const blogPosts = document.getElementById('blog-posts');
const modeToggle = document.getElementById('mode-toggle');

// Function to add a new blog post
function addPost(title, content) {
  const postDiv = document.createElement('div');
  postDiv.classList.add('post');
  postDiv.innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
  `;
  blogPosts.appendChild(postDiv);
}

// Event listener for form submission
blogForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const title = titleInput.value;
  const content = contentInput.value;
  addPost(title, content);
  // Clear inputs after submission
  titleInput.value = '';
  contentInput.value = '';
});

// Event listener for mode toggle
modeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

window.localStorage.setItem('')