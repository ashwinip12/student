// Form handling
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically handle the login logic
    console.log('Login attempted with:', { email, password });
});

// // Smooth scrolling for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
        
//         if (targetElement) {
//             targetElement.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//             });
//         }
//     });
// });

// // Mobile navigation handling
// window.addEventListener('resize', () => {
//     const nav = document.querySelector('.nav-links');
//     if (window.innerWidth <= 768) {
//         nav.style.display = 'none';
//     } else {
//         nav.style.display = 'flex';
//     }
// });

// // Optional: Add loading animation for images
// document.addEventListener('DOMContentLoaded', () => {
//     const images = document.querySelectorAll('img');
//     images.forEach(img => {
//         img.addEventListener('load', () => {
//             img.classList.add('loaded');
//         });
//     });
// });