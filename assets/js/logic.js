
// Function to set the theme preference
function setThemePreference(theme) {
    localStorage.setItem('theme', theme);
    document.body.className = theme; // Set the class directly on the body
}

// Function to toggle between light and dark mode
function toggleMode() {
    if (document.body.classList.contains('dark-mode')) {
        setThemePreference(''); // If currently in dark mode, switch to light mode
    } else {
        setThemePreference('dark-mode'); // If currently in light mode, switch to dark mode
    }
}

// Add event listener for the toggle mode button
document.getElementById('toggleMode').addEventListener('click', toggleMode);

// Check if there's a stored theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
    // Apply the stored theme preference
    setThemePreference(storedTheme);
}