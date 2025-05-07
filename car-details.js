document.addEventListener('DOMContentLoaded', function() {
    // Get car ID from URL
    const carId = getUrlParameter('id');
    
    if (carId) {
        // Load car details
        loadCarDetails(carId);
    } else {
        // Redirect to cars page if no ID is provided
        window.location.href = 'cars.html';
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contact-seller-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            handleContactFormSubmit();
        });
    }
});

// Function to load car details
function loadCarDetails(carId) {
    const carDetailsContainer = document.getElementById('car-details-container');
    
    if (!carDetailsContainer) return;
    
    // Get car by ID
    const car = getCarById(parseInt(carId));
    
    if (!car) {
        carDetailsContainer.innerHTML = '<div class="error-message">Car not found.</div>';
        return;
    }
    
    // Update page title
    document.title = `${car.make} ${car.model} ${car.year} - PMU Car Sales`;
    
    // Build car details HTML
    const carDetailsHTML = `
        <div class="car-details">
            <div class="car-image-slider" id="car-image-slider">
                ${buildImageSlider(car.images, car.make, car.model)}
            </div>
            <div class="car-info">
                <div class="car-info-header">
                    <div class="car-title-group">
                        <h1>${car.make} ${car.model} ${car.year}</h1>
                        <div class="car-condition condition-${car.condition.toLowerCase()}">${car.condition}</div>
                    </div>
                    <div class="car-price">${formatPrice(car.price)} SAR</div>
                </div>
                
                <div class="car-meta-info">
                    <div class="car-meta-item">
                        <i class="fas fa-tachometer-alt"></i>
                        <div class="car-meta-label">Mileage</div>
                        <div class="car-meta-value">${formatPrice(car.mileage)} km</div>
                    </div>
                    <div class="car-meta-item">
                        <i class="fas fa-cog"></i>
                        <div class="car-meta-label">Transmission</div>
                        <div class="car-meta-value">${car.transmission}</div>
                    </div>
                    <div class="car-meta-item">
                        <i class="fas fa-gas-pump"></i>
                        <div class="car-meta-label">Fuel Type</div>
                        <div class="car-meta-value">${car.fuelType}</div>
                    </div>
                    <div class="car-meta-item">
                        <i class="fas fa-palette"></i>
                        <div class="car-meta-label">Color</div>
                        <div class="car-meta-value">${car.color}</div>
                    </div>
                </div>
                
                <div class="car-description">
                    <h2>Description</h2>
                    <p>${car.description}</p>
                </div>
                
                <div class="car-features">
                    <h2>Features</h2>
                    <div class="features-list">
                        ${buildFeaturesList(car.features)}
                    </div>
                </div>
                
                <div class="seller-info">
                    <h2>Seller Information</h2>
                    <div class="seller-details">
                        <div class="seller-detail">
                            <i class="fas fa-user"></i>
                            <span>${car.seller.name}</span>
                        </div>
                        <div class="seller-detail">
                            <i class="fas fa-phone"></i>
                            <span>${car.seller.phone}</span>
                        </div>
                        <div class="seller-detail">
                            <i class="fas fa-envelope"></i>
                            <span>${car.seller.email}</span>
                        </div>
                        <div class="seller-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${car.seller.location}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert HTML
    carDetailsContainer.innerHTML = carDetailsHTML;
    
    // Initialize image slider
    initImageSlider();
}

// Function to build image slider HTML
function buildImageSlider(images, make, model) {
    if (!images || images.length === 0) {
        return '<div class="slider-image active"><div class="no-image">No Images Available</div></div>';
    }
    
    let imagesHTML = '';
    let dotsHTML = '';
    
    // Add images
    images.forEach((image, index) => {
        const isActive = index === 0 ? 'active' : '';
        imagesHTML += `<img src="${image}" alt="${make} ${model}" class="slider-image ${isActive}" data-index="${index}">`;
        dotsHTML += `<div class="slider-dot ${isActive}" data-index="${index}"></div>`;
    });
    
    // Add slider controls if there are multiple images
    let controlsHTML = '';
    if (images.length > 1) {
        controlsHTML = `
            <div class="slider-controls">
                <div class="slider-arrow prev-arrow"><i class="fas fa-chevron-left"></i></div>
                <div class="slider-arrow next-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>
            <div class="slider-dots">${dotsHTML}</div>
        `;
    }
    
    return imagesHTML + controlsHTML;
}

// Function to build features list HTML
function buildFeaturesList(features) {
    if (!features || features.length === 0) {
        return '<div>No features specified</div>';
    }
    
    return features.map(feature => 
        `<div class="feature-item"><i class="fas fa-check"></i> ${feature}</div>`
    ).join('');
}

// Function to initialize image slider
function initImageSlider() {
    const slider = document.getElementById('car-image-slider');
    
    if (!slider) return;
    
    const images = slider.querySelectorAll('.slider-image');
    const dots = slider.querySelectorAll('.slider-dot');
    const prevArrow = slider.querySelector('.prev-arrow');
    const nextArrow = slider.querySelector('.next-arrow');
    
    if (images.length <= 1) return; // No need for slider controls if only one image
    
    // Function to set active image
    function setActiveImage(index) {
        // Remove active class from all images and dots
        images.forEach(image => image.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current image and dot
        images[index].classList.add('active');
        dots[index].classList.add('active');
    }
    
    // Next button click
    if (nextArrow) {
        nextArrow.addEventListener('click', function() {
            const currentIndex = parseInt(slider.querySelector('.slider-image.active').dataset.index);
            const nextIndex = (currentIndex + 1) % images.length;
            setActiveImage(nextIndex);
        });
    }
    
    // Previous button click
    if (prevArrow) {
        prevArrow.addEventListener('click', function() {
            const currentIndex = parseInt(slider.querySelector('.slider-image.active').dataset.index);
            const prevIndex = (currentIndex - 1 + images.length) % images.length;
            setActiveImage(prevIndex);
        });
    }
    
    // Dot clicks
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            const dotIndex = parseInt(this.dataset.index);
            setActiveImage(dotIndex);
        });
    });
}

// Handle contact form submission
function handleContactFormSubmit() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Here you would typically send the form data to a server
    // For this demo, we'll just show an alert
    
    alert('Your message has been sent to the seller. They will contact you soon.');
    
    // Reset form
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
    messageInput.value = '';
} 