document.addEventListener('DOMContentLoaded', function() {
    // Load featured cars
    loadFeaturedCars();
});

// Function to load featured cars
function loadFeaturedCars() {
    const featuredCarsContainer = document.getElementById('featured-cars-container');
    
    if (!featuredCarsContainer) return;
    
    // Sort cars by price (highest first) and take the top 3
    const featuredCars = sortCars(cars, 'price-desc').slice(0, 3);
    
    // Clear container
    featuredCarsContainer.innerHTML = '';
    
    // Add cars to container
    featuredCars.forEach(car => {
        const carCard = createCarCard(car);
        featuredCarsContainer.appendChild(carCard);
    });
} 