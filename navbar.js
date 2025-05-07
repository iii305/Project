// Mobile navbar toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');
    
    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', function() {
            navbarLinks.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbarLinks && navbarLinks.classList.contains('active') && 
            !navbarLinks.contains(event.target) && 
            !navbarToggle.contains(event.target)) {
            navbarLinks.classList.remove('active');
        }
    });
    
    // Set active nav link based on current page
    setActiveNavLink();
});

// Function to set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        const linkHref = link.getAttribute('href');
        if (currentPage === linkHref || 
            (currentPage === '' && linkHref === 'index.html') ||
            (currentPage === 'car-details.html' && linkHref === 'cars.html')) {
            link.classList.add('active');
        }
    });
} 