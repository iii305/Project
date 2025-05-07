document.addEventListener('DOMContentLoaded', function() {
    // Load car makes for search dropdown
    loadCarMakes();
    
    // Load year options for min/max year dropdowns
    loadYearOptions();
    
    // Add event listener for search form
    const searchForm = document.getElementById('search-form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            performSearch();
        });
        
        // Add event listener for reset button
        searchForm.addEventListener('reset', function() {
            // Wait a bit for the form to reset before clearing results
            setTimeout(() => {
                const searchResultsContainer = document.getElementById('search-results-container');
                if (searchResultsContainer) {
                    searchResultsContainer.innerHTML = '<div class="no-results">Use the search form above to find cars.</div>';
                }
            }, 100);
        });
    }
});

// Function to load car makes for dropdown
function loadCarMakes() {
    const makeDropdown = document.getElementById('make');
    
    if (!makeDropdown) return;
    
    // Get unique makes
    const makes = getUniqueValues('make');
    
    // Add makes to dropdown
    makes.forEach(make => {
        const option = document.createElement('option');
        option.value = make;
        option.textContent = make;
        makeDropdown.appendChild(option);
    });
}

// Function to load year options
function loadYearOptions() {
    const minYearDropdown = document.getElementById('min-year');
    const maxYearDropdown = document.getElementById('max-year');
    
    if (!minYearDropdown || !maxYearDropdown) return;
    
    // Get unique years and sort
    const years = getUniqueValues('year').sort((a, b) => a - b);
    
    // Add years to dropdowns
    years.forEach(year => {
        // Min year option
        const minOption = document.createElement('option');
        minOption.value = year;
        minOption.textContent = year;
        minYearDropdown.appendChild(minOption);
        
        // Max year option
        const maxOption = document.createElement('option');
        maxOption.value = year;
        maxOption.textContent = year;
        maxYearDropdown.appendChild(maxOption);
    });
}

// Function to perform search
function performSearch() {
    const searchResultsContainer = document.getElementById('search-results-container');
    
    if (!searchResultsContainer) return;
    
    // Get search criteria from form
    const make = document.getElementById('make').value;
    const model = document.getElementById('model').value;
    const minYear = document.getElementById('min-year').value ? parseInt(document.getElementById('min-year').value) : null;
    const maxYear = document.getElementById('max-year').value ? parseInt(document.getElementById('max-year').value) : null;
    const minPrice = document.getElementById('min-price').value ? parseInt(document.getElementById('min-price').value) : null;
    const maxPrice = document.getElementById('max-price').value ? parseInt(document.getElementById('max-price').value) : null;
    const condition = document.getElementById('condition').value;
    const transmission = document.getElementById('transmission').value;
    
    // Create search criteria object
    const searchCriteria = {
        make: make,
        model: model,
        minYear: minYear,
        maxYear: maxYear,
        minPrice: minPrice,
        maxPrice: maxPrice,
        condition: condition,
        transmission: transmission
    };
    
    // Filter cars based on criteria
    const filteredCars = filterCars(searchCriteria);
    
    // Clear container
    searchResultsContainer.innerHTML = '';
    
    if (filteredCars.length === 0) {
        searchResultsContainer.innerHTML = '<div class="no-results">No cars found matching your search criteria.</div>';
        return;
    }
    
    // Add cars to container
    filteredCars.forEach(car => {
        const carCard = createCarCard(car);
        searchResultsContainer.appendChild(carCard);
    });
} 