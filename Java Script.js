// ===========================
// LUXURY CARS AGENCY - Java Script.js
// Theme Toggle (Dark / Light Mode)
// ===========================

const btn = document.getElementById('theme-btn');
const body = document.body;

// --- Load saved theme on page start ---
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    body.setAttribute('data-theme', 'light');
    btn.innerText = '☀️ Light Mode';
} else {
    btn.innerText = '🌙 Dark Mode';
}

// --- Toggle theme on button click ---
btn.addEventListener('click', function () {
    const currentTheme = body.getAttribute('data-theme');

    if (currentTheme === 'light') {
        body.removeAttribute('data-theme');
        btn.innerText = '🌙 Dark Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        btn.innerText = '☀️ Light Mode';
        localStorage.setItem('theme', 'light');
    }
});
