// logic.js
const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

toggleModeButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});