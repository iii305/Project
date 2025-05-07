document.addEventListener('DOMContentLoaded', function() {
    // Load car makes for filter
    loadCarMakes();
    
    // Load all cars initially
    loadCars();
    
    // Add event listener for filtering
    const applyFiltersButton = document.getElementById('apply-filters');
    if (applyFiltersButton) {
        applyFiltersButton.addEventListener('click', function() {
            loadCars();
        });
    }
});

// Function to load car makes for filter dropdown
function loadCarMakes() {
    const makeFilter = document.getElementById('make-filter');
    
    if (!makeFilter) return;
    
    // Get unique makes
    const makes = getUniqueValues('make');
    
    // Add makes to dropdown
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeFilter.appendChild(option);
    });
}

// Function to load cars with filtering and sorting
function loadCars() {
    const carsContainer = document.getElementById('cars-container');
    
    if (!carsContainer) return;
    
    // Get filter values
    const sortBy = document.getElementById('sort-by').value;
    const conditionFilter = document.getElementById('condition-filter').value;
    const makeFilter = document.getElementById('make-filter').value;
    
    // Apply filters
    let filteredCars = filterCars({
        condition: conditionFilter,
        make: makeFilter
    });
    
    // Apply sorting
    filteredCars = sortCars(filteredCars, sortBy);
    
    // Clear container
    carsContainer.innerHTML = '';
    
    if (filteredCars.length === 0) {
        carsContainer.innerHTML = '<div class="no-results">No cars found matching your criteria.</div>';
        return;
    }
    
    // Add cars to container
    filteredCars.forEach(car => {
        const carCard = createCarCard(car);
        carsContainer.appendChild(carCard);
    });
} 