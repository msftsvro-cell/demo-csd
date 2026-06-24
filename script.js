// Welcome to JavaScript!
// This file will contain the interactive behavior for your blog

console.log('Welcome to your blog! 🎉');

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// You can add more interactive features here!
// For example:
// - Add a comment form
// - Create animations
// - Add dark mode toggle
// - Make the blog dynamic
